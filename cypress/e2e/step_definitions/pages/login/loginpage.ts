export class LoginPage{

navigate(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}
verifylogo()
{
    cy.get('.orangehrm-login-branding >img').should('be.visible')
    .and('exist')
}
verifyTitle(){
    cy.title().should('eq','OrangeHRM')
}
veriyTitleError(){
    cy.title().should('eq','ABC')
}

} 