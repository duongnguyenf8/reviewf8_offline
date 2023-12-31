const logSuccess = (message) => {
  console.log("\x1b[32m✓", message, "\x1b[0m");
};

const logError = (message) => {
  console.error("\x1b[31m✗", message, "\x1b[0m");
};

const logInfo = (message) => {
  console.log("\x1b[36mℹ", message, "\x1b[0m");
};

module.exports = {
  logSuccess,
  logError,
  logInfo,
};
