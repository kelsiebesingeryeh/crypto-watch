import React from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'
import Error from '../Error/Error'


const Cryptocurrencies = ({cryptocurrencies}) => {
  
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

  
      if (!cryptocurrencies.length) {
        return <Error />
      } else if (cryptocurrencies.length) {
        return (
        <div className='cryptoTableContainer'>
          <p className='cryptoTableHeading'>Cryptocurrency prices for 100 assets</p>
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