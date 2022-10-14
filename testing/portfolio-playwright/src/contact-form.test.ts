import test from "@playwright/test";
import ContactFormPage from "./pages/contact-form.page";

test.describe("ContactForm", () => {
  test.beforeEach(async ({ page }) => {
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
  });

  test("Check visual stucture", async ({ page }) => {
    const p = new ContactFormPage(page);

    await p.checkStructure();
  });
});
