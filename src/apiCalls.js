export const getAllCoins = () => {
    return (
        fetch("https://api.coinpaprika.com/v1/tick")
        .then(response => response.json())
    )
}

export const getACoin = (id) => {
    return fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
    .then(response => response.json())
}

