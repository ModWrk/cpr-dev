import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  img {
    margin: 0 auto;
  }
`

const HeaderContainer = styled.div`
  margin: .5rem auto;
  max-width: 90%;
  padding: 0.3rem;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 4fr 6fr;
  grid-template-rows: 100px;
`
const NavItems = styled.div`
  margin: auto 0;
  grid-column: 2 / -1;
  a {
    text-decoration: none;
    color: white;
    padding: 0 10px;
    float: right;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none', 
          }}
        >
          <img
            style={{
              width: '150px',
            }}
            src={logo}
            alt="Clinger Pro Roofing Logo"
          />
        </Link>
      </div>
      <NavItems>
        <Link to="/gallery/">Gallery</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/services/">Services</Link>
        <Link to="/about/">About Us</Link>
        <Link to="/">Home</Link>
      </NavItems>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
