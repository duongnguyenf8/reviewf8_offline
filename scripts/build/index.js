const { exec } = require("child_process");
const { logSuccess, logError, logInfo } = require("../views");

async function runBuild() {
  const createListCommand = "python scripts/build/createList.py";
  const renderCommand = "node scripts/build/render.js";

  await exec(createListCommand, async (error, stdout, stderr) => {
    logInfo("Building data.json...");

    if (error) {
      logError(`Error running createList.py: ${error.message}`);
      return;
    }
    if (stderr) {
      logError(`createList.py stderr: ${stderr}`);
      return;
    }

    logSuccess("createList.py completed.");

    await exec(renderCommand, (error, stdout, stderr) => {
      logInfo("Building index.html...");
      if (error) {
        logError(`Error running render.js: ${error.message}`);
        return;
      }
      if (stderr) {
        logError(`render.js stderr: ${stderr}`);
        return;
      }
      logSuccess("render.js completed.");
    });
  });
  return true;
}

module.exports = {
  runBuild,
};
