import React from 'react'
import './Nav.css'
import home from './home.png'
import search from './search.png'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
      <nav className="navContainer">
        <div className="leftNav">
          <img src={home} alt="home" className="navIcon"></img>
          <img src={search} alt="search" className="navIcon"></img>
        </div>
        <div className="rightNav">
          <Link to="cryptopedia">
            <p className="rightNavItems">Cryptopedia</p>
          </Link>
          <Link to="cryptoMarkets">
            <p className="rightNavItems">Cryptocurrencies</p>
          </Link>
          <Link to='cryptoExchanges'>
            <p className="rightNavItems">Exchanges</p>
          </Link>
          <p className="rightNavItems">My Watch List</p>
        </div>
      </nav>
    );
}

export default Nav