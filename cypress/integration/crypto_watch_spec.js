describe.skip('Home', () => {
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

it('Should be able to click into a section and be taken to another page', () => {
    cy.visit(baseURL)
    .get('.buySection')
    .click()
    .location('pathname')
    .should('eq', '/exchanges')
})

it("Should be able to click into a section and be taken to another page", () => {
  cy.visit(baseURL)
    .get(".beginnerSection")
    .click()
    .location("pathname")
    .should("eq", "/cryptopedia")
})

})

describe.skip('Cryptocurrencies', () => {
    const baseURL = "http://localhost:3000"

    it ('should see a subheading on the cryptocurrencies page', () => {
        cy.fixture('testCryptoData.json')
        .then((cryptoData) => {
            cy.intercept(
              "GET",
              "https://api.coinpaprika.com/v1/tickers",
              cryptoData
            )
        })
        cy.visit(baseURL)
          .get(".curiousSection")
          .click()
          .get(".cryptoTableHeading").should('contain', 'Cryptocurrency prices for 100 assets')
    })

    it("should see a table with data on the cryptocurrencies page", () => {
      cy.fixture("testCryptoData.json").then((cryptoData) => {
        cy.intercept(
          "GET",
          "https://api.coinpaprika.com/v1/tickers",
          cryptoData
        )
      })
      cy.visit(baseURL)
        .get(".curiousSection")
        .click()
        .get(".cryptoTable, tbody, th")
        .should("contain", "Rank", "Cryptocurrency", "Symbol", "Price", "24HR%Chg", "Market Cap")
        .get('.cryptoTable, tbody, td')
        .should('be.visible')
    })
})

describe.skip("CryptocurrencyDetails", () => {
  const baseURL = "http://localhost:3000";

  it("should be able to click into a cryptocurrency name and be taken to a details page", () => {
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData)
    })
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .get("#btc-bitcoin")
      .click()
  })

  it("should be able to view a coins details", () => {
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData)
    })
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .get(".cryptoName").first()
      .click()
      .get("h1")
      .should("contain", "Bitcoin")
      .get("h2")
      .should("be.visible")
      .get(".coinDescription")
      .should("be.visible")
      .get(".listItemWrapper")
      .should("be.visible");
  })
})

describe.skip("Exchanges", () => {
  const baseURL = "http://localhost:3000"

  it("should be able to view a list of all exchanges", () => {
    cy.fixture("testExchangeData.json").then((exchangeData) => {
      cy.intercept(
        "GET",
        "https://api.coinpaprika.com/v1/exchanges",
        exchangeData
      )
    })
    cy.visit(baseURL)
      .get(".buySection")
      .click()
      .get(".cryptoTableHeading")
      .should("contain", "Cryptocurrency Exchanges")
      .get(".cryptoTable")
      .should("be.visible")
      .get(".cryptoTable, tbody, th")
      .should(
        "contain",
        "Exchange Name",
        "Exchange Score",
        "Volume(24H)",
        "# Markets",
        "# Coins",
        "Fiats Supported"
      )
      .get(".cryptoTable, tbody, td")
      .should("be.visible");
  })
})

describe.skip('Search Bar', () => {
  const baseURL = "http://localhost:3000"
  
  it ('should be able to use the search bar functionality', () => {
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData);
    })
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .get("form input")
      .type("btc")
      .get("form input")
      .type("{enter}")
      .get(".cryptoName")
      //should see the search results displayed
  })

  it('should clear the inputs after a search', () => {
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData);
    });
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .get("form input")
      .type("btc")
      .get("form input").should('contain', '')
  })
})

describe('Loading', () => {
  const baseURL = "http://localhost:3000"
  
  it('should contain a loading message on Cryptocurrency page', () => {
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .get(".loading")
      .should("be.visible")
  })

  it("should contain a loading message on Cryptocurrency Details page", () => {
    cy.visit(baseURL)
      .get(".curiousSection")
      .click()
      .get(".cryptoName")
      .first()
      .click()
      .get(".loading")
      .should("be.visible")
  })

  it("should contain a loading message on Exchange page", () => {
    cy.visit(baseURL)
      .get(".buySection")
      .click()
      .get(".loading")
      .should("be.visible")
  })

  it("should contain a loading message on Cryptopedia page", () => {
    cy.visit(baseURL)
      .get(".beginnerSection")
      .click()
      .get(".loading")
      .should("be.visible")
  })
})




// add clickable elements in nav bar
// maybe get a little more detailed with the list items
// test loading component
// test error component
// test cryptopedia page
// on keypress - shaky with cypress testing
