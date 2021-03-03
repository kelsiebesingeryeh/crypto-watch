import React from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"

const Cryptocurrencies = ({cryptocurrencies}) => {
    const cryptocurrenciesOnDisplay = () => {
       return cryptocurrencies.map(crypto => {
            return <CryptocurrenciesCard 
            id={crypto.id}
            key={crypto.id}
            name={crypto.name}
            symbol={crypto.symbol}
            rank={crypto.rank} 
            />;
        })
    }
    return (
      <div className="cryptocurrencyContainer">
        {cryptocurrenciesOnDisplay}
      </div>
    );
}

export default Cryptocurrencies