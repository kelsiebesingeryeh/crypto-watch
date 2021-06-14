import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CryptocurrenciesCard from '../CryptocurrenciesCard/CryptocurrenciesCard';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';


const Favorites = ({
    cryptocurrencies,
    favorites,
    error,
    isLoading,
    addFavoriteCrypto,
    removeFromFavorites,
}) => {
    const [myFavorites, setMyFavorites] = useState([]);

    useEffect(() => {
        const filteredFavorites = cryptocurrencies.filter((coin) =>
            favorites.includes(coin.id)
        );
        setMyFavorites(filteredFavorites);
    }, []);

    const favoritesOnDisplay = () => {
        return myFavorites.map((fav) => {
            const { id, name, symbol, rank, quotes } = fav;
            return (
                <CryptocurrenciesCard
                    id={id}
                    key={id}
                    name={name}
                    symbol={symbol}
                    rank={rank}
                    price={quotes.USD.price}
                    marketCap={quotes.USD['market_cap']}
                    percentChange={quotes.USD['percent_change_24h']}
                    addFavoriteCrypto={addFavoriteCrypto}
                    removeFromFavorites={removeFromFavorites}
                    favorites={favorites}
                />
            );
        });
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error />}
            {myFavorites.length === 0 ? 
                <p>You have no Favorites!</p>
                : 
                <div className="cryptoTableContainer">
                    <table className="cryptoTable">
                        <thead>
                            <tr>
                                <th>Favorites</th>
                                <th>Rank</th>
                                <th>Cryptocurrency</th>
                                <th>Symbol</th>
                                <th>Price</th>
                                <th>24HR%Chg</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFavorites.length > 0 ? favoritesOnDisplay() : null}
                        </tbody>
                    </table>
                </div>
            
            }
        </>
    );
};

export default Favorites;

Favorites.propTypes = {
    cryptocurrencies: PropTypes.array,
    favorites: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    addFavoriteCrypto: PropTypes.func,
    removeFromFavorites: PropTypes.func
};