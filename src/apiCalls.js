export const getCryptoData = () => {
    const allCryptoData = Promise.all([
      fetch('https://api.coinpaprika.com/v1/tickers'),
      fetch('https://api.coinpaprika.com/v1/exchanges'),
      fetch('https://api.coinpaprika.com/v1/tags'),
    ]).then(response => {
        return Promise.all(response.map(res => {
            return res.json()
        }))
    })
    return allCryptoData
}

export const getACoin = (id) => {
    return fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
    .then(response => response.json())
}

