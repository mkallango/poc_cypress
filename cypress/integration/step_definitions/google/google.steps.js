/*describe('Teste Cypress on Docker', ()=>{
    it('teste google search', ()=>{
        cy.visit()
        cy.get('input[title="Pesquisar"]').type('Cypress.io {enter}')
        cy.get('a[href="https://www.cypress.io/"]').should('be.visible')
    })
})
*/

const Google = require('../../../page_objects/google_po')
const {
  When
 } = require("cypress-cucumber-preprocessor/steps");

When(/^I search for "(.*)"$/, (search_text) => {
  cy.get(Google.search_input).type(search_text + "{enter}")  
})




