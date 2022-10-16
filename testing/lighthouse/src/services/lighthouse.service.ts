import fs from "fs";
//@ts-ignore
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import sanitize from "sanitize-filename";

export default class LighthouseService {
  private BASE_URL = "http://localhost:3000";

  public async checkPage(page: string) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    try {
      const options = {
        logLevel: "info",
        output: "html",
        port: chrome.port,
      };
      const runnerResult = await lighthouse(`${this.BASE_URL}${page}`, options);

      // `.report` is the HTML report as a string
      const reportHtml = runnerResult.report;

      const cwd = process.cwd();

      const filename = `${cwd}/results/lighthouse-${sanitize(page)}.html`;

      fs.writeFileSync(filename, reportHtml);

      return filename;
    } finally {
      await chrome.kill();
    }
  }
}
