import { Page } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";

export default class A11yPage {
  constructor(private page: Page) {}

  public async inject() {
    await injectAxe(this.page);
  }

  public async check() {
    await checkA11y(this.page);
  }
}
