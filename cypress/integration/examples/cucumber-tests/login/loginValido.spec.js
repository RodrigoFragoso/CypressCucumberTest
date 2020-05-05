import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('que o usuário esta na página de login do Swag Labs',()=>{
    cy.login();
})

When('ele insire as suas credenciais login|senha VÁLIDOS',()=>{
    cy.inserirCredenciais();
})
 
Then('deve logar com sucesso na plataforma',()=>{
    cy.verificaSucessoLogin();
})

And('após ele clica Logout',()=>{
    cy.logout();
})

Then('ele deve ser redirecionado para a tela inicial',()=>{
    cy.verificaUrl();
})