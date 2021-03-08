import React from 'react'
import './CryptopediaTags.css'

const CryptopediaTags = ({name, description}) => {
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
        </>
    )
}

export default CryptopediaTags