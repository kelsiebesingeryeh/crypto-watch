import React, { Component } from 'react'
import { getAllExchanges } from '../../apiCalls'
import ExchangeDetails from '../ExchangeDetails/ExchangeDetails'
import Loading from '../Loading/Loading'

class Exchanges extends Component {
    constructor() {
        super()
        this.state = {
            exchanges: [],
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
        getAllExchanges().then(exchanges => this.setState({exchanges, isLoading: false}))
    }

    exchangesOnDisplay() {
        return this.state.exchanges.map(exchange => {
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

    render() {
        return (
            <>
            {this.state.isLoading && <Loading />}
            <h1>Exchanges</h1>
            {this.exchangesOnDisplay()}
          </>
        )
    }
}

export default Exchanges

// {
//   this.state.error && <Error />;
// }

// import React from "react";
// import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard";
// import "./Cryptocurrencies.css";
// import Error from "../Error/Error";
// import Loading from "../Loading/Loading";

// const Cryptocurrencies = ({ cryptocurrencies, isLoading }) => {
//   const cryptocurrenciesOnDisplay = () => {
//     const top100Coins = cryptocurrencies
//       .filter((crypto) => crypto.rank > 0 && crypto.rank <= 100)
//       .sort((a, b) => a.rank - b.rank);
//     return top100Coins.map((crypto) => {
//       const { id, name, symbol, rank, quotes } = crypto;
//       return (
//         <CryptocurrenciesCard
//           id={id}
//           key={id}
//           name={name}
//           symbol={symbol}
//           rank={rank}
//           price={quotes.USD.price}
//           marketCap={quotes.USD["market_cap"]}
//           percentChange={quotes.USD["percent_change_24h"]}
//         />
//       );
//     });
//   };

//   if (isLoading && !cryptocurrencies.length) {
//     return <Loading />;
//   } else if (!cryptocurrencies.length) {
//     return <Error />;
//   } else if (cryptocurrencies.length) {
//     return (
//       <div className="cryptoTableContainer">
//         <p className="cryptoTableHeading">
//           Cryptocurrency prices for 100 assets
//         </p>
//         <table className="cryptoTable">
//           <tbody>
//             <th>Rank</th>
//             <th>Cryptocurrency</th>
//             <th>Symbol</th>
//             <th>Price</th>
//             <th>24HR%Chg</th>
//             <th>Market Cap</th>
//             {cryptocurrenciesOnDisplay()}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// };

// export default Cryptocurrencies;