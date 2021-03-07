import React from 'react'
import "./CryptocurrenciesCard.css"
import { Link } from 'react-router-dom'
import star from '../../assets/star.png'

const CryptocurrenciesCard = ({
  id,
  name,
  symbol,
  rank,
  price,
  marketCap,
  percentChange,
  addFavoriteCrypto
}) => {
  const stylePrice = price
    .toFixed(2)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const styleMarketCap = Math.abs(Number(marketCap)) >= 1.0e9;
  const stylePercentChange = () => {
    if (percentChange > 0) {
      return (
        <td style={{ color: "green", fontWeight: "bold" }}>{percentChange}</td>
      );
    } else {
      return (
        <td style={{ color: "red", fontWeight: "bold" }}>{percentChange}</td>
      );
    }
  };

  return (
    <tr>
      <td>
        <img
          src={star}
          alt="star"
          onClick={() => addFavoriteCrypto(id)}
        ></img>
      </td>
      <td>{rank}</td>
      <td id={id}>
        <Link to={`/cryptocurrencies/${id}`} className="cryptoName">
          {name}
        </Link>
      </td>
      <td>{symbol}</td>
      <td>${stylePrice}</td>
      {stylePercentChange()}
      <td>{marketCap}</td>
    </tr>
  );
};

export default CryptocurrenciesCard