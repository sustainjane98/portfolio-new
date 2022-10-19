import { Page, expect } from "@playwright/test";

export default class ProcessModelPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en"))
      await this.page.goto("/bio/skills/process_model");
    else await this.page.goto(`/${this.locale}/bio/skills/process_model`);
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("process-model-page.png", {
      fullPage: true,
    });
  }
}
