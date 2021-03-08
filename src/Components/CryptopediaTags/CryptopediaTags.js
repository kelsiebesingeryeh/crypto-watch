import React from 'react'
import './CryptopediaTags.css'

const CryptopediaTags = ({name, description}) => {
    return (
        <section className='cryptopediaSection'>
            <h2>{name}</h2>
            <p>{description}</p>
        </section>
    )
}

export default CryptopediaTags