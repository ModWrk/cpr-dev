import React from 'react'
import styled from 'styled-components'


const ActionWrapper = styled.div`
    margin: 0 auto;
`

const ActionContainer = styled.div`
    margin: 0 auto;
`

const CallTo = styled.div`
    text-align: center;
    width: 40%;
    height: 4rem;
    margin: 1rem auto;
    padding: 1rem;
    border: .25rem solid white;
    border-radius: 1.5rem;
    background: #253975;
    a {
        color: white;
        margin: 1rem auto;
        text-decoration: none;
        }

    @media (max-width: 700px) {
        width: 50%;
    }
`
const ByLine = styled.h2`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    color: white;
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    @media (max-width: 700px) {
        margin: 1rem auto;
        font-size: 1rem;
    }
`

const Hero = styled.h1`
    width: 100%;
    text-align: center;
    margin: 1rem auto;
    color: white;
    font-size: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    @media (max-width: 700px) {
        margin: 0 auto;
        font-size: 2rem;
    }
`


const Action = () => (
    <ActionWrapper>
        <ActionContainer>
            <Hero>A Roofer You Can Trust</Hero>
            <ByLine>Call today for your FREE estimate.</ByLine>
            <CallTo>
                <a href="tel:+15058650605">(505) 865-0605</a>
            </CallTo>            
        </ActionContainer>
    </ActionWrapper>
)



export default Action


