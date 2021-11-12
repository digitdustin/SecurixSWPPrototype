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
      <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              [Platform]
            </HeaderName>
            <HeaderGlobalBar>
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
                <SideNavLink renderIcon={Home32} href="javascript:void(0)" large>
                  Link
                </SideNavLink>
                <SideNavLink renderIcon={Home32} href="javascript:void(0)" large>
                  Link
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
