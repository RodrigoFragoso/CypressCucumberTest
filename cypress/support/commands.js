// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import LOC from '../support/locators/locators'

Cypress.Commands.add("login", () => {
    cy.visit(Cypress.env('host'));
    localStorage.clear();
});

Cypress.Commands.add('inserirCredenciais', (valor) => {
    if(valor == "invalido"){
        cy.get(LOC.LOGIN.INPUT_USERNAME).clear().type(Cypress.env('username')+"invalido");
        cy.get(LOC.LOGIN.INPUT_PASSWORD).clear().type(Cypress.env('password')+"invalido");
        cy.get(LOC.LOGIN.BTN_LOGIN).click();
        cy.get(LOC.LOGIN.MESSAGE_ERROR_LOGIN).contains(LOC.LOGIN.TEXT_ERROR_LOGIN);
    }else{
        cy.get(LOC.LOGIN.INPUT_USERNAME).type(Cypress.env('username'));
        cy.get(LOC.LOGIN.INPUT_PASSWORD).type(Cypress.env('password'));
        cy.get(LOC.LOGIN.BTN_LOGIN).click();
    }
});

Cypress.Commands.add('errorLogin', () => {
    cy.get(LOC.LOGIN.MESSAGE_ERROR_LOGIN).contains(LOC.LOGIN.TEXT_ERROR_LOGIN);
});

Cypress.Commands.add('verificaUrl', () => {
    cy.url().should('eq', Cypress.env('host'));
})

Cypress.Commands.add('verificaSucessoLogin', () => {
    cy.get(LOC.TOP_LEFT_MENU.BTN_MENU).click();
    cy.contains('Products');
})

Cypress.Commands.add('logout', () => {
    cy.get(LOC.TOP_LEFT_MENU.BTN_LOGOUT).click();
})

// LOC.LOGIN.