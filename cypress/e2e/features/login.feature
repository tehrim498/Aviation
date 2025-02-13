
Feature: verify login for ca

     Background: Navigating to login from dashboard
          Given I navigate to the Dashboard Page

     Scenario: Verify elements on the Login Page
          Given I navigate to the Login Page
          Then I should see the email field displayed
          And I should see the password field displayed
          And I should see the login button displayed