const fs = require("fs");
const path = require("path");

const line = "Contest 88 paid $3; by midnight I was entering 89 unsupervised.";

if (line.length < 1 || line.length > 100) {
  throw new Error("entry must be 1 to 100 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(process.cwd(), "out");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
