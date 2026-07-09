console.log("LeetSync content script is running 🚀");

let submittedCode = "";
let submittedLanguage = "";
let acceptedDetected = false;
let solutionProcessed = false;

window.addEventListener(
  "LEETSYNC_SUBMISSION_DATA",
  (event) => {
    submittedCode = event.detail.code || "";
    submittedLanguage =
      event.detail.language || "";

    console.log(
      "LeetSync received submission:",
      {
        language: submittedLanguage,
        code: submittedCode,
      }
    );

    createFinalSolution();
  }
);

const pageScript =
  document.createElement("script");

pageScript.src =
  chrome.runtime.getURL(
    "src/content/pageScript.js"
  );

pageScript.onload = () => {
  pageScript.remove();

  console.log(
    "LeetSync page script injected ✅"
  );
};

document.documentElement.appendChild(
  pageScript
);

function extractProblemDetails() {
  const problemSlug =
    window.location.pathname.split("/")[2];

  const problemTitle = problemSlug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  const pageText =
    document.body.innerText;

  const escapedTitle =
    problemTitle.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

  const numberMatch =
    pageText.match(
      new RegExp(
        `(\\d+)\\.\\s*${escapedTitle}`,
        "i"
      )
    );

  return {
    problemNumber:
      numberMatch?.[1] || "",

    problemTitle,

    problemSlug,

    url: window.location.href,
  };
}

function createFinalSolution() {
  if (
    solutionProcessed ||
    !acceptedDetected ||
    !submittedCode ||
    !submittedLanguage
  ) {
    return;
  }

  solutionProcessed = true;

  const problem =
    extractProblemDetails();

  const solution = {
    ...problem,

    language:
      submittedLanguage,

    code:
      submittedCode,
  };

  console.log(
    "LeetSync final solution:",
    solution
  );
  
  chrome.runtime.sendMessage(
  {
    type: "UPLOAD_SOLUTION",
    solution,
  },
  (response) => {
    console.log(
      "LeetSync background response:",
      response
    );
  }
);
}

function checkForAcceptedResult() {
  if (
    acceptedDetected ||
    solutionProcessed
  ) {
    return;
  }

  const elements =
    document.querySelectorAll(
      "span, div, h1, h2, h3"
    );

  for (
    const element of elements
  ) {
    const text =
      element.textContent?.trim();

    if (
      text === "Accepted" &&
      element.offsetParent !== null
    ) {
      acceptedDetected = true;

      console.log(
        "LeetSync: New accepted submission detected ✅"
      );

      createFinalSolution();

      return;
    }
  }
}

const observer =
  new MutationObserver(() => {
    checkForAcceptedResult();
  });

observer.observe(
  document.body,
  {
    childList: true,
    subtree: true,
    characterData: true,
  }
);

console.log(
  "LeetSync is waiting for a new submission..."
);