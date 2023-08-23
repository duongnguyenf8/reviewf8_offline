const buildPush = require("./routes");
const yargs = require("yargs");

const argv = yargs(process.argv.slice(2)).default("text", "update code").argv;

const text = argv._[0] || argv.text;

buildPush(text).catch((error) => {
  console.error(error);
});