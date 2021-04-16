import React, { Component } from 'react';
import './Form.css';
import search from '../../assets/search.png';
import x from '../../assets/x.png';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSearchResults(this.state.searchInput);
        this.clearInputs();
    }

    clearInputs= () => {
        this.setState({
            searchInput: '',
        });
    }

    render() {
        return (
            <form className="searchResultForm">
                <div className="inputContainer">
                    <img src={search} alt="search" className="searchIcon" />
                    <input
                        className="searchInput"
                        type="text"
                        name="searchInput"
                        value={this.state.searchInput}
                        placeholder="Search by coin name or symbol"
                        tabIndex="0"
                        onChange={this.handleChange}
                    />
                    {this.props.isSearching && (
                        <img
                            src={x}
                            alt="x"
                            className="xIcon"
                            onClick={() => this.props.clearSearchResults()}
                        />
                    )}
                </div>
                <button className="searchButton" onClick={this.handleSubmit}>
              Search
                </button>

            </form>
        );
    }
}

export default Form;

Form.propTypes = {
    clearSearchResults: PropTypes.func,
    filterSearchResults: PropTypes.func,
    isSearching: PropTypes.bool
};