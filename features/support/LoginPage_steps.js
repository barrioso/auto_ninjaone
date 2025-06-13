const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../../src/LoginPage.js");

Given("I navigate to the NinjaOne login page", async function () {
  await this.loginPage.navigateToLoginPage(this.baseURL);
});

Then("I should see the email input field", async function () {
  await this.loginPage.verifyEmailBoxIsVisible();
});

Then("I should see the password input field", async function () {
  await this.loginPage.verifyPasswordBoxIsVisible();
});

Then("I should see the Sign in button", async function () {
  await this.loginPage.verifySignInButtonIsVisible();
});

Then("I should see the Keep me signed in checkbox", async function () {
  await this.loginPage.verifyKeepMeSignedLabelIsVisible();
});

Then("I should see the Forgot your password? link", async function () {
  await this.loginPage.verifyForgotPasswordLinkIsVisible();
});

Then("I should see the Do not have an account? link", async function () {
  await this.loginPage.verifyDoNotHaveAccountLinkIsVisible();
});

When("I enter an valid Email and Password", async function () {
  await this.loginPage.inputEmailAndPassword(
    this.valid_email,
    this.valid_psswd
  );
});

When("I click on the Sign In button", async function () {
  await this.loginPage.clickSignInButton();
});

Then(
  "the MFA Setup header should be visible in the top-right corner of the modal",
  async function () {
    await this.loginPage.verifyMfaHeaderIsVisible();
  }
);

Given("I input an invalid email format", async function () {
  await this.loginPage.inputInvalidEmailFormat(this.invalid_email);
});

Given("I provide a valid password", async function () {
  await this.loginPage.inputVaidPassword(this.valid_psswd);
});

Given("I input an valid email format", async function () {
  await this.loginPage.inputValidEmailFormat(this.valid_email);
});

Given("I enter a invalid password", async function () {
  await this.loginPage.inputInvaidPassword(this.invalid_psswd);
});

Then(
  "I should the an error message displayed at the top conter of the modal",
  async function () {
    await this.loginPage.verifyErrorMessageIsVisible();
  }
);

When("I click on the Forgot your password hyperlink", async function () {
  await this.loginPage.clickForgotPassLink();
});

When("I click on the Do not have an account hyperlink", async function () {
  await this.loginPage.clickDontHaveAccountLink();
});

Then(
  "I should be redirected to a URL containing {string}",
  async function (expectedUrlPart) {
    await this.loginPage.verifyUrlContains(expectedUrlPart);
  }
);

Then("I should see the Keep me signed in label", async function () {
  await this.loginPage.verifyKeepMeSignedLabelIsVisible();
});

Then("I the checkbox of the left remains checked", async function () {
  await this.loginPage.verifyKeepMeSignedCheckboxIsCheck();
});

Then(
  "I should see the checbox to the left side of the  Keep me signed in label",
  async function () {
    await this.loginPage.verifyKeepMeSignedCheckbosIsVisible();
  }
);
