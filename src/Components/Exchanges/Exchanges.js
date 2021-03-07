import React, { Component } from 'react'
import { getAllExchanges } from '../../apiCalls'
import ExchangeDetails from '../ExchangeDetails/ExchangeDetails'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

class Exchanges extends Component {
  constructor() {
    super();
    this.state = {
      exchanges: [],
      isLoading: true,
      error: false,
    };
  }

  componentDidMount() {
    getAllExchanges()
    .then((exchanges) =>
      this.setState({ exchanges, isLoading: false })
    )
    .catch((error) =>this.setState({ error: true }))
  }

exchangesOnDisplay() {
     const sortedExchange = this.state.exchanges.sort((a, b) => b['confidence_score'] - a['confidence_score'])
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
      );
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loading />}
        {this.state.error && <Error />}
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
            <tbody>
              {this.exchangesOnDisplay()}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Exchanges