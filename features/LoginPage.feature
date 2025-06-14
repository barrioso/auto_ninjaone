Feature: Validate login screen behavior and flows in NinjaOne login page

  Background: Launching NinjaOne login page
    Given I navigate to the NinjaOne login page

  @login, @smoke, @critical @uicontent
  Scenario: Verify content for the NingaOne Login screen
    # This scenario verifies that a user can see the elements for the login screen
    Then I should see the email input field
    And I should see the password input field
    And I should see the Sign in button
    And I should see the checbox to the left side of the  Keep me signed in label
    And I should see the Keep me signed in label
    And I should see the Forgot your password? link
    And I should see the Do not have an account? link

  @login, @smoke, @critical
  Scenario: Verify MFA set up modalis displayed after entering valid credentials
    # This scenario verifies that a user who logs in with valid credentials can see the MFA modal
    When I enter an valid Email and Password
    And I click on the Sign In button
    Then the MFA Setup header should be visible in the top-right corner of the modal

  @login, @errorHanding @regression
  Scenario:Veirfy error messsage is displayed when email has an invalid format
    # This scenario verifies that a user is not ablee to continue with the log-in flow after entering an invalid format email address
    # And the error message is displayed 
    And I input an invalid email format
    And I provide a valid password
    When I click on the Sign In button
    Then I should the an error message displayed at the top conter of the modal

  @login @errorHanding @regression
  Scenario: Veirfy error messsage is displayed when  password is invalid
    # This scenario verifies that a user is not ablee to continue with the log-in flow after entering an invalid password
    # And the error message is displayed 
    And I input an valid email format
    And I enter a invalid password
    When I click on the Sign In button
    Then I should the an error message displayed at the top conter of the modal
  
  @login, @regression
  Scenario: Veirfy checkbox is cheked after clicking on the Keep me signed in label
    # This scenario verifies that a user is able to click on the Keep me signed in label 
    # And the checkbox remains checked
    When I click on the Keep me signed in label 
    Then I the checkbox of the left remains checked 

  @login, @smoke, @navigation @critical
  Scenario: Veirfy navigation when click on the Forgot your password? link
    # This scenario verifies that a user is able to navigate to the Reset Password page
    # And the URL contains the correct path  
    When I click on the Forgot your password hyperlink
    Then I should be redirected to a URL containing "resetPassword"

  @login, @smoke, @navigation @critical
  Scenario: User navigates to the Register page
    # This scenario verifies that a user is able to navigate to the Regiter page
    # And the URL contains the correct path  
    When I click on the Do not have an account hyperlink
    Then I should be redirected to a URL containing "register"
