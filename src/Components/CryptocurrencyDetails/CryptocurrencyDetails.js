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
     .then(currentCoin => this.setState({currentCoin}))
    }

    render() {
        return (
          <section className="coinDetails">
            {this.state.currentCoin && <p>{this.state.currentCoin.name}</p>}
          </section>
        );

    }
}

export default CryptocurrencyDetails