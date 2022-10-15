import { Page, expect } from "@playwright/test";

export default class DesignPage {
  constructor(private page: Page) {}

  public async goTo() {
    await this.page.goto("/bio/skills/design");
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("design-page.png", {
      fullPage: true,
    });
  }
}
