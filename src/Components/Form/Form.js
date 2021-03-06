import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <form className='searchResultForm'>
            <input 
            type='text'
            name='searchInput'
            value={this.state.searchInput}
            placeholder='Search by coin name or symbol'
            onChange={this.handleChange}
            />
        </form>
        )
    }
}

export default Form