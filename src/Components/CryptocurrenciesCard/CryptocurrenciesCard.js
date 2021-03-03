import React from 'react'

const CryptocurrenciesCard = ({id, name, symbol, rank}) => {
    return (
        <div className='cryptoCards'>
            <p>{name}</p>
            <p>{symbol}</p>
            <p>{rank}</p>
        </div>
    )
}

export default CryptocurrenciesCard