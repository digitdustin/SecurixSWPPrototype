import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import AProfilePicture from '../assets/img/AProfilePicture.png'
import { 
    Header, 
    HeaderName, 
    HeaderGlobalBar, 
    HeaderGlobalAction, 
    HeaderMenuButton,
    SkipToContent,
    SideNav, 
    SideNavItems, 
    SideNavMenu, 
    SideNavMenuItem,
    SideNavLink,
    SideNavIcon,
    HeaderContainer
} from 'carbon-components-react'
import { 
    Bookmark20, 
    Help20, 
    UserAvatar20, 
    Notification20,
    Home32,
    UserMultiple32,
    RequestQuote32,
} from '@carbon/icons-react';

function TopNav() {

    return (
        <HeaderContainer render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
        <Header aria-label="ATLAS Platform Name" >
            <SkipToContent />
            <HeaderMenuButton
                aria-label="Open menu"
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
            />
            <HeaderName href='#' prefix="Atlas">
                [SWIS]
            </HeaderName>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Bookmarks">
                    <Bookmark20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Quick Links">
                    <Help20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications">
                    <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Profile">
                    <UserAvatar20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav 
                aria-label="Side navigation" 
                expanded={isSideNavExpanded} 
                isRail
                onOverlayClick={onClickSideNavExpand}
            >
            <SideNavItems>
              <SideNavMenu renderIcon={Home32} title="Home" large>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu
                renderIcon={UserMultiple32}
                title="Roles"
                isActive={true}
                large>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={RequestQuote32} title="Forms" large>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink renderIcon={Help20} href="javascript:void(0)" large>
                Link
              </SideNavLink>
              <SideNavLink renderIcon={Help20} href="javascript:void(0)" large>
                Link
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
        <p>Hello World</p>
        </>
  )}
/>
    )
}

export default TopNav
