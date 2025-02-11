import {Given, Then, When} from"@badeball/cypress-cucumber-preprocessor"
import { LoginPage } from "./loginpage"

const loginPage = new LoginPage()

Given ('I navigate to home page',function(){
    loginPage.navigate()
    cy.wait(300)
//cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When ('I verify the logo on page',function(){
    loginPage.verifylogo()
})

Then ('I verify the browser title',function(){
   loginPage.verifyTitle()
})

Then ('I verify the browser title error message',function(){
   loginPage.veriyTitleError()
})