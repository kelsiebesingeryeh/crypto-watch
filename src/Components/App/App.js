import './App.css'
import React, { Component } from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route, Redirect} from 'react-router-dom'
import Home from '../Home/Home'
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails'
import { getAllCoins } from "../../apiCalls"
import Error from '../Error/Error'
import Exchanges from '../Exchanges/Exchanges'

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
        this.setState({ cryptocurrencies, isLoading: false})
      )
      .catch(error => this.setState({error: true, isLoading: false}))
    }

    render() {
      return (
        <main>
          <Nav />
          <Route exact path="/error" render={() => <Error />} />

          <Route
            exact
            path="/"
            render={() => {
              if (!this.state.cryptocurrencies.length && this.state.error) {
                return <Redirect to="/error" />;
              } else {
                return <Home />;
              }
            }}
          />
          <Route
            exact
            path="/cryptocurrencies"
            component={() => (
              <Cryptocurrencies
                cryptocurrencies={this.state.cryptocurrencies}
                isLoading={this.state.isLoading}
              />
            )}
          />
          <Route
            exact
            path={"/cryptocurrencies/:id"}
            render={({ match }) => {
              const id = match.params.id;
              return (
                <div className="cryptocurrencyDetailsContainer">
                  <CryptocurrencyDetails
                    id={id}
                    isLoading={this.state.isLoading}
                  />
                </div>
              )
            }}
          />
          <Route exact path='/exchanges' component={Exchanges}/>
        </main>
      );
    }
  }

export default App
