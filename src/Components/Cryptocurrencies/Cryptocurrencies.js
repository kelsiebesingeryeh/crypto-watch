import React from 'react'

const Cryptocurrencies = ({cryptocurrencies}) => {
    const cryptocurrenciesOnDisplay = () => {
       return cryptocurrencies.map(crypto => {
            console.log(crypto)
        })
    }
    return (
      <div className="cryptocurrencyContainer">
        {cryptocurrenciesOnDisplay}
      </div>
    );
}

export default Cryptocurrencies