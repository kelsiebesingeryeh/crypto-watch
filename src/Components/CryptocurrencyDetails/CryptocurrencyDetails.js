import React, { useState, useEffect } from 'react';
import { getACoin } from '../../apiCalls';
import './CryptocurrencyDetails.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import PropTypes from 'prop-types';

const CryptocurrencyDetails = ({ id }) => {
    const [currentCoin, setCurrentCoin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        getACoin(id)
            .then((currentCoin) => {
                setCurrentCoin(currentCoin);
                setIsLoading(false);
            })
        /*eslint-disable */
        .catch((error) => {
            setError(true)
            setIsLoading(false)
            })
      /*eslint-enable */
    }, []);

    const linkItems = () => {
        return currentCoin.links.explorer.map(coin => {  
            return (
                <li key={coin}>
                    <a
                        href={coin}
                        target='_blank'
                        rel='noreferrer'
                        className='coinLinks'
                    >
                        {coin}
                    </a>
                </li>
            );
        });
    };

    const tagItems = () => {
        return currentCoin.tags.map(coin => {
            return (
                <li key={coin.id}>{coin.name}</li>
            );
        });
    };

    const teamItems = () => {
        return currentCoin.team.map(coin => {
            return (
                <li key={coin.id}>
                    {coin.name}, {coin.position}
                </li>
            );
        });
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error />}
            {currentCoin && (
                <section className='coinDetails'>
                    <h1>{currentCoin.name}</h1>
                    <p className='coinDescription'>
                        {currentCoin.description}
                    </p>
                    <div className='listContainer'>
                        <div className='listItemWrapper'>
                            <p>Helpful Links</p>
                            <ul className='itemList'>
                                {linkItems()} 
                            </ul>
                        </div>
                        <div className='listItemWrapper'>
                            <p>Tags</p>
                            <ul className='itemList'>
                                {tagItems()}
                            </ul>
                        </div>
                        <div className='listItemWrapper'>
                            <p>Team</p>
                            <ul className='itemList'>
                                {teamItems()}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CryptocurrencyDetails;

CryptocurrencyDetails.propTypes = {
    currentCoin: PropTypes.string,
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
};