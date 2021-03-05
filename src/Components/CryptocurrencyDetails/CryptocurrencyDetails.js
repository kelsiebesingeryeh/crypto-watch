import React, { Component } from 'react'
import { getACoin } from '../../apiCalls'

class CryptocurrencyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCoin: null,
            id: this.props.id,
        }
    }

    componentDidMount() {
     getACoin(this.state.id)
    }

    render() {
        return (
            <h1>Hi</h1>
        )

    }
}

export default CryptocurrencyDetails