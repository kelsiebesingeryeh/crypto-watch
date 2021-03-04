import React from 'react'

const Home = () => {
    return (
        <>
        <article className="aboutSection">
          <h1 className="mainPageText header">CryptoWatch</h1>
          <h2 className="mainPageText">
            <strong>Your crypto exploration and learning platform.</strong>
          </h2>
          <h3 className="mainPageText">Mission Statement</h3>
        </article>
        <div className='sectionContainer'>
          <article className="beginnerSection mainSection">
            <p className='cardText'>I'm new to crypto. I need some explanation on how everything works.</p>
          </article>
          <article className="curiousSection mainSection">
            <p className='cardText'>I'm curious about crypto. I would like to view live prices and how the market is moving.</p>
          </article>
          <article className="buySection mainSection">
            <p className='cardText'>I'm going to invest in crypto. I'm looking for a exchange that can help me buy crypto.</p>
          </article>
        </div>
        </>
    )
}

export default Home