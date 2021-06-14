import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Favorites = ({ cryptocurrencies, favorites }) => {
    console.log('crypto', cryptocurrencies);
    console.log('favs', favorites);
    const [myFavorites, setMyFavorites] = useState([]);

    // console.log('work', filteredFavorites);
    
    useEffect(() => {
        const filteredFavorites = cryptocurrencies.filter((coin) => favorites.includes(coin.id));
        setMyFavorites(filteredFavorites);
    }, []);

    console.log(myFavorites);

    return (
        <>
            <h3>My Favorites coming soon</h3>
        </>
    );
};

export default Favorites;

Favorites.propTypes = {
    cryptocurrencies: PropTypes.array,
    favorites: PropTypes.array,
};