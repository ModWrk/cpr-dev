import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import Action from './action'
import './layout.css'

import bg from '../images/bg.jpg'

const BigBackground = styled.section`
  background: white url(${bg});
  background-size: cover;
  background-position: top center;
  width: 100%;
  height: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 100px 250px 125px ;
  grid-template-areas:
  ". . ."
  ". action ."
  ". . .";
  * {
    grid-area: action;
    align-self: end;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 100px 100px;
    grid-template-areas:
    "..."
    "action"
    "...";

  }
`

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 250px;
  grid-template-areas: 
  ". content ."
  "footer footer footer";

  @media (max-width: 700px) {
    grid-gap: 10px;
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  grid-area: content;

`

const Layout = ({ location, children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header className="hero" siteTitle={data.site.siteMetadata.title}>
        </Header>
        <BigBackground>
          <Action />
        </BigBackground>
        <MainLayout>
          <Content className="content">
            <div>{children}</div>
          </Content>
        </MainLayout>
        <Footer className="footer"/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node
}

Layout.defaultProps = {
  location: {},
}

export default Layout
