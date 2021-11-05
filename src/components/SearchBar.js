import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '@heroicons/react/outline'

const Search = styled.div`
    height: 70%;
    width: 60%;
    max-width: 700px;
    border-radius: 10px;/* 
    border-color: #d4d7d9;
    border-width: 1.4px;
    margin-left: 25px; */
    display: flex;
    background-color: #e6e6e6;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    padding-left: 20px;
    color: #bdbdbd;
    font-family: 'Inter', sans-serif;
`

function SearchBar() {
    return (
        <Search>
            <SearchIcon style={{color: 'bdbdbd', height: 25}} />
            <h1 style={{marginLeft: 15}}>Search</h1>
        </Search>
    )
}

export default SearchBar
