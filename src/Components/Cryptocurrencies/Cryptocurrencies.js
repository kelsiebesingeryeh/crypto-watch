import React from 'react'
import CryptocurrenciesCard from '../CryptocurrenciesCard/CryptocurrenciesCard'
import './Cryptocurrencies.css'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import Form from '../Form/Form'
import PropTypes from 'prop-types'


const Cryptocurrencies = ({
  cryptocurrencies,
  isLoading,
  error,
  filterSearchResults,
  searchResults,
  clearSearchResults,
  addFavoriteCrypto,
  removeFromFavorites,
  favorites,
  isFavorite
}) => {

  const top100Coins = cryptocurrencies
    .filter((crypto) => crypto.rank > 0 && crypto.rank <= 100)
    .sort((a, b) => a.rank - b.rank)
  
    const cryptocurrenciesOnDisplay = (cryptoList) => {
    return cryptoList.map((crypto) => {
      const { id, name, symbol, rank, quotes } = crypto
      return (
        <CryptocurrenciesCard
          id={id}
          key={id}
          name={name}
          symbol={symbol}
          rank={rank}
          price={quotes.USD.price}
          marketCap={quotes.USD['market_cap']}
          percentChange={quotes.USD['percent_change_24h']}
          addFavoriteCrypto={addFavoriteCrypto}
          removeFromFavorites={removeFromFavorites}
          favorites={favorites}
          isFavorite={isFavorite}
        />
      )
    })
  }

    return (
      <>
        {isLoading && <Loading />}
        {error && <Error />}
        <div className='cryptoTableContainer'>
          <span className='cryptoStyling'>
            <p className='cryptoTableHeading'>
              Cryptocurrency prices for 100 assets
            </p>
              <Form filterSearchResults={filterSearchResults} />
          </span>
          <table className='cryptoTable'>
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
                ? cryptocurrenciesOnDisplay(searchResults)
                : cryptocurrenciesOnDisplay(top100Coins)}
            </tbody>
          </table>
        </div>
      </>
    );
  }
    
export default Cryptocurrencies

Cryptocurrencies.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number,
    price: PropTypes.number,
    marketCap: PropTypes.number,
    percentChange: PropTypes.number,
    addFavoriteCrypto: PropTypes.func,
    removeFromFavorites: PropTypes.func,
    favorites: PropTypes.array,
    isFavorite: PropTypes.bool
}