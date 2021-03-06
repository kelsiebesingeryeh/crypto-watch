import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ''
        }
    }
    render() {
        return (
        <form className='searchResultForm'>
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