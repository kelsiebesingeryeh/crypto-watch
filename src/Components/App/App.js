import './App.css'
import React from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route} from 'react-router-dom'
import Home from '../Home/Home'
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails'
import { getAllCoins } from "../../apiCalls"

const App = () => {
    return (
      <main>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/cryptocurrencies" component={Cryptocurrencies} />
        <Route
          exact
          path={"/cryptocurrencies/:id"}
          render={({ match }) => {
            const id = parseInt(match.params.id)
            return (
              <div className='cryptocurrencyDetailsContainer'>
                <CryptocurrencyDetails id={id}/>
              </div>
            )
          }
        }
        />
      </main>
    );

  }

export default App;

// componentDidMount() {
//     getAllCoins().then((cryptocurrencies) =>
//       this.setState({ cryptocurrencies })
//     )
//   }