import React from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import CryptopediaTags from '../CryptopediaTags/CryptopediaTags';
import './_Cryptopedia.scss';
import PropTypes from 'prop-types';

const Cryptopedia = ({tags, isLoading, error}) => {

    const tagsOnDisplay = () => {
        const sortedTags = tags.sort((a, b) => a.name < b.name && -1);

        return sortedTags.map(tag => {
            return (
                <CryptopediaTags 
                    id={tag.id}
                    key={tag.id}
                    name={tag.name}
                    description={tag.description}
                />
            );
        });
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error />}
            <h1 className='cryptopediaHeading'>Crypto 101</h1>
            <section className='cryptopediaSection'>
                {tagsOnDisplay()}
            </section>
        </>
    );
};

export default Cryptopedia;

Cryptopedia.propTypes = {
    tags: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
};