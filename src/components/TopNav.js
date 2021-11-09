import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import { BellIcon, BookmarkIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'
import AProfilePicture from '../assets/img/AProfilePicture.png'

const NavHolder = styled.div`
    height: 60px;
    width: 100%;
    background-color: 'white';
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
`


function TopNav() {
    return (
        <NavHolder>
            <SearchBar />
            <div style={{height: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 60}}>
                <BellIcon style={{height: 28, width: 28, marginLeft: 20}} color='#8e959e'/>
                <BookmarkIcon style={{height: 28, width: 28, marginLeft: 20}} color='#8e959e'/>
                <QuestionMarkCircleIcon style={{height: 28, width: 28, marginLeft: 20}} color='#8e959e'/>
                <img src={AProfilePicture} style={{height: 28, width: 28, marginLeft: 20, borderRadius: '50%'}} />
            </div>
        </NavHolder>
    )
}

export default TopNav
