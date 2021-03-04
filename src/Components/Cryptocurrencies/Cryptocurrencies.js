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
           />
         );
       });
    }
    return (
      <div className='cryptocurrencyContainer'>
        {cryptocurrenciesOnDisplay()}
      </div>
    );
}

export default Cryptocurrencies