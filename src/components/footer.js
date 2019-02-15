import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    background: #253975;
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 4fr 6fr;
    grid-template-rows: 80px;
`


const Footer = () => (
    <FooterWrapper>
        <div>left</div>
        <div>
            <p>website by<Link to="www.modwrk.com">ModWrk</Link></p>
        </div>
        <div>right</div>
    </FooterWrapper>
)

export default Footer