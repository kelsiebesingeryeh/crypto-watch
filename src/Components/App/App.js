import './App.css'
import React, {Component} from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cryptocurrencies: []
    }
  }

  componentDidMount() {
    fetch("https://api.coinpaprika.com/v1/coins")
    .then(response => response.json())
    .then(cryptocurrencies => this.setState({
      cryptocurrencies: cryptocurrencies
    }))
  }

  render() {
    return (
      <main>
        <Nav />
        <h1>Welcome to Crypto Watch</h1>
        <h2>Watch the revolutionary cryptocurrency movement</h2>
        <Cryptocurrencies cryptocurrencies={this.state.cryptocurrencies} />
      </main>
    );

  }
}

export default App;
