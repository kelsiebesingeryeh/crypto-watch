import React from 'react';
import './_Loading.scss';
import LoadingDots from '../LoadingDots/LoadingDots';

const Loading = () => {
    return (
        <div className='loader'>
            <LoadingDots />
        </div>
    );
};

export default Loading;