describe('simple-demo', () => {
  it('should contain breadcrumbs for books', () => {
    cy.visit('/');
    cy.get('my-xng').contains('FirstPage');
    // shouldn't have default seperator if Home breadcrumb is not defined
    cy.get('.my-xng-list').contains('/').should('not.exist');
  });
});
