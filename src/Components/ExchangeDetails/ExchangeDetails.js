import React from 'react'
import PropTypes from "prop-types";

const ExchangeDetails = ({ name, currencies, markets, fiats, volume, confidenceScore }) => {
    const exchangePercentage = confidenceScore * 10
    const formatVolume = new Intl.NumberFormat("en-US").format(volume)
    const displayFiats = fiats.map(fiat => fiat.symbol).join(', ')
    return (
      <tr>
        <td data-label="Exchange Name">{name}</td>
        <td data-label="Exchange Score">{exchangePercentage.toFixed(2)}</td>
        <td data-label="Volume(24H)">${formatVolume}</td>
        <td data-label="# Markets">{markets}</td>
        <td data-label="# Coins">{currencies}</td>
        <td data-label="Fiats Supported">{displayFiats}</td>
      </tr>
    )
}

export default ExchangeDetails

ExchangeDetails.propTypes = {
  name: PropTypes.string,
  currencies: PropTypes.number,
  markets: PropTypes.number,
  fiats: PropTypes.array,
  volume: PropTypes.number,
  confidenceScore: PropTypes.number
}