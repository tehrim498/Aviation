import {Given, Then, When} from"@badeball/cypress-cucumber-preprocessor"
import { LoginPage } from "./loginpage"

const loginPage = new LoginPage()

Given ('I navigate to home page',function(){
    loginPage.navigate()
//cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When ('I verify the logo on page',function(){
    loginPage.enterUsername()
})

Then ('I verify the browser title',function(){
   loginPage.enterPassword()
})

Then ('I verify the browser title error message',function(){
   loginPage.clickonLoginBtn()
})