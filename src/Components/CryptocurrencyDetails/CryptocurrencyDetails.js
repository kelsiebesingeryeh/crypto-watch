import React, { Component } from 'react'

class CryptocurrencyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCoin: null,
            id: this.props.id,
        }
    }

    render() {
        return (
            <h1>Hi</h1>
        )

    }
}

export default CryptocurrencyDetails