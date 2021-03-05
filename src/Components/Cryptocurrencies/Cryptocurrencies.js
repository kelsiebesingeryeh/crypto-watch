import { render } from '@testing-library/react';
import React, {Component} from 'react'
import CryptocurrenciesCard from "../CryptocurrenciesCard/CryptocurrenciesCard"
import './Cryptocurrencies.css'
import { getAllCoins } from '../../apiCalls'

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
          <div className="cryptocurrencyContainer">
            <div className='headingContainer'>
              <span className="crytpoHeadingsLeft">
                <p className="marketHeadingLeft">#</p>
                <p className="marketHeadingLeft">Cryptocurrency</p>
              </span>
              <span className="crytpoHeadingsRight">
                <p className="marketHeadingRight">Price</p>
                <p className="marketHeadingRight">24H%Chg</p>
                <p className="marketHeadingRight">Market Cap</p>
              </span>
            </div>
            {this.cryptocurrenciesOnDisplay()}
          </div>
        </>
      );
    }
  }

export default Cryptocurrencies