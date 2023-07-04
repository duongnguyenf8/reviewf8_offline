const { exec } = require("child_process");
const { logSuccess, logError, logInfo } = require("../views");

function runBuild() {
  const createListCommand = "python createList.py";
  const renderCommand = "node ./script/render.js";

  exec(createListCommand, (error, stdout, stderr) => {
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

    exec(renderCommand, (error, stdout, stderr) => {
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
}

module.exports = {
  runBuild,
};
