const {
  After,
  Before,
  AfterStep,
  Status,
  setWorldConstructor,
} = require("@cucumber/cucumber");
const playwright = require("@playwright/test");
const { LoginPage } = require("../../src/LoginPage.js");
const config = require("../../envs/config.js");

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.loginPage = null;
    this.valid_email = config.valid_email;
    this.valid_psswd = config.valid_psswd;
    (this.invalid_email = config.invalid_email),
      (this.invalid_psswd = config.invalid_psswd);
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  // This hook will be executed before all scenarios
  console.log("Running");
  this.browser = await playwright.chromium.launch({
    headless: false,
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.baseURL = config.baseURL;

  this.loginPage = new LoginPage(this.page);
});

AfterStep(async function ({ result }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();
    await this.page.screenshot({ path: "screenshot1.png" });
    this.attach(buffer.toString("base64"), "base64:image/png");
    console.log("Screenshot logged");
  }
});
After(async function () {
  console.log("--");
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
});
