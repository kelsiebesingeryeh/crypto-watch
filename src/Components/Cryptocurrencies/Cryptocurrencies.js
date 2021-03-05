import React, {Component} from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'
import { getAllCoins } from '../../apiCalls'
import MUIDataTable from "mui-datatables";


class Cryptocurrencies extends Component {
  constructor() {
    super();
    this.state = {
      cryptocurrencies: [],
    };
  }

  componentDidMount() {
    getAllCoins().then((cryptocurrencies) =>
      this.setState({ cryptocurrencies })
    );
  }

  cryptocurrenciesOnDisplay() {
      const {cryptocurrencies} = this.state
      const top100Coins = cryptocurrencies.filter(crypto => crypto.rank > 0 && crypto.rank <= 100).sort((a,b) => a.rank - b.rank)
         return top100Coins.map((crypto) => {
           const {id, name, symbol, rank, quotes} = crypto
           return (
             <CryptocurrenciesCard
               id={id}
               key={id}
               name={name}
               symbol={symbol}
               rank={rank}
               price={quotes.USD.price}
               marketCap={quotes.USD["market_cap"]}
               percentChange={quotes.USD["percent_change_24h"]}
             />
           );
         });
      }

  render() {
    return (
      <div className='cryptoTableContainer'>
          <table className='cryptoTable'>
            <tbody>
              <th>Rank</th>
              <th>Cryptocurrency</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24HR%Chg</th>
              <th>Market Cap</th>
            {this.cryptocurrenciesOnDisplay()}
            </tbody>
          </table>
      </div>
    )
  }
}
    
    // {cryptocurrenciesOnDisplay}
export default Cryptocurrencies

// <>
//           <table className='cryptoTable'>
//             <tbody>
//               <th>Rank</th>
//               <th>Cryptocurrency</th>
//               <th>Symbol</th>
//               <th>Price</th>
//               <th>24HR%Chg</th>
//               <th>Market Cap</th>
//             {this.cryptocurrenciesOnDisplay()}
//             </tbody>
//           </table>
//         </>


// cryptocurrenciesOnDisplay() {
//     const {cryptocurrencies} = this.state
//     const top100Coins = cryptocurrencies.filter(crypto => crypto.rank > 0 && crypto.rank <= 100).sort((a,b) => a.rank - b.rank)
//        return top100Coins.map((crypto) => {
//          const {id, name, symbol, rank, quotes} = crypto
//          return ( 
//            <CryptocurrenciesCard
//              id={id}
//              key={id}
//              name={name}
//              symbol={symbol}
//              rank={rank}
//              price={quotes.USD.price}
//              marketCap={quotes.USD["market_cap"]}
//              percentChange={quotes.USD["percent_change_24h"]}
//            />
//          );
//        });
//     }



// cryptocurrenciesOnDisplay() {
//     const {cryptocurrencies} = this.state
//     const top100Coins = cryptocurrencies.filter(crypto => crypto.rank > 0 && crypto.rank <= 100).sort((a,b) => a.rank - b.rank)
//        return top100Coins.map((crypto) => {
//          console.log('hello', crypto)
//          return (crypto = {
//            "Rank": crypto.rank,
//            "Cryptocurrency": crypto.name,
//            "Symbol": crypto.symbol,
//            "Price": crypto.quotes.USD.price,
//            "24HR%Chg": crypto.quotes.USD["percent_change_24h"],
//            "Market Cap": crypto.quotes.USD["market_cap"]
//          });
//        });
//     }

//    columns() {
//       return ['Rank', 'Cryptocurrency', "Symbol"," Price","24HR%Chg","Market Cap"]
//     } 
    
//     render() {
//       return (
//         <MUIDataTable
//           columns={this.columns()}
//           data={this.cryptocurrenciesOnDisplay()}
//         />
//       );
//       }
//     }