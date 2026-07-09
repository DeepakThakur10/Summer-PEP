const manifest = {
  manifest_version: 3,

  name: "LeetSync",

  version: "1.0.0",

  description:
    "Automatically sync accepted LeetCode solutions to GitHub",

  permissions: ["storage"],

  host_permissions: [
    "https://leetcode.com/*",
    "https://api.github.com/*",
  ],

  background: {
    service_worker: "src/background/background.js",
    type: "module",
  },

  content_scripts: [
    {
      matches: ["https://leetcode.com/problems/*"],
      js: ["src/content/content.js"],
    },
  ],
  web_accessible_resources: [
  {
    resources: [
      "src/content/pageScript.js"
    ],
    matches: [
      "https://leetcode.com/*"
    ],
  },
  ],

  action: {
    default_popup: "index.html",
    default_title: "LeetSync",
  },
};

export default manifest;