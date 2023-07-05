const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const { logSuccess, logError } = require("../views");

const dataPath = "assets/data/data.json";
const stylePath = "../../../assets/css/style.css";
const faviconPath = "../../../assets/images/favicon.ico";
const scriptPath = "../../../assets/js/pages.js";

function renderPage(folderPath, folder, subfolder) {
  const readmePath = path.join(folderPath, "README.md");
  const outputPath = path.join(folderPath, "index.html");

  fs.readFile(readmePath, "utf8", (err, data) => {
    if (err) {
      logError(`Error reading file: ${readmePath}`);
      return;
    }

    const cssLink = `<link rel="stylesheet" href="${stylePath}" />`;
    const faviconLink = `<link rel="shortcut icon" href="${faviconPath}" type="image/x-icon" />`;
    const scriptTag = `<script src="${scriptPath}" defer></script>`;

    const md = new MarkdownIt();
    const htmlContent = `<!DOCTYPE html><html><head><meta charset="UTF-8">${faviconLink}<title>${folder}/${subfolder}</title>${cssLink}</head><body>${md.render(
      data
    )}${scriptTag}</body></html>`;
    fs.writeFile(outputPath, htmlContent, (err) => {
      if (err) {
        logError(`Error writing file: ${outputPath}`);
        return;
      }
      logSuccess(`Successfully created: ${outputPath}`);
    });
  });
}

fs.readFile(dataPath, "utf8", (err, jsonData) => {
  if (err) {
    logError(`Error reading file: ${dataPath}`);
    return;
  }

  const folders = JSON.parse(jsonData);

  for (const folder in folders) {
    const subfolders = folders[folder];

    for (const subfolder of subfolders) {
      const folderPath = path.join("Review", folder, subfolder);
      renderPage(folderPath, folder, subfolder);
    }
  }
});
