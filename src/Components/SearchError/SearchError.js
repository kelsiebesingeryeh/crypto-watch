import React from 'react'; 
import './SearchError.css';
import PropTypes from 'prop-types';
 
const SearchError = ({ clearSearchResults }) => {
    return (
        <>
            <span className='errorStyling'>
                <h3>We couldn't find any assets that matched your search.</h3><h3 className='clearText' onClick={() => clearSearchResults()}>Clear Search</h3>
            </span>
        </>
    );
};



export default SearchError;

SearchError.propTypes = {
    clearSearchResults: PropTypes.func
};