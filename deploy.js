const pages = require("gh-pages");

pages.publish(
  "build",
  { push: true, branch: "gh-pages", repo: "https://github.com/sjwarren91/ClickandMorty.git" },
  () => {
    console.log("Deployed.");
  }
);
