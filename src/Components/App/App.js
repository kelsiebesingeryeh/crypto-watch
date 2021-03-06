import './App.css'
import React, { Component } from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route, Redirect} from 'react-router-dom'
import Home from '../Home/Home'
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails'
import { getAllCoins } from "../../apiCalls"
import Error from '../Error/Error'
import Loading from '../Loading/Loading'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cryptocurrencies: [],
      error: false,
      isLoading: true,
    }
  }

  componentDidMount() {
      getAllCoins().then((cryptocurrencies) =>
        this.setState({ cryptocurrencies, isLoading: false })
      )
      .catch(error => this.setState({error: true, isLoading: false}))
    }

    render() {
      return (
        <main>
          <Nav />
          {this.state.isLoading && <Loading />}
          <Route exact path='/error' render={() => <Error />}/>
          
          <Route exact path="/" 
          render={() => {
            if (!this.state.cryptocurrencies.length && this.state.error) {
              return <Redirect to='/error'/>
            } else {
              return <Home />
            }
          }}
          />
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
