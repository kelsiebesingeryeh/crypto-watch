import React from 'react'

const ExchangeDetails = ({ name, links, currencies, markets, fiats, volume, confidenceScore }) => {
    return (
      <tr>
        <td>{name}</td>
        <td>{confidenceScore}</td>
        <td>{volume}</td>
        <td>{markets}</td>
        <td>{currencies}</td>
      </tr>
    )
}

export default ExchangeDetails
{/* <td>{fiats}</td> */}