const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const requiredFiles = ["index.html", "styles.css", "app.js", "docs/08-action-tracker.md"];
const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const requiredFragments = [
  "RCH Math Academy",
  "Tap the group with three circles.",
  "Mathematics from first numbers to advanced ideas.",
  "Study a short lesson"
];

const missingFragments = requiredFragments.filter((fragment) => !html.includes(fragment));

if (missingFragments.length > 0) {
  console.error(`Missing required HTML fragments: ${missingFragments.join(", ")}`);
  process.exit(1);
}

console.log("Static site check passed.");
