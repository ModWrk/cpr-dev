import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import bg from '../images/bg.jpg'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 250px;
  grid-template-areas: 
  "sidebar-1 content ."
  "sidebar-1 content ."
  "footer footer footer"  
;
`



const Content = styled.div`
  grid-area: content;
`

const Layout = ({ children, location }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 250 : 500 }}
          to={{ height: location.pathname === '/' ? 500 : 250 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <img src={bg} alt="Background" />
            </div>
          )}
          
        </Spring>
        <MainLayout>
          <Content className="content">{children}</Content>
        </MainLayout>
        <Footer className="footer"/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
