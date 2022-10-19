import { Page, expect } from "@playwright/test";

export default class IndexPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en")) await this.page.goto("/");
    else await this.page.goto(`/${this.locale}`);
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("index-page.png", {
      fullPage: true,
    });
  }
}
