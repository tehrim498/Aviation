
Feature: open orangeHRM

     Background: pre condition name
          Given I navigate to home page
          When I verify the logo on page
@login 
     Scenario: Validate Home page
          Then I verify the browser title
@smoke
     Scenario: Validate Home page Failed
          Then I verify the browser title error message