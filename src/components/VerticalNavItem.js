import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'

const ItemHolder = styled.div`
    width: 90%;
    height: auto;
    margin: 3px;
    padding: 10px;
    padding-left: 15px;
    border-radius: 10px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9CA3AF;
    font-family: 'Inter', sans-serif;
    -webkit-transition: background-color 100ms linear, color 100ms linear;
    -ms-transition: background-color 100ms linear, color 100ms linear;
    transition: background-color 100ms linear, color 100ms linear;
    &:hover {
        background-color: #111827;
        color: #dedede;
        cursor: pointer;
    }
    ${props => props.active && css`
        background-color: #111827;
        color: #dedede;
    `}
`

function VerticalNavItem(props) {
    const history = useHistory();

    const handleOnClick = () => history.push('/forms');

    return (
        <ItemHolder active={props.active} onClick={handleOnClick}>
            <>{props.icon}</>
            <h1 style={{fontSize: 15, fontWeight: 500, paddingTop: 2}}>
                {props.title}
            </h1>
        </ItemHolder>
    )
}

export default VerticalNavItem
