import './App.css'
import React, { Component } from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route, Redirect} from 'react-router-dom'
import Home from '../Home/Home'
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails'
import { getAllCoins } from "../../apiCalls"
import Error from '../Error/Error'
import Exchanges from '../Exchanges/Exchanges'
import star from "../../assets/star.png";
import filledStar from "../../assets/filledStar.png";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cryptocurrencies: [],
      error: false,
      isLoading: true,
      searchResults: [],
      favorites: [],
    }
  }

  componentDidMount() {
      getAllCoins().then((cryptocurrencies) =>
        this.setState({ cryptocurrencies, isLoading: false})
      )
      .catch(error => this.setState({error: true, isLoading: false}))
    }

    filterSearchResults = (userInput) => {
      const searchResultsToDisplay = this.state.cryptocurrencies.filter(crypto => {
        return crypto.name.toLowerCase()=== userInput || crypto.symbol.toLowerCase() === userInput
      })
      this.setState({
        searchResults: searchResultsToDisplay
      })
    }

    addFavoriteCrypto = (coin) => {
      this.setState({
        favorites: [...this.state.favorites, coin],
      })
    }

    removeFromFavorites = () => {
      this.setState({
        favorites: [],
      })
    }

    clearSearchResults = () => {
      this.setState({
        searchResults: []
      })
    }

    render() {
      return (
        <main>
          <Nav />
          <Route exact path="/error" render={() => <Error />} />

          <Route
            exact
            path="/"
            render={() => {
              if (!this.state.cryptocurrencies.length && this.state.error) {
                return <Redirect to="/error" />;
              } else {
                return <Home />;
              }
            }}
          />
          <Route
            exact
            path="/cryptocurrencies"
            component={() => (
              <Cryptocurrencies
                cryptocurrencies={this.state.cryptocurrencies}
                isLoading={this.state.isLoading}
                filterSearchResults={this.filterSearchResults}
                searchResults={this.state.searchResults}
                clearSearchResults={this.clearSearchResults}
                addFavoriteCrypto={this.addFavoriteCrypto}
                removeFromFavorites={this.removeFromFavorites}
                favorites={this.state.favorites}
              />
            )}
          />
          <Route
            exact
            path={"/cryptocurrencies/:id"}
            render={({ match }) => {
              const id = match.params.id;
              return (
                <div className="cryptocurrencyDetailsContainer">
                  <CryptocurrencyDetails
                    id={id}
                    isLoading={this.state.isLoading}
                  />
                </div>
              );
            }}
          />
          <Route exact path="/exchanges" component={Exchanges} />
        </main>
      );
    }
  }

export default App
