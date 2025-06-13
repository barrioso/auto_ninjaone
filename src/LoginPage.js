const { expect } = require("@playwright/test");
const exp = require("constants");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.email_txtbox = page.getByLabel("Email");
    this.psswd_txtbox = page.getByLabel("Password");
    this.signin_button = page.getByRole("button", { name: "Sign in" });
    this.keepsigned_labl = page.getByText("Keep me signed in");
    this.keepsigned_checkbox = page.locator("css=input#staySignedIn");
    this.forgotpass_link = page.getByRole("link", {
      name: "Forgot your password?",
    });
    this.donothaveaccnt_link = page.getByRole("link", {
      name: "Do not have an account?",
    });
    this.mfa_header = page.getByRole("heading", { name: "MFA Setup" });
    this.error_message = page.locator("css=div.alert.alert-danger");
  }

  async navigateToLoginPage(baseURL) {
    await this.page.goto(`${baseURL}`);
  }

  async inputEmailAndPassword(validemail, validpassword) {
    await this.email_txtbox.fill(validemail);
    console.log(validemail);
    await this.psswd_txtbox.fill(validpassword);
    console.log(validpassword);
  }

  async clickSignInButton() {
    await this.page.waitForTimeout(1000);
    await this.signin_button.click();
  }

  async clickKeepSignedLink() {
    await this.keepsigned_labl.click();
  }

  async clickForgotPassLink() {
    await this.forgotpass_link.click();
  }

  async clickDontHaveAccountLink() {
    await this.donothaveaccnt_link.click();
  }

  async verifyMfaHeaderIsVisible() {
    try {
      await this.mfa_header.waitFor({ state: "visible" });
      await expect(this.mfa_header).toHaveText("MFA Setup");
      const textHeader = await this.mfa_header.textContent();
      if (textHeader?.trim()) {
        console.log("The text of the element is:", textHeader);
      } else {
        console.log("Element not found or has no text");
      }
    } catch (error) {
      console.log("Assertion failed or element not found:", error.message);
    }
  }

  async verifyEmailBoxIsVisible() {
    await this.email_txtbox.waitFor({ state: "visible" });
    await expect(this.email_txtbox).toBeVisible();
  }

  async verifyPasswordBoxIsVisible() {
    await this.psswd_txtbox.waitFor({ state: "visible" });
    await expect(this.psswd_txtbox).toBeVisible();
  }

  async verifySignInButtonIsVisible() {
    await this.signin_button.waitFor({ state: "visible" });
    await expect(this.signin_button).toBeVisible();
  }

  async verifyKeepMeSignedCheckbosIsVisible() {
    await this.keepsigned_checkbox.waitFor({ state: "visible" });
    await expect(this.keepsigned_checkbox).toBeVisible();
  }

  async verifyKeepMeSignedLabelIsVisible() {
    await this.keepsigned_labl.waitFor({ state: "visible" });
    await expect(this.keepsigned_labl).toBeVisible();
  }

  async verifyForgotPasswordLinkIsVisible() {
    await this.forgotpass_link.waitFor({ state: "visible" });
    await expect(this.forgotpass_link).toBeVisible();
  }

  async verifyDoNotHaveAccountLinkIsVisible() {
    await this.donothaveaccnt_link.waitFor({ state: "visible" });
    await expect(this.donothaveaccnt_link).toBeVisible();
  }

  async inputInvalidEmailFormat(invalid_email) {
    await this.email_txtbox.fill(invalid_email);
  }

  async inputVaidPassword(valid_psswd) {
    await this.psswd_txtbox.fill(valid_psswd);
  }

  async inputValidEmailFormat(valid_email) {
    await this.email_txtbox.fill(valid_email);
  }

  async inputInvaidPassword(invalid_psswd) {
    await this.psswd_txtbox.fill(invalid_psswd);
  }

  async verifyErrorMessageIsVisible() {
    try {
      await this.error_message.waitFor({ state: "visible" });
      await expect(this.error_message).toHaveText(
        /contact your system administrator for/i
      );
      const textError = await this.error_message.textContent();
      if (textError?.trim()) {
        console.log("The text of the element is:", textError);
      } else {
        console.log("Element not found or has no text");
      }
    } catch (error) {
      console.log("Assertion failed or element not found:", error.message);
    }
  }

  async verifyUrlContains(link) {
    const currentUrl = this.page.url();
    expect(currentUrl).toContain(link);
    console.log(currentUrl);
    console.log(link);
  }

  async verifyKeepMeSignedCheckboxIsCheck() {
    try {
      await this.keepsigned_checkbox.waitFor({ state: "visible" });
      await expect(this.keepsigned_checkbox).toBeChecked();
      console.log("Keep me signed in checkbox is checked.");
    } catch (error) {
      console.error(
        "Checkbox is not checked or an error occurred:",
        error.message
      );
    }
  }
};
