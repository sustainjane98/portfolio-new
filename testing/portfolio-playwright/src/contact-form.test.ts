import test, { expect } from "@playwright/test";
import ContactFormPage from "./pages/contact-form.page";
import EmailService from "./service/email.service";

test.describe("ContactForm", () => {
  let ms = new EmailService();

  test.beforeEach(async ({ page }) => {
    await ms.deleteAllEmails();
    const p = new ContactFormPage(page);
    await p.goTo();
  });

  test("Full Complete Form", async ({ page }) => {
    const p = new ContactFormPage(page);

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
    const p = new ContactFormPage(page);

    await p.checkStructure();
  });
});
