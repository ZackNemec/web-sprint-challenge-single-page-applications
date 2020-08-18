describe("Testing inputs for PizzaForm", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("name input test", function () {
    {
      cy.get("[data-cy=name]").type("testing name send");
    }
  });
  it("test for checkbox input", function () {
    {
      cy.get("[data-cy=checkbox1]").check().should("be.checked");
    }
  });
  it("test for checkbox input", function () {
    {
      cy.get("[data-cy=checkbox2]").check().should("be.checked");
    }
  });
  it("test for checkbox input", function () {
    {
      cy.get("[data-cy=checkbox3]").check().should("be.checked");
    }
  });
  it("test for checkbox input", function () {
    {
      cy.get("[data-cy=checkbox4]").check().should("be.checked");
    }
  });
  it("test for proper submit", function () {
    {
      cy.get("[data-cy=submit]").submit();
    }
  });
});
