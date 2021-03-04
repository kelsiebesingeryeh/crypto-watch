import React from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'

const Cryptocurrencies = ({cryptocurrencies}) => {
    const cryptocurrenciesOnDisplay = () => {
    const top100Coins = cryptocurrencies.filter(crypto => crypto.rank > 0 && crypto.rank <= 100).sort((a,b) => a.rank - b.rank)
       return top100Coins.map((crypto) => {
         return (
           <CryptocurrenciesCard
             id={crypto.id}
             key={crypto.id}
             name={crypto.name}
             symbol={crypto.symbol}
             rank={crypto.rank}
             price={crypto.quotes.USD.price}
             marketCap={crypto.quotes.USD["market_cap"]}
             percentChange={crypto.quotes.USD["percent_change_24h"]}
             circulatingSupply={crypto["circulating_supply"]}
             volume={crypto.quotes.USD["volume_24h"]}
           />
         );
       });
    }
    return (
      <table className="cryptoTable">
        <thead>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>24hr</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>Circulating Supply</th>
        </thead>
        {cryptocurrenciesOnDisplay()}
      </table>
    );
}

export default Cryptocurrencies