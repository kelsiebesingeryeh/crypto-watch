import React from 'react'
import './Nav.css'
import home from './home.png'
// import search from '.../assets/search-icon.png'

const Nav = () => {
    return (
        <nav className='navContainer'>
            <div className='leftNav'>
                    <img src={home} alt='home'></img>
            </div>
            <div className='rightNav'>
                <p className="rightNavItems">Exchanges</p>
                <p className="rightNavItems">My Watch List</p>
            </div> 
        </nav>
    )
}

export default Nav