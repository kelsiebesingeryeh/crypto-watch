import React from 'react'
import "./CryptocurrenciesCard.css"

const CryptocurrenciesCard = ({
  id,
  name,
  symbol,
  rank,
  price,
  marketCap,
  percentChange,
}) => {
  const stylePrice = price
    .toFixed(2)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  const styleMarketCap = Math.abs(Number(marketCap)) >= 1.0e9

  return (
    <div className="cryptoCards">
      <span className="cardStyling">
        <p className="cardInfo rank">{rank}</p>
        <p className="cardInfo">
          {name} <strong>({symbol})</strong>
        </p>
      </span>
      <span className="pricingStyling">
        <p>
          <strong>${stylePrice}</strong>
        </p>
        <p>{percentChange}%</p>
        <p>{marketCap}</p>
      </span>
    </div>
  );
};

export default CryptocurrenciesCard