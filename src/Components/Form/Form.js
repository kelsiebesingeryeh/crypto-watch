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
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    event.preventDefault()
                    this.props.filterSearchResults(this.state.searchInput)
                    this.clearInputs()
                }
            }}
            />
        </form>
        )
    }
}

export default Form