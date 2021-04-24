import './App.css';
import React, { useState, useEffect } from 'react';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import Nav from '../Nav/Nav';
import {Route, Redirect} from 'react-router-dom';
import Home from '../Home/Home';
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails';
import Error from '../Error/Error';
import Exchanges from '../Exchanges/Exchanges';
import Cryptopedia from '../Cryptopedia/Cryptopedia';
import { getCryptoData } from '../../apiCalls';

const App = () => {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [tags, setTags] = useState([]);
    const [exchanges, setExchanges] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    
    componentDidMount() {
        /*eslint-disable */
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if (localStorage.getItem("favorites")) {
          this.setState({
            favorites: [favorites],
          });
        }
      getCryptoData()
        .then((data) => {
          this.setState({
            cryptocurrencies: data[0],
            exchanges: data[1],
            tags: data[2],
            isLoading: false,
          });
        })
        /*eslint-disable */
        .catch((error) => this.setState({ error: true, isLoading: false }));
      /*eslint-enable */
    }

    filterSearchResults = (userInput) => {
        const searchResultsToDisplay = this.state.cryptocurrencies.filter(crypto => {
            return crypto.name.toLowerCase()=== userInput || crypto.symbol.toLowerCase() === userInput;
        });
    
        this.setState({
            searchResults: searchResultsToDisplay,
            isSearching: true
        });
    }

    addFavoriteCrypto = (coin) => {
        if (!this.state.isFavorite) {
            this.setState({
                favorites: [...this.state.favorites, coin],
                isFavorite: true,
            });
        }
        /*eslint-disable */
            localStorage.setItem("favorites", JSON.stringify(coin));
          // const storage = localStorage.getItem('coin');
          // if (storage == null) {
          //     localStorage.setItem('coin', JSON.stringify(coin));
          // }
    } 

    removeFromFavorites = (id) => {
        const filteredFavorites = this.state.favorites.filter(fav => fav !== id);
        this.setState({
            isFavorite: false,
            favorites: filteredFavorites,
        });
    }

    clearSearchResults = () => {
        this.setState({
            searchResults: [],
            isSearching: false
        });
    }

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
                            isFavorite={this.state.isFavorite}
                            error={this.state.error}
                            isSearching={this.state.isSearching}
                        />
                    )}
                />
                <Route
                    exact
                    path="/cryptopedia"
                    render={() => (
                        <Cryptopedia
                            tags={this.state.tags}
                            isLoading={this.state.isLoading}
                            error={this.state.error}
                        />
                    )}
                />
                <Route
                    exact
                    path={'/cryptocurrencies/:id'}
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
                <Route
                    exact
                    path="/exchanges"
                    render={() => (
                        <Exchanges
                            exchanges={this.state.exchanges}
                            isLoading={this.state.isLoading}
                            error={this.state.error}
                        />
                    )}
                />
            </main>
        );
}

export default App;
