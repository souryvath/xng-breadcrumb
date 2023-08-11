describe('simple-demo', () => {
  it('should show breadcrumbs within ngIf', () => {
    cy.visit('/');
<<<<<<< HEAD
    cy.get('my-xng').contains('FirstPage');
=======
    // initially within ngIf and not shown
    cy.get('xng-breadcrumb').should('not.exist');
    cy.get('button').contains('Toggle Breadcrumb Visibility').click();
    cy.get('xng-breadcrumb').contains('Dashboard');
  });

  it("shouldn't have default seperator if Home breadcrumb is not defined", () => {
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff
    // shouldn't have default seperator if Home breadcrumb is not defined
    cy.get('.my-xng-list').contains('/').should('not.exist');
  });

  it('should show breadcrumbs when routeReuseStrategy is false', () => {
    // Dashboard and Order Details use same component and routeReuseStrategy false still should get data
    cy.get('a').contains('Order Details').click();
    cy.get('.xng-breadcrumb-list').contains('Order Details').should('exist');
    cy.get('.xng-breadcrumb-list').contains('Company Name').should('exist');
  });

  it('should show breadcrumbs if dynamically set with autoGenerate false', () => {
    cy.get('a').contains('Order Items').click();
    cy.get('.auto-generated-true .xng-breadcrumb-list')
      .contains('items')
      .should('exist');
    cy.get('.auto-generated-false .xng-breadcrumb-list')
      .contains('items')
      .should('not.exist');
    cy.get('button').contains('Set Order Items Label').click();
    cy.get('.auto-generated-false .xng-breadcrumb-list')
      .contains('My Order Items')
      .should('exist');
  });
});
