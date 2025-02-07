import {Given, Then, When} from"@badeball/cypress-cucumber-preprocessor"

When ('I verify the login link on page',function (){
    cy.get('.oxd-button').should('be.visible')
    .and('exist')
})

Then ('I verify the forgot password link',function (){
    cy.get('.orangehrm-login-forgot > .oxd-text').should('be.visible')
    .and('exist')
})