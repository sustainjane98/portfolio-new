import { Page, expect } from "@playwright/test";

export default class WhoAmIPage {
  constructor(private page: Page) {}

  public async goTo() {
    await this.page.goto("/bio");
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("who-am-I-page.png", {
      fullPage: true,
    });
  }
}
