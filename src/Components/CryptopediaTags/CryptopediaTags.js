import React from 'react';
import './_CryptopediaTags.scss';
import PropTypes from 'prop-types';

const CryptopediaTags = ({name, description}) => {
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
        </>
    );
};

export default CryptopediaTags;

CryptopediaTags.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};