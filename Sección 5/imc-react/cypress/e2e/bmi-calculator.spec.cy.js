describe('BMI Calculator', () => {
  it('Calculate thiness result', () => {
    cy.visit("/");

    cy.findByLabelText("Weight (KG)").type("50");
    cy.findByLabelText("Height (M)").type("1.8");

    cy.get('button').click();

    cy.findByText(/bmi: 15.432/i).should("be.visible")
    cy.findByText(/bmi estimation: thiness/i).should("be.visible")
  });

  it('Calculate normal result', () => {
    cy.visit("/");

    cy.findByLabelText("Weight (KG)").type("80");
    cy.findByLabelText("Height (M)").type("1.8");

    cy.get('button').click();

    cy.findByText(/bmi: 24.691/i).should("be.visible")
    cy.findByText(/bmi estimation: normal/i).should("be.visible")
  });

  it('Calculate overweight result', () => {
    cy.visit("/");

    cy.findByLabelText("Weight (KG)").type("90");
    cy.findByLabelText("Height (M)").type("1.8");

    cy.get('button').click();

    cy.findByText(/bmi: 27.778/i).should("be.visible")
    cy.findByText(/bmi estimation: overweight/i).should("be.visible")
  });

  it('Calculate obese result', () => {
    cy.visit("/");

    cy.findByLabelText("Weight (KG)").type("100");
    cy.findByLabelText("Height (M)").type("1.8");

    cy.get('button').click();

    cy.findByText(/bmi: 30.864/i).should("be.visible")
    cy.findByText(/bmi estimation: obese/i).should("be.visible")
  });
})