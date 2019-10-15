const {
    Given, 
    Then
   } = require("cypress-cucumber-preprocessor/steps");

Given(/^I open "(.*)" page$/, (page) => {
    cy.navigateToPage(page)  
})


Then(/^I see "(.*)" in the title$/, (title) => {
    cy.title().should('contains', title)
  })
  