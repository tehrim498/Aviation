
   Feature: Home page orhaneHRM
   
    Scenario: Validate Home page orangeHRM
     Given I navigate to home page
        When I verify the logo on page
        When I verify the login link on page
        Then I verify the forgot password link
