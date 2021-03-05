import './App.css'
import React from 'react'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import Nav from '../Nav/Nav'
import {Route} from 'react-router-dom'
import Home from '../Home/Home'

const App = () => {
    return (
      <main>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/cryptoMarkets" component={Cryptocurrencies} />
      </main>
    );

  }

export default App;
