import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value.toLowerCase()
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.filterSearchResults(this.state.searchInput)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            searchInput: ''
        })
    }

    render() {
        return (
        <form className='searchResultForm'>
            <input
            className='searchInput' 
            type='text'
            name='searchInput'
            value={this.state.searchInput}
            placeholder='Search by coin name or symbol'
            onChange={this.handleChange}
            />
        <button className='searchButton' onClick={this.handleSubmit}>Search</button>
        </form>
        )
    }
}

export default Form