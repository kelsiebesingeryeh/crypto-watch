import React from 'react';
import './_LoadingDots.scss';

const LoadingDots = () => {
    return (
        <p className='loading'>
       Loading<span>.</span>
            <span>.</span>
            <span>.</span>
        </p>
    );
};

export default LoadingDots;