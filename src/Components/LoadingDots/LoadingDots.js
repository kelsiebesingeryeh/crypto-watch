import React from 'react';
import './_LoadingDots.scss';
import dotsLoading from '../../assets/dotsLoading.gif';

const LoadingDots = () => {
    return (
        <p className='loading'>
            <img src={dotsLoading}/>
        </p>
    );
};

export default LoadingDots;