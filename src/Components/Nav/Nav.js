import React from 'react'
import './Nav.css'
import home from '../../assets/home.png'
// import search from '../../assets/search.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <nav className="navContainer">
        <div className="leftNav">
          <Link to="/">
            <img src={home} alt="chain" className="navIcon"></img>
          </Link>
          {/* <img src={search} alt="search" className="navIcon"></img> */}
        </div>
        <div className="rightNav">
          <Link to="/cryptopedia">
            <p className="rightNavItems">Cryptopedia</p>
          </Link>
          <Link to="/cryptocurrencies">
            <p className="rightNavItems">Cryptocurrencies</p>
          </Link>
          <Link to="/exchanges">
            <p className="rightNavItems">Exchanges</p>
          </Link>
          <Link to='/favorites'>
            <p className="rightNavItems">My Favorites</p>
          </Link>
        </div>
      </nav>
    );
}

export default Nav