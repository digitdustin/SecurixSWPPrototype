import { HomeIcon, UsersIcon, SupportIcon, DocumentSearchIcon, ShieldCheckIcon, BriefcaseIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import styled from 'styled-components'
import VerticalNavItem from './VerticalNavItem'

const NavHolder = styled.div`
    width: 15%;
    max-width: 290px;
    min-width: 270px;
    height: 100vh;
    background-color: #1F2937;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const IconHolder = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    background: linear-gradient(140deg, #5cbaf7, #2087c9);
`

function VerticalNav() {
    return (
        <NavHolder>
            <IconHolder />
            <VerticalNavItem icon={<HomeIcon style={{height: 23}}/>} title="Home" active/>
            <VerticalNavItem icon={<UsersIcon style={{height: 23}}/>} title="Roles" />
            <VerticalNavItem icon={<SupportIcon style={{height: 23}}/>} title="AV Support" />
            <VerticalNavItem icon={<DocumentSearchIcon style={{height: 23}}/>} title="Pubs & Docs" />
            <VerticalNavItem icon={<ShieldCheckIcon style={{height: 23}}/>} title="SRC" />
            <VerticalNavItem icon={<BriefcaseIcon style={{height: 23}}/>} title="VTC" />
            <VerticalNavItem icon={<QuestionMarkCircleIcon style={{height: 23}}/>} title="FAQ" />
        </NavHolder>
    )
}

export default VerticalNav
