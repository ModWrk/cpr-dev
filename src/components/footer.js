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

const Plug = styled.div`
    grid-column: 3 / -1;
    margin: auto;

    p {
      color: white;
      margin: auto;
      float: right;
    }
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
            <Link to="/gallery/">Gallery</Link>
            <Link to="/blog/">Blog</Link>
            <Link to="/services/">Services</Link>
            <Link to="/about/">About Us</Link>
            <Link to="/">Home</Link>
        </NavItems>
        <Plug>
            <p>website by<a href="https://www.modwrk.com">ModWrk</a></p>
        </Plug>
    </FooterWrapper>
)

export default Footer