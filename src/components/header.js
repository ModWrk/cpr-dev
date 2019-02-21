import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'



const HeaderWrapper = styled.div`
  background: rgba(0, 0, 0, .3);
  position: fixed;
  width: 100%;
`

const HeaderContainer = styled.div`
  margin: .3rem auto;
  max-width: 90%;
  padding-top: 1rem;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 4fr 4fr 4fr;
  grid-template-rows: 100px;
  grid-template-areas:
    "logo . navItems";
  justify-items: center;
  align-items: center;


  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40px 60px;
    grid-row-gap: 10px;
    grid-template-areas:
    "logo"
    "navItems";
  }
`

const Logo = styled.div`
  grid-area: logo;
  width: 150px;
  @media (max-width: 700px) {
    width: 100px;
    padding-top: 2rem;
`

const NavItems = styled.div`
  grid-area: navItems;
  margin: 0 auto;
  /* width: 100%; */
  a {
    text-decoration: none;
    color: white;
    padding: 0 10px;
  }

  @media (max-width: 700px) {
    justify-content: center;
    /* grid-row-start: 2;
    grid-column-start: 1 / -1; */
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
      <HeaderContainer>
        <Logo alt="Clinger Pro Roofing Logo" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none', 
            }}
          >
            <img
              src={logo}
              alt="Clinger Pro Roofing Logo"
            />
          </Link>
        </Logo>
        <NavItems className="navItems" >
          <Link to="/">Home</Link>
          <Link to="/about/">About Us</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/gallery/">Gallery</Link>
        </NavItems>
      </HeaderContainer>
  </HeaderWrapper>
)

export default Header
