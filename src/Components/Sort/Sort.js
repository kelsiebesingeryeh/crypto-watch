import React, { Component } from 'react'

class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            selected: event.target.value
        })
        if (event.target.value === 'allCoins') {
            //do something
        } else if (event.target.value === 'highToLow') {
          //do something
        } else if (event.target.value === 'lowToHigh') {
            // do something
        } else if (event.target.value === 'alpha') {
            //do something
        } else if (event.target.value === 'reverseAlpha') {
            // do something
        }
    }

    render() { 
        return (
        <form>
          <label htmlFor="cryptocurrencies">Sort By:</label>
          <select
            name="cryptocurrencies"
            id="cryptocurrencies"
            value={this.state.selected}
            onChange={this.handleChange}>
            <option value="allCoins">View All Coins</option>
            <option value="highToLow">Coins High to Low</option>
            <option value="lowToHigh">Coins Low to High</option>
            <option value="alpha">Coins A to Z</option>
            <option value="reverseAlpha">Coins Z to A</option>
          </select>
        </form>
        )
    }
}

export default Sort