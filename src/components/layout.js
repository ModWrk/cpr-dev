import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Archive from './archive'
import bg from '../images/bg.jpg'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
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
          from={{ height: location.pathname === '/' ? 250 : 400 }}
          to={{ height: location.pathname === '/' ? 400 : 250 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <img src={bg} alt="Background" />
            </div>
          )}
        </Spring>
        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
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
