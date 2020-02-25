describe('App', () => {
    it('should have a link to learn Cypress', () => {
      cy.visit('/');
        cy.get('a')
          .should('to.contain', 'Learn Cypress');
    });
  });