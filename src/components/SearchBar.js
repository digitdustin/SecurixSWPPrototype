import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '@heroicons/react/outline'

const width = window.innerWidth

const Search = styled.div`
    height: 70%;
    width: 700px;
    border-radius: 10px;/* 
    border-color: #d4d7d9;
    border-width: 1.4px;
    margin-left: 25px; */
    display: flex;
    background-color: #efefef;
    align-items: center;
    justify-content: flex-start;
    margin-left: 40px;
    padding-left: 20px;
    color: #bdbdbd;
    font-family: 'Inter', sans-serif;
`

function SearchBar() {
    return (
        <Search>
            <SearchIcon style={{color: 'bdbdbd', height: 25}} />
            <input style={{width: '90%', height: '100%', paddingLeft: 15, backgroundColor: '#efefef', outline: 'none'}} placeholder="Search"></input>
        </Search>
    )
}

export default SearchBar
