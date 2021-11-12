import React, { useState, useContext } from 'react'
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
    HeaderContainer,
    Search,
    Button
} from 'carbon-components-react'
import { 
    Bookmark20, 
    Help20, 
    UserAvatar20, 
    Notification20,
    Home32,
    UserMultiple32,
    RequestQuote32,
    View32,
    AlignBoxMiddleCenter32,
    Help32,
} from '@carbon/icons-react';
import {RoleContext, roles} from '../contexts/role-context'

function TopNav() {
    const {role, toggleRole} = useContext(RoleContext);

    return (
      <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="SWIS Portal Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="Atlas">
              [SWIS]
            </HeaderName>
            <Search style={{maxWidth: 650, backgroundColor: '#2e2e2e'}} placeholder="What are you looking for?" size="xl" id="portal-search" light/>
            <HeaderGlobalBar>
              <Button renderIcon={View32} size="default" style={{backgroundColor: '#2e2e2e'}} title="Toggle Role" onClick={toggleRole}>{role === roles.user ? "View as Admin" : "View as User"}</Button>
              <HeaderGlobalAction aria-label="Bookmarks" onClick={() => {}}>
                <Bookmark20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Quick Links" onClick={() => {}}>
                <Help20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifictions" onClick={() => {}}>
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
                <UserAvatar20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavMenu renderIcon={Home32} title="Home" large>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    aria-current="page"
                    href="javascript:void(0)"
                  >
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu renderIcon={UserMultiple32} title="Roles" large>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    aria-current="page"
                    href="javascript:void(0)"
                  >
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
                  <SideNavMenuItem
                    aria-current="page"
                    href="javascript:void(0)"
                  >
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink renderIcon={AlignBoxMiddleCenter32} href="javascript:void(0)" large>
                  How-Tos
                </SideNavLink>
                <SideNavLink renderIcon={Help32} href="javascript:void(0)" large>
                  FAQ
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  </div>
  )
}

export default TopNav
