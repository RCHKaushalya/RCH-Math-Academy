const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "assets/logo.svg",
  "assets/tutor-avatar.svg",
  "lessons/index.html",
  "lessons/counting-objects.html",
  "lessons/adding-numbers.html",
  "lessons/linear-equations.html",
  "nursery/shapes.html",
  "docs/08-action-tracker.md"
];
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
  "Study a short lesson",
  "assets/logo.svg",
  "assets/tutor-avatar.svg",
  "lessons/index.html",
  "nursery/shapes.html"
];

const missingFragments = requiredFragments.filter((fragment) => !html.includes(fragment));

if (missingFragments.length > 0) {
  console.error(`Missing required HTML fragments: ${missingFragments.join(", ")}`);
  process.exit(1);
}

const publicFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "lessons/index.html",
  "lessons/counting-objects.html",
  "lessons/adding-numbers.html",
  "lessons/linear-equations.html",
  "nursery/shapes.html"
];

const forbiddenPublicTerms = [
  "AdSense",
  "GitHub",
  "docs/README",
  "requirement",
  "requirements",
  "tracker",
  "roadmap",
  "project strategy",
  "sky-blue",
  "sky blue"
];

const publicTermHits = [];

for (const file of publicFiles) {
  const text = fs.readFileSync(path.join(root, file), "utf8").toLowerCase();
  for (const term of forbiddenPublicTerms) {
    if (text.includes(term.toLowerCase())) {
      publicTermHits.push(`${file}: ${term}`);
    }
  }
}

if (publicTermHits.length > 0) {
  console.error(`Public files contain internal wording: ${publicTermHits.join(", ")}`);
  process.exit(1);
}

console.log("Static site check passed.");
