import React from 'react'
import './Nav.css'
import home from './home.png'
import search from './search.png'

const Nav = () => {
    return (
      <nav className="navContainer">
        <div className="leftNav">
          <img src={home} alt="home" className="navIcon"></img>
          <img src={search} alt="search" className="navIcon"></img>
        </div>
        <div className="rightNav">
          <p className="rightNavItems">Cryptopedia</p>
          <p className="rightNavItems">Cryptocurrencies</p>
          <p className="rightNavItems">Exchanges</p>
          <p className="rightNavItems">My Watch List</p>
        </div>
      </nav>
    );
}

export default Nav