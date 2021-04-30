import React from 'react';
import './_Error.scss';

const Error = () => {
    return (
        <section className='errorSection'>
            <article className='errorMessage'>
                <h2>We're having technical difficulties.</h2>
                <p><em>Please refresh or revisit at a later time.</em></p>
            </article>
        </section>
    );
};

export default Error;