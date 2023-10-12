import adminData from "../fixtures/adminData";
import selector from "../fixtures/selectors";

beforeEach(() => {
  cy.visit("http://qamid.tmweb.ru/admin");
});

describe("Login admin", () => {
  it("Check the admin home page", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
    cy.get(selector.pageHeader).should("contain", "Администраторррская");
    cy.get(selector.loginSection).should("contain", "Авторизация");
  });

  it("Correct email and password", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.contains("Управление залами").should("be.visible");
    cy.contains("Конфигурация залов").should("be.visible");
    cy.contains("Конфигурация цен").should("be.visible");
    cy.contains("Сетка сеансов").should("be.visible");
    cy.contains("Открыть продажи").should("be.visible");
  });

  it("Throws an error with invalid email and invalid password", () => {
    cy.login(adminData.invalidEmail, adminData.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Throws an error with invalid email", () => {
    cy.login(adminData.invalidEmail, adminData.validPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Throws an error with invalid password", () => {
    cy.login(adminData.validEmail, adminData.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});