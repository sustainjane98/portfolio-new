import { Page, expect } from "@playwright/test";

export default class DesignPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en")) await this.page.goto("/bio/skills/design");
    else await this.page.goto(`/${this.locale}/bio/skills/design`);
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("design-page.png", {
      fullPage: true,
    });
  }
}
