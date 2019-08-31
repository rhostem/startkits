import React /* Component */ from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { size } from 'styles'

const Aside = styled.aside`
  position: absolute;
  top: ${size.headerHeight};
  left: 0;
  width: ${size.sideBarWidth};
  min-height: 100vh;
  border-right: 1px solid #ccc;
  padding: 1rem;
`

const MenuList = styled.ul`
  padding: 0;
`

const MenuLink = styled(NavLink)`
  display: block;
  margin-bottom: 0.5rem;
  list-style: none;
  font-size: 1.2rem;
  color: #222;
`

const activeMenuStyle = {
  fontWeight: 'bold',
  color: 'tomato',
}

const SideBar = () => {
  return (
    <Aside>
      <MenuList>
        <MenuLink exact to="/" activeStyle={activeMenuStyle}>
          Home
        </MenuLink>
        <MenuLink exact to="/test-route" activeStyle={activeMenuStyle}>
          404
        </MenuLink>
      </MenuList>
    </Aside>
  )
}

export default SideBar
