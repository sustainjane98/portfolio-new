import { expect, Page } from "@playwright/test";
import {
  dataTestIdBodyGenerator,
  DataTestIds,
} from "@portfolio/shared-testing";

export default class ContactFormPage {
  constructor(private page: Page, private locale: string) {}

  public async goTo() {
    if (this.locale.includes("en")) await this.page.goto("/contactMe");
    else await this.page.goto(`/${this.locale}/contactMe`);
  }

  public async checkStructure() {
    await this.page
      .locator(dataTestIdBodyGenerator(DataTestIds.SKILL_BODY_CONTAINER))
      .scrollIntoViewIfNeeded();
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await expect(this.page).toHaveScreenshot("contact-form-page.png", {
      fullPage: true,
    });
  }

  public async enterName(name: string) {
    await this.page
      .locator(dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_NAME_INPUT))
      .type(name);
  }

  public async enterEmail(email: string) {
    await this.page
      .locator(dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_EMAIL_INPUT))
      .type(email);
  }

  public async enterJobAdvertisement(jobAdvertisement: string) {
    await this.page
      .locator(
        dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_JOB_ADVERTISEMENT_INPUT)
      )
      .type(jobAdvertisement);
  }

  public async enterJobContactReason(contactReason: string) {
    await this.page
      .locator(
        dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_CONTACT_REASON_INPUT)
      )
      .type(contactReason);
  }

  public async enterJobLocation(jobLocation: string) {
    await this.page
      .locator(
        dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_JOB_LOCATION_INPUT)
      )
      .type(jobLocation);
  }

  public async enterMessage(message: string) {
    await this.page
      .locator(dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_MESSAGE_TEXTAREA))
      .type(message);
  }

  public async submit() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page
        .locator(dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_SUBMIT_BUTTON))
        .click(),
    ]);
  }

  public async selectContactReason(option: string) {
    await this.page
      .locator(
        dataTestIdBodyGenerator(DataTestIds.CONTACT_ME_CONTACT_REASON_SELECT)
      )
      .selectOption(option);
  }
}
