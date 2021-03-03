import './App.css'
import React, {Component} from 'react'

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
      <h1>Hello World</h1>
    )

  }
}

export default App;
