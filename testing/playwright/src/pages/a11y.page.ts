import { expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
export default class A11yPage {
  constructor(private page: Page) {}

  public async check() {
    const { violations } = await new AxeBuilder({ page: this.page })
      .withTags([
        "best-practice",
        "wcag2a",
        "wcag2aa",
        "wcag2aaa",
        "wcag21a",
        "wcag21aa",
        "wcag21aaa",
      ])
      .disableRules(["color-contrast-enhanced", "color-contrast"])
      .analyze();

    expect(violations).toHaveLength(0);
  }
}
