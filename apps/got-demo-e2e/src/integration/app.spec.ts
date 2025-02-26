describe('got-demo', () => {
  it('should contain breadcrumbs for books', () => {
    cy.visit('/');
    cy.contains('Books').click();
    cy.get('my-xng').contains('books');
    // shouldn't have default seperator if Home breadcrumb is not defined
    cy.get('.my-xng-list').contains('/').should('not.exist');
  });

  it('should contain breadcrumbs for book with id', () => {
    cy.get('got-books ul li').eq(0).click();
    cy.get('.my-xng-list').contains('books/1');
  });

  it('should contain breadcrumbs for character with id', () => {
    cy.get('got-book ul li').eq(0).click();
    cy.get('.my-xng-list').contains('books/1');
    cy.get('.my-xng-list').contains('characters/2');
  });

  it('should got to valid path via breadcrumb navigation', () => {
    cy.get('.my-xng-list').contains('books/1').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/books/1');
    });
  });
});
