console.log(
  "LeetSync background service worker running 🚀"
);

const extensionMap = {
  java: "java",
  "c++": "cpp",
  python: "py",
  python3: "py",
  javascript: "js",
  c: "c",
  "c#": "cs",
  go: "go",
  kotlin: "kt",
  rust: "rs",
  swift: "swift",
};

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);

  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

async function uploadSolution(solution) {
  const config = await chrome.storage.local.get([
    "githubUsername",
    "repository",
    "githubToken",
  ]);

  const {
    githubUsername,
    repository,
    githubToken,
  } = config;

  if (
    !githubUsername ||
    !repository ||
    !githubToken
  ) {
    throw new Error(
      "GitHub configuration is missing"
    );
  }

  const extension =
    extensionMap[
      solution.language.toLowerCase()
    ];

  if (!extension) {
    throw new Error(
      `Unsupported language: ${solution.language}`
    );
  }

  const folderName = solution.problemNumber
  ? `${solution.problemNumber}-${solution.problemSlug}`
  : solution.problemSlug;

  const filePath =
    `solution_of_leetcode/${folderName}/Solution.${extension}`;

  const apiUrl =
    `https://api.github.com/repos/` +
    `${githubUsername}/` +
    `${repository}/contents/` +
    `${filePath}`;

  let sha;

  const existingFileResponse =
    await fetch(apiUrl, {
      headers: {
        Authorization:
          `Bearer ${githubToken}`,

        Accept:
          "application/vnd.github+json",
      },
    });

    if (
  !existingFileResponse.ok &&
  existingFileResponse.status !== 404
) {
  const errorData =
    await existingFileResponse.json();

  throw new Error(
    errorData.message ||
    "Could not check existing GitHub file"
  );
}

  if (existingFileResponse.ok) {
    const existingFile =
      await existingFileResponse.json();

    sha = existingFile.sha;
  }

  const requestBody = {
    message:
      `Add LeetCode ${solution.problemNumber}: ` +
      solution.problemTitle,

    content:
      encodeBase64(solution.code),
  };

  if (sha) {
    requestBody.sha = sha;

    requestBody.message =
      `Update LeetCode ${solution.problemNumber}: ` +
      solution.problemTitle;
  }

  const uploadResponse =
    await fetch(apiUrl, {
      method: "PUT",

      headers: {
        Authorization:
          `Bearer ${githubToken}`,

        Accept:
          "application/vnd.github+json",

        "Content-Type":
          "application/json",
      },

      body:
        JSON.stringify(requestBody),
    });

  const result =
    await uploadResponse.json();

  if (!uploadResponse.ok) {
    throw new Error(
      result.message ||
      "GitHub upload failed"
    );
  }

  return {
    filePath,
    commitUrl:
      result.commit?.html_url,
  };
}

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (
      message.type !==
      "UPLOAD_SOLUTION"
    ) {
      return;
    }

    console.log(
      "Solution received by background:",
      message.solution
    );

    uploadSolution(message.solution)
      .then((result) => {
        console.log(
          "Solution uploaded to GitHub ✅",
          result
        );

        sendResponse({
          success: true,
          message:
            "Solution uploaded to GitHub",
          ...result,
        });
      })
      .catch((error) => {
        console.error(
          "GitHub upload failed ❌",
          error
        );

        sendResponse({
          success: false,
          message: error.message,
        });
      });

    return true;
  }
);