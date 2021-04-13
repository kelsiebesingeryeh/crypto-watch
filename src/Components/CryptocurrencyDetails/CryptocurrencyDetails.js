import React, { Component } from 'react';
import { getACoin } from '../../apiCalls';
import './CryptocurrencyDetails.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import PropTypes from 'prop-types';

class CryptocurrencyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCoin: null,
            id: this.props.id,
            isLoading: true,
            error: false
        };
    }

    componentDidMount() {
        getACoin(this.state.id)
            .then((currentCoin) => this.setState({ currentCoin, isLoading: false }))
        /*eslint-disable */
        .catch((error) => this.setState({ error: true, isLoading: false }));
      /*eslint-enable */
    }

    linkItems() {
        return this.state.currentCoin.links.explorer.map(coin => {  
            return (
                <li key={coin}>
                    <a
                        href={coin}
                        target='_blank'
                        rel='noreferrer'
                        className='coinLinks'
                    >
                        {coin}
                    </a>
                </li>
            );
        });
    }

    tagItems() {
        return this.state.currentCoin.tags.map(coin => {
            return (
                <li key={coin.id}>{coin.name}</li>
            );
        });
    }

    teamItems() {
        return this.state.currentCoin.team.map(coin => {
            return (
                <li key={coin.id}>
                    {coin.name}, {coin.position}
                </li>
            );
        });
    }

    render() {
        return (
            <>
                {this.state.isLoading && <Loading />}
                {this.state.error && <Error />}
                {this.state.currentCoin && (
                    <section className='coinDetails'>
                        <h1>{this.state.currentCoin.name}</h1>
                        <p className='coinDescription'>
                            {this.state.currentCoin.description}
                        </p>
                        <div className='listContainer'>
                            <div className='listItemWrapper'>
                                <p>Helpful Links</p>
                                <ul className='itemList'>
                                    {this.linkItems()} 
                                </ul>
                            </div>
                            <div className='listItemWrapper'>
                                <p>Tags</p>
                                <ul className='itemList'>
                                    {this.tagItems()}
                                </ul>
                            </div>
                            <div className='listItemWrapper'>
                                <p>Team</p>
                                <ul className='itemList'>
                                    {this.teamItems()}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}
            </>
        );
    }
}

export default CryptocurrencyDetails;

CryptocurrencyDetails.propTypes = {
    currentCoin: PropTypes.string,
    id: PropTypes.number,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
};