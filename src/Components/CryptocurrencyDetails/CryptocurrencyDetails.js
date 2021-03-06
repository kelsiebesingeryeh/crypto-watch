import React, { Component } from 'react'
import { getACoin } from '../../apiCalls'
import './CryptocurrencyDetails.css'
import Loading from '../Loading/Loading'

class CryptocurrencyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCoin: null,
            id: this.props.id,
            isLoading: true
        }
    }

    componentDidMount() {
     getACoin(this.state.id)
     .then(currentCoin => this.setState({currentCoin, isLoading: false}))
    }

    linkItems() {
      return this.state.currentCoin.links.explorer.map(coin => {  
        return (
          <ul className="itemList">
            <li>
              <a href={coin} target='_blank' className='coinLinks'>{coin}</a>
            </li>
          </ul>
        );
      })
    }

    tagItems() {
        return this.state.currentCoin.tags.map(coin => {
            return (
              <ul className='itemList'>
                <li>{coin.name}</li>
              </ul>
            )
        })
    }

    teamItems() {
        return this.state.currentCoin.team.map(coin => {
            return (
              <ul className='itemList'>
                <li>
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
            {this.state.currentCoin && (
              <section className="coinDetails">
                <h1>{this.state.currentCoin.name}</h1>
                <h2>Price</h2>
                <p className="coinDescription">
                  {this.state.currentCoin.description}
                </p>
                <div className="listContainer">
                  <div className="listItemWrapper">
                    <p>Helpful Links</p>
                    {this.linkItems()}
                  </div>
                  <div className="listWrapper">
                    <p>Tags</p>
                    {this.tagItems()}
                  </div>
                  <div className="listWrapper">
                    <p>Team</p>
                    {this.teamItems()}
                  </div>
                </div>
              </section>
            )}
          </>
        );

    }
}

export default CryptocurrencyDetails