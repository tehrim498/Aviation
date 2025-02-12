import {Given, Then, When} from"@badeball/cypress-cucumber-preprocessor" 

Given('I verify get request', function(){
    cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1")
    .its('status')
    .should('equal', 200)
})

When('I verify post request', ()=>{
    cy.request({
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts/",
        body: {
            title: 'Testing for first time in year in feb 2024',
            body: 'All about testing',
            userId: 1
        }

    })
})

When('I verify put request', ()=>{
    cy.request({
        method: 'PUT',
        url: "https://jsonplaceholder.typicode.com/posts/1",
        body: {
            title: 'Updated Testing for not first time in 2023',
            body: 'All about testing',
            userId: 1,
            id: 1
        }
    })
})

Then('I verify delete request', ()=>{
    cy.request({
        method: 'DELETE',
        url: "https://jsonplaceholder.typicode.com/posts/1"
    })
    .its('status')
    .should('equal', 200)
})