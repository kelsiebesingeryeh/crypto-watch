import React from 'react'
import "./CryptocurrenciesCard.css"

const CryptocurrenciesCard = ({
  id,
  name,
  symbol,
  rank,
  price,
  marketCap,
  circulatingSupply,
  volume,
  percentChange,
}) => {
  const stylePrice = price.toFixed(2);

  return (
    <tbody>
      <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{percentChange}</td>
        <td>{marketCap}</td>
        <td>{volume}</td>
        <td>{circulatingSupply}</td>
      </tr>
    </tbody>

    // <div className="cryptoCards">
    //   <span className="cardStyling">
    //     <p className="cardInfo">
    //       {name}, {symbol}
    //     </p>
    //     <p className="cardInfo rank">{rank}</p>
    //   </span>
    //   <p>Current Price: ${stylePrice}</p>
    //   <p>Market Cap: {marketCap}</p>
    // </div>
  );
};

export default CryptocurrenciesCard