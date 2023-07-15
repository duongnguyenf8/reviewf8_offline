const { exec } = require("child_process");
const { logSuccess, logError, logInfo } = require("../views");
const { runBuild } = require("../build");

const building = async () => {
  logInfo("Building...");
  const build = await runBuild();
  if (build) {
    return true;
  }
};

const pushGit = (text) => {
  logInfo("Pushing code to Git...");

  return new Promise((resolve, reject) => {
    const pushChild = exec(`git add . && git commit -m "${text}" && git push`);

    pushChild.stdout.on("data", (data) => {
      logSuccess(data);
    });

    pushChild.stderr.on("data", (data) => {
      logInfo(data);
    });

    pushChild.on("error", (error) => {
      logError(error);
      reject(error);
    });

    pushChild.on("close", (code) => {
      if (code === 0) {
        logSuccess("Git push completed");
        resolve();
      } else {
        logError(`Git push failed with code ${code}`);
        reject(`Git push failed with code ${code}`);
      }
    });
  });
};

const buildPush = async (text) => {
  try {
    const build = await building();
    setTimeout(async () => {
      logInfo("Wait for building...");
      if (build) {
        logSuccess("Building successfully!");
        await pushGit(text);
        logSuccess("Push git successfully!");
        logInfo("Waiting deployment to Vercel");
        logInfo("https://vercel.com");
        logSuccess("https://reviewf8.vercel.app");
      }
    }, 2000);
  } catch {
    logError("Some thing went wrong!");
  }
};

module.exports = buildPush;
