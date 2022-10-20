import { Page, expect } from "@playwright/test";
import {
  dataTestIdBodyGenerator,
  DataTestIds,
} from "@portfolio/shared-testing";

export default class ValuesPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en")) await this.page.goto("/values");
    else await this.page.goto(`/${this.locale}/values`);
  }

  public async checkStructure() {
    await this.page
      .locator(dataTestIdBodyGenerator(DataTestIds.SKILL_BODY_CONTAINER))
      .scrollIntoViewIfNeeded();
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await expect(this.page).toHaveScreenshot("values-page.png", {
      fullPage: true,
    });
  }
}
