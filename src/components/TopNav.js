import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const NavHolder = styled.div`
    height: 60px;
    width: 100%;
    background-color: 'white';
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


function TopNav() {
    return (
        <NavHolder>
            <SearchBar />
        </NavHolder>
    )
}

export default TopNav
