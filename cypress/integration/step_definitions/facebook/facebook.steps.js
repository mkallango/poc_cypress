/*describe('Teste Cypress on Docker', ()=>{
    it('teste google search', ()=>{
        cy.visit()
        cy.get('input[title="Pesquisar"]').type('Cypress.io {enter}')
        cy.get('a[href="https://www.cypress.io/"]').should('be.visible')
    })
})
*/
const {When} = require("cypress-cucumber-preprocessor/steps")

When (/^do a login$/, ()=>{
    cy.get('[data-testid="royal_email"]').type("email")
    cy.get('[data-testid="royal_pass"]').type("password")
    cy.get('[data-testid="royal_login_button"]').click()
})

Then (/^first page shall be displayed$/, () => {
    
})