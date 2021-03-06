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

it('Should see three cards display with text on the homepage', () => {
    cy.visit(baseURL)
      .get(".beginnerSection")
      .should("be.visible")
      .get(".curiousSection")
      .should("be.visible")
      .get(".buySection")
      .should("be.visible")
      .get(".cardText")
      .should("be.visible");
    })

it('Should be able to click into a section and be taken to another page', () => {
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .location("pathname")
      .should("eq", "/cryptocurrencies");
})
//do one for buy and beginner
})

describe.only('Cryptocurrencies', () => {
    const baseURL = "http://localhost:3000/cryptocurrencies/"

    it ('should see a subheading on the cryptocurrencies page', () => {
        cy.fixture('testCryptoData.json')
        .then((cryptoData) => {
            cy.intercept(
              "GET",
              "https://api.coinpaprika.com/v1/tickers",
              cryptoData
            )
        })
        cy.visit("http://localhost:3000")
          .get(".curiousSection")
          .click()
          .location("pathname")
          .should("eq", "/cryptocurrencies")
          .get(".cryptoTableHeading").should('contain', 'Cryptocurrency prices for 100 assets')
    })

    it("should see a table with data on the cryptocurrencies page", () => {
      cy.fixture("testCryptoData.json").then((cryptoData) => {
        cy.intercept(
          "GET",
          "https://api.coinpaprika.com/v1/tickers",
          cryptoData
        );
      });
      cy.visit("http://localhost:3000")
        .get(".curiousSection")
        .click()
        .get(".cryptoTable, tbody, th")
        .should("contain", "Rank", "Cryptocurrency", "Symbol", "Price", "24HR%Chg", "Market Cap")
        .get('.cryptoTable, tbody, td')
        .should('be.visible')
    });
})





// add clickable elements in nav bar