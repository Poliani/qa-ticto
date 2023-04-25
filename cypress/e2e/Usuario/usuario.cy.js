import { faker } from "@faker-js/faker";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import usuarioElements from "../../support/elements/usuarioElements.po";

// pageObjects
import Home from "../../support/elements/pages/Home";

const person = {
  fullName: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("Acessar página inicial", () => {
  Home.visit();
  cy.wait(2000);
});

When('Verificar componentes presentes', () => {
    cy.get(usuarioElements.inputNome).should('be.visible');
    cy.get(usuarioElements.inputEmail).should('be.visible');
    cy.get(usuarioElements.btnCadastrar).should('be.visible');
})

And ('Salvar usuário sem preencher nenhum campo', () =>{
     cy.get(usuarioElements.btnCadastrar).should('be.visible').click();
})

Then ('Deverá exibir mensagem de campos obrigatórios', () =>{
    cy.get(usuarioElements.feedbackCamposObrigatorios).contains('O campo Nome é obrigatório.');
    cy.get(usuarioElements.feedbackCamposObrigatorios).contains('O campo Email é obrigatório.');
    cy.get(usuarioElements.feedbackCamposObrigatorios).contains('O campo Password é obrigatório.');
})

When ('Realizar cadastro do usuário com dados válidos', () => {
    cy.get(usuarioElements.inputNome).should('be.visible').type(person.fullName);
    cy.get(usuarioElements.inputEmail).should('be.visible').type(person.email);
    cy.get(usuarioElements.inputPassword).should('be.visible').type(person.password);
    cy.get(usuarioElements.btnCadastrar).should('be.visible').click();
})

Then ('Exibirá mensagem de usuário cadastro com sucesso', () => {
    cy.wait(1000);
    cy.get(usuarioElements.feedbackSucesso).contains('Usuário cadastrado com sucesso.');
})

When("Verificar usuário cadastrado no grid", () => {
  cy.get(usuarioElements.tableGrid).last().contains(person.fullName);
  cy.get(usuarioElements.tableGrid).last();
});

Then("Acessar e editar usuário com nome inválido", () => {
  cy.get(usuarioElements.btnAcoes)
    .click()
    .get(usuarioElements.optionBtnEditar)
    .should("be.visible")
    .last()
    .click();

  cy.get(usuarioElements.modalEditar.nome)
    .should("be.visible")
    .last()
    .clear()
    .type(faker.name.firstName());
});

And("Ao salvar irá exibir mensagem de dados inválidos", () => {
  cy.get(usuarioElements.modalEditar.btnSalvar)
    .should("be.visible")
    .last()
    .click();

  cy.wait(1000);

  cy.get(usuarioElements.modalEditar.feedbackNomeinvalido)
    .should("be.visible")
    .contains("Insira um Nome e Sobrenome válido.");
});

And("Inserir nome válido na edição e salvar", () => {
  cy.get(usuarioElements.modalEditar.nome)
    .should("be.visible")
    .last()
    .clear()
    .type(person.fullName);

  cy.get(usuarioElements.modalEditar.btnSalvar)
    .should("be.visible")
    .last()
    .click();
});

Then("Dados serão alterados e salvos com sucesso", () => {
  cy.wait(1000);
  cy.get(usuarioElements.feedbackSucesso).contains(
    "Usuário salvo com sucesso."
  );
});

When("Selecionar usuário cadastrado e apagar o cadastro", () => {
  cy.get(usuarioElements.btnAcoes)
    .click()
    .get(usuarioElements.optionBtnExcluir)
    .last()
    .click();
  cy.wait(300);
  cy.get(usuarioElements.btnConfirmarExclusao)
    .last()
    .should("be.visible")
    .click();
});

Then("Usuário será excluído com sucesso", () => {
  cy.wait(300);
  cy.get(usuarioElements.feedbackRemovidoSucesso).contains(
    "Usuário removido com sucesso."
  );
});
