import React, { useState } from 'react';
import CryptocurrenciesCard from '../CryptocurrenciesCard/CryptocurrenciesCard';
import './_Cryptocurrencies.scss';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Form from '../Form/Form';
import PropTypes from 'prop-types';
import SearchError from '../SearchError/SearchError';

const Cryptocurrencies = ({
    cryptocurrencies,
    isLoading,
    error,
    filterSearchResults,
    searchResults,
    clearSearchResults,
    addFavoriteCrypto,
    removeFromFavorites,
    favorites,
    isSearching
}) => {

    const [top100] = useState(cryptocurrencies
        .filter((crypto) => crypto.rank > 0 && crypto.rank <= 100)
        .sort((a, b) => a.rank - b.rank));

    const cryptocurrenciesOnDisplay = (cryptoList) => {
        return cryptoList.map((crypto) => {
            const { id, name, symbol, rank, quotes } = crypto;
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
            <div className="cryptoTableContainer">
                <span className="cryptoStyling">
                    <p className="cryptoTableHeading">
                    Cryptocurrency prices for 100 assets
                    </p>
                    <Form
                        filterSearchResults={filterSearchResults}
                        clearSearchResults={clearSearchResults}
                        isSearching={isSearching}
                        top100={top100}
                    />
                </span>
                {searchResults.length === 0 && isSearching && (
                    <SearchError clearSearchResults={clearSearchResults} />
                )}

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
                        {searchResults.length > 0
                            ? cryptocurrenciesOnDisplay(searchResults)
                            : cryptocurrenciesOnDisplay(top100)}
                    </tbody>
                </table>
            </div>
        </>
    );
};
    
export default Cryptocurrencies;

Cryptocurrencies.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number,
    price: PropTypes.number,
    marketCap: PropTypes.number,
    percentChange: PropTypes.number,
    addFavoriteCrypto: PropTypes.func,
    removeFromFavorites: PropTypes.func,
    favorites: PropTypes.array,
    isSearching: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    searchResults: PropTypes.array,
    filterSearchResults: PropTypes.func,
    clearSearchResults: PropTypes.func,
    cryptocurrencies: PropTypes.array
};