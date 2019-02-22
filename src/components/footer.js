import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    background: #253975;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-areas:
    "NavItems Address Plug";
`
const NavItems = styled.div`
  margin: auto;
  grid-column: 1 / 2;
  a {
    text-decoration: none;
    font-size: .75rem;
    color: white;
    padding: 0 5px;
  }
`

const Address = styled.div`
  text-align: center;
  margin: auto;
  grid-area: Address;
  font-size: .75rem;
  color: white;
  justify-self: center;
  align-self: center;

  
`

const Plug = styled.div`
    grid-column: 3 / -1;
    margin: auto;
    justify-self: center;
    align-self: center;
    color: white;
    font-size: .75rem;
    a {
    text-decoration: none;
    font-size: .75rem;
    color: white;
    padding: 0 5px;
  }
`


const Footer = () => (
    <FooterWrapper>
        <NavItems>
            <Link to="/">Home</Link>
            <Link to="/about/">About Us</Link>
            <Link to="/services/">Services</Link>
        </NavItems>
        <Address>&copy;&nbsp;2019 All rights reserved.</Address>
        <Plug>website by<a href="https://www.modwrk.com">ModWrk</a></Plug>
    </FooterWrapper>
)

export default Footer