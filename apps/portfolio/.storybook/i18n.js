import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import path from "path";

const baseDir = process.cwd();

const resPath = path.resolve(baseDir, "../../../libs/i18n");

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  localePath: resPath,
});

export default i18n;
