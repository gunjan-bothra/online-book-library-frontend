import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const Label = styled.label`
display: flex;
justify-content: flex-start;
margin-bottom: 24px;
`;
const Input = styled.input`
    height: 30px;
    width: 50%;
    @media (min-width: 700px) {
        width: 30%;
      }
`

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleOnInputChange = (event) => {
        const query = event.target.value;
        setSearchValue(query);
    }

    const handleSearch = () => {
        updateSearchResult(searchValue);
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            updateSearchResult(searchValue);
        }
    }
    const { updateSearchResult } = props;
    return (
        <Label className="search-label" htmlFor="search-input">
            <Input
                type="text"
                value={searchValue}
                id="search-input"
                placeholder="Search book name"
                onChange={handleOnInputChange}
                onBlur={handleSearch}
                onKeyUp={handleEnter}
            />
            <button onClick={handleSearch}>Search</button>
        </Label>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchResult: (query) => dispatch(actions.updateSearchResult(query)),
    }
}

export default connect(null, mapDispatchToProps)(Search);