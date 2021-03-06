import React from 'react'

const ExchangeDetails = ({ name, links, currencies, markets, fiats, volume, confidenceScore }) => {
    const exchangePercentage = confidenceScore * 10
    const styledVolume = volume.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const displayFiats = fiats.map(fiat => fiat.symbol).join(', ')
    return (
      <tr>
        <td>{name}</td>
        <td>{exchangePercentage.toFixed(2)}</td>
        <td>${styledVolume}</td>
        <td>{markets}</td>
        <td>{currencies}</td>
        <td>{displayFiats}</td>
      </tr>
    )
}

export default ExchangeDetails