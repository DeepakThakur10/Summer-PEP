console.log("LeetSync content script is running 🚀");

let alreadyDetected = false;

function extractProblemDetails() {
  const problemSlug =
    window.location.pathname
      .split("/")[2];

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

  const numberMatch =
    pageText.match(
      new RegExp(
        `(\\d+)\\.\\s*${problemTitle}`,
        "i"
      )
    );

  const problemNumber =
    numberMatch?.[1] || "";

  const solution = {
    problemNumber,
    problemTitle,
    problemSlug,
    url: window.location.href,
  };

  console.log(
    "LeetSync extracted problem:",
    solution
  );
}

function checkForAcceptedResult() {
  if (alreadyDetected) {
    return;
  }

  const elements = document.querySelectorAll(
    "span, div, h1, h2, h3"
  );

  for (const element of elements) {
    const text = element.textContent?.trim();

    if (
      text === "Accepted" &&
      element.offsetParent !== null
    ) {
      alreadyDetected = true;

      console.log(
        "LeetSync: New accepted submission detected ✅"
      );

      setTimeout(() => {
        extractProblemDetails();
      }, 1000);

      return;
    }
  }
}

const observer = new MutationObserver(() => {
  checkForAcceptedResult();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});

console.log(
  "LeetSync is waiting for a new submission..."
);