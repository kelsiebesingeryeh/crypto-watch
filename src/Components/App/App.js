import './App.css'
import React, {Component} from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'

import {Route} from 'react-router-dom'
import Home from '../Home/Home'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     cryptocurrencies: []
  //   }
  // }

  // componentDidMount() {
  //   getAllCoins()
  //   .then((cryptocurrencies) =>
  //     this.setState({
  //       cryptocurrencies: cryptocurrencies,
  //     })
  //   );
  // }

  render() {
    return (
      <main>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/cryptoMarkets" component={Cryptocurrencies} />
      </main>
    );

  }
}

export default App;
