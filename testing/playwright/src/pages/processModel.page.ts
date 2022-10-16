import { Page, expect } from "@playwright/test";

export default class ProcessModelPage {
  constructor(private page: Page) {}

  public async goTo() {
    await this.page.goto("/bio/skills/process_model");
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("process-model-page.png", {
      fullPage: true,
    });
  }
}
