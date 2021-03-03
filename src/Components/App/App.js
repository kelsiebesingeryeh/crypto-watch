import './App.css'
import React, {Component} from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import { getAllCoins } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cryptocurrencies: []
    }
  }

  componentDidMount() {
    getAllCoins()
    .then((cryptocurrencies) =>
      this.setState({
        cryptocurrencies: cryptocurrencies,
      })
    );
  }

  render() {
    return (
      <main>
        <Nav />
        <h1 className="mainPageText">Welcome to Crypto Watch</h1>
        <h2 className="mainPageText">
          Watch the revolutionary cryptocurrency movement
        </h2>
        <Cryptocurrencies cryptocurrencies={this.state.cryptocurrencies} />
      </main>
    );

  }
}

export default App;
