import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: rgba( 0, 0, 0, .0);
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
  grid-template-columns: 3fr 4fr 3fr;
  grid-template-rows: 100px 100px;
  grid-template-areas:
  "logo . navItems"
  ". cta ."
  ;
`
const NavItems = styled.div`
  margin: auto 0;
  grid-column: 3 / -1;
  a {
    text-decoration: none;
    color: white;
    padding: 0 10px;
    float: right;
  }
`
const Action = styled.div`
  grid-area: cta;
  height: 4rem;
  margin: 1rem auto;
  padding: 1rem;
  border: .25rem solid white;
  border-radius: 1.5rem;
  background: #253975;
  a {
    color: white;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-decoration: none;

  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer className="logo">
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
      <Action className="cta"><a href="tel:+15058650605">Call Today!</a></Action>
      <NavItems className="navItems" >
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
