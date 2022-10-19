import { Page, expect } from "@playwright/test";

export default class FrontendPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en"))
      await this.page.goto("/bio/skills/frontend");
    else await this.page.goto(`/${this.locale}/bio/skills/frontend`);
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("frontend-page.png", {
      fullPage: true,
    });
  }
}
