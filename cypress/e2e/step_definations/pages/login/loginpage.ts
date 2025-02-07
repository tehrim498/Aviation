export class LoginPage{

navigate(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}
enterUsername()
{
    cy.get('.orangehrm-login-branding >img').should('be.visible')
    .and('exist')
}
enterPassword(){
    cy.title().should('eq','OrangeHRM')
}
clickonLoginBtn(){
    cy.title().should('eq','ABC')
}

} 