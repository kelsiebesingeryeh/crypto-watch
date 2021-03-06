import React from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import Form from '../Form/Form'


const Cryptocurrencies = ({ cryptocurrencies, isLoading }) => {
  
  const cryptocurrenciesOnDisplay = () => {
      const top100Coins = cryptocurrencies.filter(crypto => crypto.rank > 0 && crypto.rank <= 100).sort((a,b) => a.rank - b.rank)
         return top100Coins.map((crypto) => {
           const {id, name, symbol, rank, quotes} = crypto
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
             />
           )
         })
      }

      if (isLoading && !cryptocurrencies.length) {
        return <Loading />
      } else if (!cryptocurrencies.length) {
        return <Error />
      } else if (cryptocurrencies.length) {
        return (
        <div className='cryptoTableContainer'>
          <span className='cryptoStyling'>
            <p className='cryptoTableHeading'>Cryptocurrency prices for 100 assets</p>
            <Form />
          </span>
            <table className='cryptoTable'>
              <tbody>
                <th>Rank</th>
                <th>Cryptocurrency</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24HR%Chg</th>
                <th>Market Cap</th>
              {cryptocurrenciesOnDisplay()}
              </tbody>
            </table>
        </div>

        )
      }
}
    
export default Cryptocurrencies