import React, { useState } from 'react';
import './Form.css';
import search from '../../assets/search.png';
import x from '../../assets/x.png';
import PropTypes from 'prop-types';

const Form = ({ filterSearchResults, clearSearchResults, isSearching }) => {
    const [searchInput, setSearchInput] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        filterSearchResults(searchInput);
        clearInputs();
    };

    const clearInputs= () => {
        setSearchInput('');
    };

    return (
        <form className="searchResultForm">
            <div className="inputContainer">
                <img src={search} alt="search" className="searchIcon" />
                <input
                    className="searchInput"
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    placeholder="Search by coin name or symbol"
                    tabIndex="0"
                    onChange={(event) => setSearchInput(event.target.value.toLowerCase())}
                />
                {isSearching && (
                    <img
                        src={x}
                        alt="x"
                        className="xIcon"
                        onClick={() => clearSearchResults()}
                    />
                )}
            </div>
            <button className="searchButton" onClick={handleSubmit}>
          Search
            </button>
        </form>
    );
};

export default Form;

Form.propTypes = {
    clearSearchResults: PropTypes.func,
    filterSearchResults: PropTypes.func,
    isSearching: PropTypes.bool
};