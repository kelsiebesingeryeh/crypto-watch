import React, { Component } from 'react'
import { getACoin } from '../../apiCalls'
import './CryptocurrencyDetails.css'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

class CryptocurrencyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCoin: null,
            id: this.props.id,
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
     getACoin(this.state.id)
       .then((currentCoin) => this.setState({ currentCoin, isLoading: false }))
       .catch((error) => this.setState({ error: true, isLoading: false }))
    }

    linkItems() {
      return this.state.currentCoin.links.explorer.map(coin => {  
        return (
          <ul className="itemList">
            <li key={coin}>
              <a
                href={coin}
                target="_blank"
                rel="noreferrer"
                className="coinLinks"
              >
                {coin}
              </a>
            </li>
          </ul>
        )
      })
    }

    tagItems() {
        return this.state.currentCoin.tags.map(coin => {
            return (
              <ul className='itemList'>
                <li key={coin.name}>{coin.name}</li>
              </ul>
            )
        })
    }

    teamItems() {
        return this.state.currentCoin.team.map(coin => {
            return (
              <ul className='itemList'>
                <li key={coin.name}>
                  {coin.name}, {coin.position}
                </li>
              </ul>
            )
        })
    }

    render() {
        return (
          <>
            {this.state.isLoading && <Loading />}
            {this.state.error && <Error />}
            {this.state.currentCoin && (
              <section className="coinDetails">
                <h1>{this.state.currentCoin.name}</h1>
                <p className="coinDescription">
                  {this.state.currentCoin.description}
                </p>
                <div className="listContainer">
                  <div className="listItemWrapper">
                    <p>Helpful Links</p>
                    {this.linkItems()}
                  </div>
                  <div className="listItemWrapper">
                    <p>Tags</p>
                    {this.tagItems()}
                  </div>
                  <div className="listItemWrapper">
                    <p>Team</p>
                    {this.teamItems()}
                  </div>
                </div>
              </section>
            )}
          </>
        )

    }
}

export default CryptocurrencyDetails