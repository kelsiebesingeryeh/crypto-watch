describe('Home', () => {
    const baseURL = "http://localhost:3000/"

it('Should see a home button in the nav bar when a user visits the homepage', () => {
    cy.visit(baseURL)
    .get(".navIcon").should('be.visible')
})

it('Should see menu items in the nav bar when a user visits the homepage', () => {
    cy.visit(baseURL)
    .get(".rightNavItems").should('contain', 'Cryptopedia', 'Markets', 'Exchanges', 'My Watch List')
})

it('Should have a header on the homepage', () => {
    cy.visit(baseURL)
    .get('.header, h1').should('contain', 'CryptoWatch')
})

it('Should have a subheading on the homepage', () => {
    cy.visit(baseURL)
      .get("h2")
      .should("contain", "Your crypto exploration and learning platform.")
})
it('Should have a mission statement on the homepage', () => {
    cy.visit(baseURL)
    .get('h3').should('be.visible')
})

})