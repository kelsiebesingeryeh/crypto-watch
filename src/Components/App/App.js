import './_App.scss';
import React, { useState, useEffect } from 'react';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails';
import Error from '../Error/Error';
import Exchanges from '../Exchanges/Exchanges';
import Cryptopedia from '../Cryptopedia/Cryptopedia';
import Favorites from '../Favorites/Favorites';
import { getCryptoData } from '../../apiCalls';

const App = () => {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [tags, setTags] = useState([]);
    const [exchanges, setExchanges] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        /*eslint-disable */
      getCryptoData()
        .then((data) => {
          setCryptocurrencies(data[0]);
          setExchanges(data[1]);
          setTags(data[2]);
          setIsLoading(false);
        })
        /*eslint-disable */
        .catch((error) => {
            setIsLoading(false);
            setError(true);
        });
      /*eslint-enable */
    }, []);

    useEffect(() => {
        retrieveFromStorage();
    }, [localStorage]);

    useEffect(() => {
        saveToStorage();
    }, [favorites]);
    
    const retrieveFromStorage = () => {
        const storedFavorites = localStorage.getItem('favorites');
        const parsedFavorites = JSON.parse(storedFavorites);
        if (parsedFavorites) {
            setFavorites(parsedFavorites);
            saveToStorage();
        }
    };

    const saveToStorage = () => {
        localStorage.clear();
        let stringifiedFavs = JSON.stringify(favorites);
        localStorage.setItem('favorites', stringifiedFavs);
    };


    const filterSearchResults = (userInput, list) => {
        const searchResultsToDisplay = list.filter((crypto) => {
            return (
                crypto.name.toLowerCase().includes(userInput) ||
                crypto.symbol.toLowerCase().includes(userInput)
            );
        });
        setSearchResults(searchResultsToDisplay);
        setIsSearching(true);
    };

    const addFavoriteCrypto = (coin) => {
        setFavorites([...favorites, coin]);
        saveToStorage();
        /*eslint-disable */
    } 

    const removeFromFavorites = (id) => {
        const filteredFavorites = favorites.filter((fav) => fav !== id);
        setFavorites(filteredFavorites);
        saveToStorage();
    }

    const clearSearchResults = () => {
        setSearchResults([]);
        setIsSearching(false);
    }

    // const filterFavorites = (cryptocurrencies, favorites) => {
    //     return cryptocurrencies.filter(())
    // }

        return (
          <main>
            <Nav />
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/cryptocurrencies"
              component={() => (
                <Cryptocurrencies
                  cryptocurrencies={cryptocurrencies}
                  isLoading={isLoading}
                  filterSearchResults={filterSearchResults}
                  searchResults={searchResults}
                  clearSearchResults={clearSearchResults}
                  addFavoriteCrypto={addFavoriteCrypto}
                  removeFromFavorites={removeFromFavorites}
                  favorites={favorites}
                  error={error}
                  isSearching={isSearching}
                />
              )}
            />
            <Route
              exact
              path="/cryptopedia"
              render={() => (
                <Cryptopedia tags={tags} isLoading={isLoading} error={error} />
              )}
            />
            <Route
              exact
              path={"/cryptocurrencies/:id"}
              render={({ match }) => {
                const id = match.params.id;
                return (
                  <div className="cryptocurrencyDetailsContainer">
                    <CryptocurrencyDetails id={id} isLoading={isLoading} />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/exchanges"
              render={() => (
                <Exchanges
                  exchanges={exchanges}
                  isLoading={isLoading}
                  error={error}
                />
              )}
            />
            <Route
              exact
              path="/favorites"
              render={() => (
                <Favorites
                  cryptocurrencies={cryptocurrencies}
                  favorites={favorites}
                  // filterFavorites={filterFavorites}
                />
              )}
            />
            <Route exact path="/error" render={() => <Error />} />
          </main>
        );
}

export default App;
