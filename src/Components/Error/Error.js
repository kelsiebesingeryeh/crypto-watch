import React from 'react'
import './Error.css'

const Error = () => {
    return (
        <section className='errorSection'>
            <article className='errorMessage'>
                <h2>We're having technical difficulties.</h2>
                <p><em>Please refresh or revisit at a later time.</em></p>
            </article>
        </section>
    )
}

export default Error