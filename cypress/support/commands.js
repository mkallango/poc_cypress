// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


const google = 'https://google.com'
const facebook = 'https://facebook.com'

function clearCache(){
    return window.caches.keys().then(function (cacheNames) {
        return Promise.all(
            cacheNames.map(function (cacheName) {
                return window.caches.delete(cacheName);
            })
        );
    })
  }

Cypress.Commands.add("navigateToPage", (page) => {
    if (page === "Facebook"){
        cy.visit(facebook, clearCache())
      }
      else{
        cy.visit(google, clearCache())
      }  
})