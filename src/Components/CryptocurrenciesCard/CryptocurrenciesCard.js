import React from 'react'
import "./CryptocurrenciesCard.css"

const CryptocurrenciesCard = ({id, name, symbol, rank}) => {
    return (
      <div className="cryptoCards">
        <span className="cardStyling">
          <p className="cardInfo">
            {name}, {symbol}
          </p>
          <p className="cardInfo">{rank}</p>
        </span>
      </div>
    );
}

export default CryptocurrenciesCard