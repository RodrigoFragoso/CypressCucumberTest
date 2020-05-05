import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('que o usuário esta na página de login do Swag Labs',()=>{
    cy.login();
})

When('ele insire as suas credenciais login|senha INVÁLIDOS',()=>{
    cy.inserirCredenciais("invalido");  
})

Then('deve receber uma mensagem de ERRO',()=>{
    cy.errorLogin();
})

And('deve permanacer na tela de login',()=>{
    cy.verificaUrl();
})