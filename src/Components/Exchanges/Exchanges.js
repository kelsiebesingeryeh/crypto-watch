import React from 'react'
import ExchangeDetails from '../ExchangeDetails/ExchangeDetails'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

const Exchanges = ({ exchanges, isLoading, error }) => {
  const exchangesOnDisplay = () => {
    const sortedExchange = exchanges.sort(
      (a, b) => b["confidence_score"] - a["confidence_score"]
    );
    return sortedExchange.map((exchange) => {
      return (
        <ExchangeDetails
          key={exchange.id}
          id={exchange.id}
          name={exchange.name}
          links={exchange.links}
          currencies={exchange.currencies}
          markets={exchange.markets}
          fiats={exchange.fiats}
          volume={exchange.quotes.USD["reported_volume_24h"]}
          confidenceScore={exchange["confidence_score"]}
        />
      )
    })
  }

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      <div className="cryptoTableContainer">
        <p className="cryptoTableHeading">Cryptocurrency Exchanges</p>
        <table className="cryptoTable">
          <thead>
            <tr>
              <th>Exchange Name</th>
              <th>Exchange Score</th>
              <th>Volume(24H)</th>
              <th># Markets</th>
              <th># Coins</th>
              <th>Fiats Supported</th>
            </tr>
          </thead>
          <tbody>{exchangesOnDisplay()}</tbody>
        </table>
      </div>
    </>
  )
}

export default Exchanges