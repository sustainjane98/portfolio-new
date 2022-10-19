import test, { expect } from "@playwright/test";
import A11yPage from "../pages/a11y.page";
import ContactFormPage from "../pages/contact-form.page";
import EmailService from "../service/email.service";

test.describe("ContactForm", () => {
  let a11y: A11yPage;
  let p: ContactFormPage;
  let ms = new EmailService();

  test.beforeEach(async ({ page, locale }) => {
    a11y = new A11yPage(page);
    await ms.deleteAllEmails();
    p = new ContactFormPage(page, locale);
    await p.goTo();
  });

  test("Full Complete Form", async () => {
    await p.enterName("Maxine Testnutzerin");
    await p.enterEmail("maxine@testnutzerin.de");
    await p.enterJobAdvertisement("Testjob");
    await p.enterJobLocation("Testlocation");
    await p.enterMessage("Hello, Test Test!!!!");
    await p.submit();

    /*const emailBody = await ms.getLastEmail();

    expect(emailBody).toMatchSnapshot("email-body.txt");*/
  });

  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
  test("Check a11y", async () => {
    await a11y.check();
  });
});
