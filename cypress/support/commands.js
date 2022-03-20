Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("checkIfElementInvalid", (selector) => {
  cy.get(selector)
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

Cypress.Commands.add("addNewBook", (title, description, authors) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(authors);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBookToFavorite", (title, description, authors) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(authors);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
});
