import React from 'react'
import './Nav.css'
import home from '../../assets/home.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <nav className='navContainer'>
        <div className='leftNav'>
          <Link to='/'>
            <img src={home} alt='chain' className='navIcon'></img>
          </Link>
          <div className='hamburger'></div>
        </div>
        <div className='rightNav'>
          <Link to='/cryptopedia'>
            <p className='rightNavItems navCryptopedia'>Cryptopedia</p>
          </Link>
          <Link to='/cryptocurrencies'>
            <p className='rightNavItems navCryptocurrencies'>Cryptocurrencies</p>
          </Link>
          <Link to='/exchanges'>
            <p className='rightNavItems navExchanges'>Exchanges</p>
          </Link>
        </div>
      </nav>
    )
}

export default Nav