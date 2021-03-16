// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update display of running total', () =>{
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  });
  it('should update display with result of an operation', () =>{
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  });
  it('should chain multiple operations together', () =>{
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click()
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '20')
  });

  xit('should give expected output for range of numbers e.g. negative, decimals');
  xit('should do XXXXXX in THIS exceptional circumstance');


})
