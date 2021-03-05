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
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${stylePrice}</td>
      <td>{marketCap}</td>
      <td>{percentChange}</td>
    </tr>
  )
}

export default CryptocurrenciesCard