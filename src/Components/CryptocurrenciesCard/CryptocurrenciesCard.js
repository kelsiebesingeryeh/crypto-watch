import React from 'react'
import "./CryptocurrenciesCard.css"

const CryptocurrenciesCard = ({
  id,
  name,
  symbol,
  rank,
  price,
  marketCap,
}) => {
  const stylePrice = price.toFixed(2);

  return (
    <div className="cryptoCards">
      <span className="cardStyling">
        <p className="cardInfo">
          {name}, {symbol}
        </p>
        <p className="cardInfo rank">{rank}</p>
      </span>
      <p>Current Price: ${stylePrice}</p>
      <p>Market Cap: {marketCap}</p>
    </div>
  );
};

export default CryptocurrenciesCard