import './App.css'
import React, { Component } from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route} from 'react-router-dom'
import Home from '../Home/Home'
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails'
import { getAllCoins } from "../../apiCalls"
import Error from '../Error/Error'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cryptocurrencies: [],
      error: false
    }
  }

  componentDidMount() {
      getAllCoins().then((cryptocurrencies) =>
        this.setState({ cryptocurrencies })
      )
      .catch(error => this.setState({error: true}))
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
                  <CryptocurrencyDetails id={id}/>
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
