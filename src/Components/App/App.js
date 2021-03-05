import './App.css'
import React, { Component } from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route} from 'react-router-dom'
import Home from '../Home/Home'
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails'
import { getAllCoins } from "../../apiCalls"

class App extends Component {
  constructor() {
    super()
    this.state = {
      cryptocurrencies: []
    }
  }

  componentDidMount() {
      getAllCoins().then((cryptocurrencies) =>
        this.setState({ cryptocurrencies })
      )
    }

    render() {
      return (
        <main>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/cryptocurrencies" component={() => <Cryptocurrencies cryptocurrencies={this.state.cryptocurrencies}/>} />
          <Route
            exact
            path={"/cryptocurrencies/:id"}
            render={({ match }) => {
              const id = match.params.id
              return (
                <div className='cryptocurrencyDetailsContainer'>
                  <CryptocurrencyDetails id={id} cryptocurrencies={this.state.cryptocurrencies}/>
                </div>
              )
            }
          }
          />
        </main>
      )
    }
  }

export default App
