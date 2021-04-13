import React from 'react';
import './CryptocurrenciesCard.css';
import { Link } from 'react-router-dom';
import star from '../../assets/star.png';
import filledStar from '../../assets/filledStar.png';
import PropTypes from 'prop-types';

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
  const formatPrice = new Intl.NumberFormat('en-US').format(price)
  
  const formatMarketCap = (num) => {
      if (num < 1e3) return 
      if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(1) + 'K'
      if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(1) + 'M'
      if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(1) + 'B'
      if (num >= 1e12) return +(num / 1e12).toFixed(1) + 'T'
  }
  
  const stylePercentChange = () => {
    if (percentChange > 0) {
      return (
        <td style={{ color: 'green', fontWeight: 'bold' }} data-label='Percent Change'>{percentChange}%</td>
      )
    } else {
      return (
        <td
          style={{ color: 'red', fontWeight: 'bold' }}
          data-label='Percent Change'>
          {percentChange}%
        </td>
      )
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
    <tr className='dataRows'>
      <td data-label='Favorites'>
        <img
          src={favorites.includes(id) ? filledStar : star}
          alt='star'
          onClick={handleClick}
          className='favorites'
        />
      </td>
      <td data-label='Rank'>{rank}</td>
      <td id={id} data-label='Cryptocurrency' className='cryptoNameCell'>
        <Link to={`/cryptocurrencies/${id}`} className='cryptoName'>
          {name}
        </Link>
      </td>
      <td data-label='Symbol'>{symbol}</td>
      <td data-label='Price'>${formatPrice}</td>
      {stylePercentChange()}
      <td data-label='Market Cap'>${formatMarketCap(marketCap)}</td>
    </tr>
  )
}

export default CryptocurrenciesCard

CryptocurrenciesCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  rank: PropTypes.number,
  price: PropTypes.number,
  marketCap: PropTypes.number,
  percentChange: PropTypes.number,
  addFavoriteCrypto: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  favorites: PropTypes.array,
  isFavorite: PropTypes.bool
}
  