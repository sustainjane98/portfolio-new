import LighthouseService from "./services/lighthouse.service";
import open from "open";

const pages: string[] = [
  "/",
  "/projects",
  "/bio",
  "/bio/skills/frontend",
  "/bio/skills/backend",
  "/bio/skills/design",
  "/bio/skills/process_model",
];

(async () => {
  const resultFiles = [];
  const ls = new LighthouseService();

  for (const page of pages) {
    resultFiles.push(await ls.checkPage(page));
  }

  for (const a of resultFiles) {
    open(a);
  }
})();
