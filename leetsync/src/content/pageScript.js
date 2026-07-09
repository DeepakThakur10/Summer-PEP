const originalFetch = window.fetch;

window.fetch = async function (...args) {
  const [resource, options] = args;

  const url =
    typeof resource === "string"
      ? resource
      : resource?.url || "";

  if (
    url.includes("/submit/") &&
    options?.body
  ) {
    try {
      const submission =
        JSON.parse(options.body);

      const submissionData = {
        code:
          submission.typed_code || "",

        language:
          submission.lang || "",
      };

      window.dispatchEvent(
        new CustomEvent(
          "LEETSYNC_SUBMISSION_DATA",
          {
            detail:
              submissionData,
          }
        )
      );

      console.log(
        "LeetSync captured submission ✅"
      );
    } catch (error) {
      console.error(
        "LeetSync could not capture submission:",
        error
      );
    }
  }

  return originalFetch.apply(
    this,
    args
  );
};