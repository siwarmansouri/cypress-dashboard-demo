describe('App E2E', () => {
    it('should have a link', () => {
        cy.visit('/');
        cy.get('a')
          .should('to.contain', 'Learn React');
      });
  });