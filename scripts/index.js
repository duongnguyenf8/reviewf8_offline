// index.js
const buildPushAndDeploy = require("./routes");
const yargs = require("yargs");

const argv = yargs(process.argv.slice(2)).default("text", "update code").argv;

const text = argv._[0] || argv.text;

buildPushAndDeploy(text).catch((error) => {
  console.error(error);
});
