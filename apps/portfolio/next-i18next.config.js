const path = require("path");
const process = require("process");

const baseDir = process.cwd();

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localePath: path.resolve(baseDir, "../../libs/i18n"),
  },
};
