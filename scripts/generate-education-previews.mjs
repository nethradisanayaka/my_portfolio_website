import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, extname, join, relative, resolve } from "node:path";

const projectRoot = resolve(process.cwd());
const sourceRoot = join(projectRoot, "education-pdfs");
const previewRoot = join(sourceRoot, "previews");

function findPdfToPpm() {
  const configured = process.env.PDFTOPPM_PATH?.replace(/^"|"$/g, "");
  if (configured && existsSync(configured)) return configured;

  const lookup = process.platform === "win32" ? "where" : "which";
  const result = spawnSync(lookup, ["pdftoppm"], { encoding: "utf8" });
  if (result.status === 0) {
    const firstPath = result.stdout.split(/\r?\n/).map((value) => value.trim()).find(Boolean);
    if (firstPath) return firstPath;
  }

  return null;
}

function collectPdfs(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entryPath === previewRoot) return [];
      return collectPdfs(entryPath);
    }
    return extname(entry.name).toLowerCase() === ".pdf" ? [entryPath] : [];
  });
}

function previewBaseFor(pdfPath) {
  const relativePath = relative(sourceRoot, pdfPath).replace(/\.pdf$/i, "");
  return join(previewRoot, relativePath);
}

mkdirSync(previewRoot, { recursive: true });
const pdfs = collectPdfs(sourceRoot);

if (pdfs.length === 0) {
  console.log("No education PDFs found; no previews generated.");
  process.exit(0);
}

const converter = findPdfToPpm();
if (!converter) {
  console.warn("pdftoppm was not found. Install Poppler or set PDFTOPPM_PATH to generate PDF previews.");
  process.exit(0);
}

let generated = 0;
let skipped = 0;

for (const pdfPath of pdfs) {
  const outputBase = previewBaseFor(pdfPath);
  const outputPath = `${outputBase}.png`;
  mkdirSync(dirname(outputPath), { recursive: true });

  const pdfModified = statSync(pdfPath).mtimeMs;
  const previewExists = existsSync(outputPath);
  if (previewExists && statSync(outputPath).mtimeMs >= pdfModified) {
    skipped += 1;
    continue;
  }

  const result = spawnSync(
    converter,
    ["-f", "1", "-l", "1", "-singlefile", "-png", "-scale-to", "1200", pdfPath, outputBase],
    { encoding: "utf8" },
  );

  if (result.status !== 0 || !existsSync(outputPath)) {
    console.warn(`Could not generate a preview for ${relative(sourceRoot, pdfPath)}.`);
    if (result.stderr) console.warn(result.stderr.trim());
    continue;
  }

  generated += 1;
}

console.log(`Education previews: ${generated} generated, ${skipped} already current, ${pdfs.length} PDFs scanned.`);
