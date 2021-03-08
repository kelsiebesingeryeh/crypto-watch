import React from 'react'

const ExchangeDetails = ({ name, links, currencies, markets, fiats, volume, confidenceScore }) => {
    const exchangePercentage = confidenceScore * 10
    const styledVolume = volume.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const displayFiats = fiats.map(fiat => fiat.symbol).join(', ')
    return (
      <tr>
        <td data-label="Exchange Name">{name}</td>
        <td data-label="Exchange Score">{exchangePercentage.toFixed(2)}</td>
        <td data-label="Volume(24H)">${styledVolume}</td>
        <td data-label="# Markets">{markets}</td>
        <td data-label="# Coins">{currencies}</td>
        <td data-label="Fiats Supported">{displayFiats}</td>
      </tr>
    );
}

export default ExchangeDetails