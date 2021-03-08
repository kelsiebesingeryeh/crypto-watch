import React from 'react'
import "./CryptocurrenciesCard.css"
import { Link } from 'react-router-dom'
import star from '../../assets/star.png'
import filledStar from '../../assets/filledStar.png'
import Star from '../Star/Star'

const CryptocurrenciesCard = ({
  id,
  name,
  symbol,
  rank,
  price,
  marketCap,
  percentChange,
  addFavoriteCrypto,
  removeFromFavorites,
  favorites,
  isFavorite
}) => {
  const stylePrice = price
    .toFixed(2)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const styleMarketCap = Math.abs(Number(marketCap)) >= 1.0e9;
  const stylePercentChange = () => {
    if (percentChange > 0) {
      return (
        <td style={{ color: "green", fontWeight: "bold" }} data-label='Percent Change'>{percentChange}</td>
      )
    } else {
      return (
        <td
          style={{ color: "red", fontWeight: "bold" }}
          data-label="Percent Change"
        >
          {percentChange}
        </td>
      );
    }
  }

  const handleClick = () => {
    if (!isFavorite) {
      addFavoriteCrypto(id)
    } else {
      removeFromFavorites(id)
    }
  }

  return (
    <tr>
      <td data-label='Favorites'>
        <img
          src={star}
          alt="star"
          onClick={handleClick}
          // style={{ background: favorites.includes(id) && "red" }}
        ></img>
      </td>
      <td data-label="Rank">{rank}</td>
      <td id={id} data-label="Cryptocurrency">
        <Link to={`/cryptocurrencies/${id}`} className="cryptoName">
          {name}
        </Link>
      </td>
      <td data-label="Symbol">{symbol}</td>
      <td data-label="Price">${stylePrice}</td>
      {stylePercentChange()}
      <td data-label="Market Cap">{marketCap}</td>
    </tr>
  );
}

export default CryptocurrenciesCard

{/* <img src={star} alt="star" onClick={handleClick} style={{background: (favorites.includes(id) && 'red')}}></img> */}
