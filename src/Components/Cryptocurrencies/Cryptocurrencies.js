import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'
import { getAllCoins } from '../../apiCalls'
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

class Cryptocurrencies extends Component {
    constructor() {
      super()
      this.state = {
        cryptocurrencies: []
      }
    }

    componentDidMount() {
    getAllCoins()
    .then((cryptocurrencies) =>
      this.setState({cryptocurrencies})
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
        <>
          <table>
            <tbody>
            {this.cryptocurrenciesOnDisplay()}
            </tbody>
          </table>
        </>
      );
    }
  }

export default Cryptocurrencies