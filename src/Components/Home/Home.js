import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
      <>
        <article className='aboutSection'>
          <h1 className='mainPageText header'>CryptoWatch</h1>
          <h2 className='mainPageText subHeader'>
            <strong>Your crypto exploration and learning platform.</strong>
          </h2>
        </article>

        <div className='sectionContainer'>
          <Link to='/cryptopedia'>
            <article className='beginnerSection mainSection'>
              <p className='cardText'>
                I'm new to crypto. I'd like to learn more about how everything works.
              </p>
            </article>
          </Link>

          <Link to='/cryptocurrencies'>
            <article className='curiousSection mainSection'>
              <p className='cardText'>
                I'm curious about crypto. I'd like to learn more about pricing and how the markets look.
              </p>
            </article>
          </Link>

          <Link to='/exchanges'>
            <article className='buySection mainSection'>
              <p className='cardText'>
                I'm investing in crypto. I'm like to learn more about exchanges and how to buy crypto.
              </p>
            </article>
          </Link>
        </div>
      </>
    )
}

export default Home