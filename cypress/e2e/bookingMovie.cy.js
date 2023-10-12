import adminData from "../fixtures/adminData";
import selector from "../fixtures/selectors";
import seats from "../fixtures/seats";

describe("Booking a movie", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/");
  });

  it("Booking film with the title from the admin panel", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.get(selector.sessionGrid)
      .eq(4)
      .then(($title) => {
        cy.visit("/client");
        cy.get(selector.dayOfWeek).click();
        cy.get(selector.movieSection)
          .contains($title.text())
          .parent()
          .parent()
          .next()
          .next()
          .contains("16:00")
          .click();
        cy.choiceSeats(seats);
        cy.get(selector.bookButton).click();
        cy.contains("Вы выбрали билеты:").should("be.visible");
      });
  });
});