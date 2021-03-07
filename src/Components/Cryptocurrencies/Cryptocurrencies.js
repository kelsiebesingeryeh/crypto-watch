import React from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import Form from '../Form/Form'
import search from '../../assets/search.png'
import x from '../../assets/x.png'


const Cryptocurrencies = ({
  cryptocurrencies,
  isLoading,
  filterSearchResults,
  searchResults,
  clearSearchResults,
  addFavoriteCrypto,
  removeFromFavorites,
  favorites,
}) => {

  const cryptocurrenciesOnDisplay = () => {
    const top100Coins = cryptocurrencies
      .filter((crypto) => crypto.rank > 0 && crypto.rank <= 100)
      .sort((a, b) => a.rank - b.rank);
    return top100Coins.map((crypto) => {
      const { id, name, symbol, rank, quotes } = crypto;
      return (
        <CryptocurrenciesCard
          id={id}
          key={id}
          name={name}
          symbol={symbol}
          rank={rank}
          price={quotes.USD.price}
          marketCap={quotes.USD["market_cap"]}
          percentChange={quotes.USD["percent_change_24h"]}
          addFavoriteCrypto={addFavoriteCrypto}
          removeFromFavorites={removeFromFavorites}
          favorites={favorites}
        />
      );
    })
  }

  const searchResultsOnDisplay = () => {
    return searchResults.map((crypto) => {
      const { id, name, symbol, rank, quotes } = crypto;
      return (
        <CryptocurrenciesCard
          id={id}
          key={id}
          name={name}
          symbol={symbol}
          rank={rank}
          price={quotes.USD.price}
          marketCap={quotes.USD["market_cap"]}
          percentChange={quotes.USD["percent_change_24h"]}
          addFavoriteCrypto={addFavoriteCrypto}
          removeFromFavorites={removeFromFavorites}
          favorites={favorites}
        />
      );
    })
  }

  if (isLoading && !cryptocurrencies.length) {
    return <Loading />
  } else if (!cryptocurrencies.length) {
    return <Error />
  } else if (cryptocurrencies.length) {
    return (
      <div className="cryptoTableContainer">
        <span className="cryptoStyling">
          <p className="cryptoTableHeading">
            Cryptocurrency prices for 100 assets
          </p>
          <span className="searchStyling">
            <img src={search} alt="search" className="searchIcon"></img>
            <Form filterSearchResults={filterSearchResults} />
            <img
              src={x}
              alt="x"
              className="xIcon"
              onClick={() => clearSearchResults()}
            ></img>
          </span>
        </span>
        <table className="cryptoTable">
          <thead>
            <tr>
              <th>Favorites</th>
              <th>Rank</th>
              <th>Cryptocurrency</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24HR%Chg</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0
              ? searchResultsOnDisplay()
              : cryptocurrenciesOnDisplay()}
          </tbody>
        </table>
      </div>
    )
  }  
}
    
export default Cryptocurrencies