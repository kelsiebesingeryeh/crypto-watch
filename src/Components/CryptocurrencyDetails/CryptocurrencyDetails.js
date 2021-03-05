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

    linkItems() {
      return this.state.currentCoin.links.explorer.map(coin => {  
        return <li>{coin}</li>
      })
    }

    tagItems() {
        return this.state.currentCoin.tags.map(coin => {
            return <li>{coin.name}</li>
        })
    }

    teamItems() {
        return this.state.currentCoin.team.map(coin => {
            return <li>{coin.name}, {coin.position}</li>
        })
    }

    render() {
        return (
          <>
            {this.state.currentCoin && (
              <section className="coinDetails">
                <h1>{this.state.currentCoin.name}</h1>
                <h2>Price</h2>
                <p>{this.state.currentCoin.description}</p>
                <ul>Helpful Links</ul>
                {this.linkItems()}
                <ul>Tags</ul>
                {this.tagItems()}
                <ul>Team</ul>
                {this.teamItems()}
              </section>
            )}
          </>
        );

    }
}

export default CryptocurrencyDetails