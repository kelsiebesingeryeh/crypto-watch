import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ''
        }
    }
    render() {
        return (
        <form>
            <input 
            type='text'
            name='searchInput'
            value={this.state.searchInput}
            placeholder='Search by coin name or symbol'
            />
        </form>
        )
    }
}

export default Form