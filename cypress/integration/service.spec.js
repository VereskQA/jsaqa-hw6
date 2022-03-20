describe("Authorization", () => {
  it("Should open page", () => {
    cy.visit("/");
    cy.contains("Books list");
  });

  it("Should successfully login", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать").should("be.visible");
  });

  it("Should not login with empty login", () => {
    cy.visit("/");
    cy.login(" ", "test");
    cy.checkIfElementInvalid("#mail");
  });

  it("Should not login with empty password", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.checkIfElementInvalid("#pass");
  });
});

describe("Add book", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать").should("be.visible");
  });

  it("Should successfully add book", () => {
    cy.addNewBook("Цвет волшебства", "Фентези", "Терри Пратчетт");
    cy.contains("Цвет волшебства").should("be.visible");
  });

  it("Should successfully add book to favorite", () => {
    cy.addBookToFavorite("Безумная звезда", "Фентези", "Терри Пратчетт");
    cy.contains("Безумная звезда").should("be.visible");
  });

  it("Should successfully deleted book from favorite", () => {
    cy.addBookToFavorite("Три товарища", "Роман", "Эрих Мария Ремарк");
    //cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").should("be.visible");
  });
});
