import React from 'react'
import logo from './Header-logo.svg'
import styled from 'styled-components'
import { size, mixin } from 'styles'
import { typography } from 'styles'

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${size.headerHeight};

  background-color: #222;
  color: white;
`

const LogoImage = styled.img`
  ${mixin.centeredY()} height: ${typography.rhythm(1)};
  margin-left: ${typography.rhythm(1)};
`

const Title = styled.h1`
  margin: 0 0 0 80px;
  height: ${size.headerHeight};
  line-height: ${size.headerHeight};
  font-weight: normal;
  font-size: 1.5rem;
`

const Header = () => {
  return (
    <HeaderBar>
      <LogoImage src={logo} />
      <Title>{process.env.REACT_APP_SITE_TITLE}</Title>
    </HeaderBar>
  )
}

export default Header
