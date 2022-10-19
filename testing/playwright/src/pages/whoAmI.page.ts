import { Page, expect } from "@playwright/test";

export default class WhoAmIPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en")) await this.page.goto("/bio");
    else await this.page.goto(`/${this.locale}/bio`);
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("who-am-I-page.png", {
      fullPage: true,
    });
  }
}
