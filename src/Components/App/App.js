import './App.css'
import React, {Component} from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'

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
        <Cryptocurrencies
        cryptocurrencies={this.state.cryptocurrencies} 
        />
      </main>
    )

  }
}

export default App;
