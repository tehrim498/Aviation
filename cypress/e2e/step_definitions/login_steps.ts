import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dasbhoard";
const loginPage = new Login();
const dashboardPage = new Dashboard();

Given("I navigate to the Login Page", function () {});

Then("I should see the email field displayed", function () {});

Then("I should see the password field displayed", function () {});

Then("I should see the login button displayed", function () {});
