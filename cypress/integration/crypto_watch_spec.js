describe('Home', () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000/"
    cy.visit(baseURL)
  })

it('Should see a home button in the nav bar when a user visits the homepage', () => {
    cy.get(".navIcon").should('be.visible')
})

it('Should see menu items in the nav bar when a user visits the homepage', () => {
    cy.get(".rightNavItems").should('contain', 'Cryptopedia', 'Markets', 'Exchanges', 'My Watch List')
})

it('Should have a header on the homepage', () => {
    cy.get('.header, h1').should('contain', 'CryptoWatch')
})

it('Should have a subheading on the homepage', () => {
      cy.get("h2")
      .should("contain", "Your crypto exploration and learning platform.")
})

it('Should see three cards display with text on the homepage', () => {
      cy.get(".beginnerSection")
      .should("be.visible")
      .get(".curiousSection")
      .should("be.visible")
      .get(".buySection")
      .should("be.visible")
      .get(".cardText")
      .should("be.visible")
    })

it('Should be able to click into a section and be taken to another page', () => {
      cy.get(".curiousSection")
      .click()
      .location("pathname")
      .should("eq", "/cryptocurrencies")
})

it('Should be able to click into a section and be taken to another page', () => {
    cy.get('.buySection')
    .click()
    .location('pathname')
    .should('eq', '/exchanges')
})

it("Should be able to click into a section and be taken to another page", () => {
    cy.get(".beginnerSection")
    .click()
    .location("pathname")
    .should("eq", "/cryptopedia")
})

it("Should be able to click into a nav bar item and be taken to another page", () => {
    cy.get(".navCryptocurrencies")
    .click()
    .location("pathname")
    .should("eq", "/cryptocurrencies")
})

it("Should be able to click into a nav bar item and be taken to another page", () => {
    cy.get(".navExchanges")
    .click()
    .location("pathname")
    .should("eq", "/exchanges")
})

it("Should be able to click into a nav bar item and be taken to another page", () => {
    cy.get(".navCryptopedia")
    .click()
    .location("pathname")
    .should("eq", "/cryptopedia")
})

})

describe('Cryptocurrencies', () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000/cryptocurrencies"
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData);
    })
    cy.visit(baseURL)
  })

    it('should see a subheading on the cryptocurrencies page', () => {
      cy.get(".cryptoTableHeading").should('contain', 'Cryptocurrency prices for 100 assets')
    })

    it("should see a table with data on the cryptocurrencies page", () => {
        cy.get(".cryptoTable, tbody, th")
        .should("contain", "Rank", "Cryptocurrency", "Symbol", "Price", "24HR%Chg", "Market Cap")
        .get('.cryptoTable, tbody, td')
        .should('be.visible')
    })

    it("should see a search icon", () => {
        cy.get(".searchIcon")
        .should("be.visible")
    })

    it("should see an X icon", () => {
      cy.get(".xIcon").should("be.visible")
    })

    it("should see an search bar ", () => {
      cy.get(".searchInput").should("be.visible")
    })

     it("should see an search bar ", () => {
       cy.get(".searchButton").should("be.visible")
     })

    it('should see a star icon', () => {
      cy.get('.favorites').should('be.visible')
    })

    it('should turn red when the star is clicked', () => {
      cy.get('.favorites').first().click().get('.favorites')
      .should("be.visible")
    })
})

describe("CryptocurrencyDetails", () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000"
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData)
    })
    cy.visit(baseURL)
  })

  it("should be able to click into a cryptocurrency name and be taken to a details page", () => {
      cy.get(".curiousSection")
      .click()
      .get("#btc-bitcoin")
      .click()
  })

  it("should be able to view a coins details", () => {
      cy.get(".curiousSection")
      .click()
      .get(".cryptoName").first()
      .click()
      .get("h1")
      .should("contain", "Bitcoin")
      .get(".coinDescription")
      .should("be.visible")
      .get(".listItemWrapper")
      .should("be.visible")
  })
})

describe("Exchanges", () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000/exchanges"
    cy.fixture("testExchangeData.json").then((exchangeData) => {
      cy.intercept(
        "GET",
        "https://api.coinpaprika.com/v1/exchanges",
        exchangeData
      )
    })
    cy.visit(baseURL)
  })

  it("should be able to view a list of all exchanges", () => {
      cy.get(".cryptoTableHeading")
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
      .should("be.visible")
  })
})

describe('Search Bar', () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000/cryptocurrencies"
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData)
    }).as('search')
    cy.visit(baseURL)
  })
  
  it("should be able to use the search bar functionality", () => {
    cy
    .get('.loading')
    .should('be.visible')
    cy.wait("@search")
    .get('.loading')
    .should('not.exist')
    .get(".searchInput")
    .type("btc")
    .should("have.value", "btc")
    .get('.searchButton')
    .click()
    .get(".cryptoName")
    .should("have.length", 1)
  })

  it('should clear the inputs after a search', () => {
      cy.get(".searchInput")
      .type("btc")
      .get('.searchButton')
      .click()
      .get('.searchInput')
      .should("contain", "")
  })
})


describe('Loading', () => {
  beforeEach(() =>  {
    const baseURL = "http://localhost:3000"
    cy.visit(baseURL)

  })
  
  it('should contain a loading message on Cryptocurrency page', () => {
      cy.get(".curiousSection")
      .click()
      .get(".loading")
      .should("be.visible")
  })

  it.skip("should contain a loading message on Cryptocurrency Details page", () => {
      cy.get(".curiousSection")
      .click()
      .get(".cryptoName")
      .first()
      .click()
      .get(".loading")
      .should("be.visible")
  })

  it("should contain a loading message on Exchange page", () => {
      cy.get(".buySection")
      .click()
      .get(".loading")
      .should("be.visible")
  })

  it("should contain a loading message on Cryptopedia page", () => {
      cy.get(".beginnerSection")
      .click()
      .get(".loading")
      .should("be.visible")
  })
})

describe('Error', () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000"
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", {
        body: []
      })
    })
    cy.visit(baseURL)
  })
  
  it('should display an error message if there is no data to display', () => {
    cy.get(".curiousSection")
    .click()
  })

  it("should display an error message if the URL is invalid", () => {
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", cryptoData);
    })
    cy.visit('http://localhost:3000/coin')
  })

  it("should display an error message if the data doesn't display", () => {
    cy.fixture("testCryptoData.json").then((cryptoData) => {
      cy.intercept("GET", "https://api.coinpaprika.com/v1/tickers", {
        'forceNetworkError': true,
      })
    })
    cy.visit("http://localhost:3000/coin")
  })
})

describe('Cryptopedia', () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000/cryptopedia"
    cy.fixture("testCryptopediaData.json").then((cryptoData) => {
      cy.intercept(
        "GET",
        "https://api.coinpaprika.com/v1/tags",
    ).as("cryptopedia")
    })
    cy.visit(baseURL)
  })

  it('should be able to view the Cryptopedia page', () => {
    cy.get("h1.cryptopediaHeading")
    .should("contain", "Crypto 101")
    .get(".loading").should('be.visible')
    cy.wait('@cryptopedia')
    .get('.loading').should('not.exist')
    .get(".cryptopediaSection").should('be.visible')
  })
})
