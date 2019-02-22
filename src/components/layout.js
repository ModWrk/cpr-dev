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
  margin: 3rem auto;
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
            { name: 'keywords', content: 'roofing albuquerque,abq roofing contractors,shingles,roofers near me,roof replacement cost,roof replacement,roof repair near me,roof repair,metal roofing,roof shingles,gable roof,roofing companies near me,seamless gutters,hip roof,roofing materials,shingles on face,velux skylights,owens corning shingles,tpo roofing,zoster,rain gutters,standing seam metal roof,gaf shingles,certainteed shingles,abc roofing,architectural shingles,epdm roofing,rubber roofing,asphalt shingles,solar shingles,gambrel roof,slate roof,steel roofing,roll roofing,timberline shingles,roof leak repair,tamko shingles,flat roof,new roof cost,metal roofing lowes,corrugated roofing,tin roofing,commercial roofing,iko shingles,home depot gutters,home depot shingles,metal roofing near me,gaf timberline hd,corrugated metal roofing,mild shingles,lowes shingles,mcelroy metal,srs distribution,gutters near me,gaf roofing,lowes gutters,chimney flashing,home depot metal roofing,copper gutters,tamko,home depot roofing,gambrel,shingles on leg,seamless gutters near me,owens corning duration shingles,flat roof repair,atlas roofing,eternabond,baker roofing,copper roof,metal shingles,allied roofing,asphalt roof,corrugated plastic roofing,plastic roofing,aluminum roofing,gaf timberline shingles,centimark,atlas shingles,standing seam roof,bone dry roofing,gaco roof,home depot roofing shingles,elite roofing,roofing square,roof depot,mr roof,malarkey shingles,polycarbonate roof,certainteed roofing,shingles on back,advanced roofing,superior roofing,dormer roof,flat roof materials,lowes roofing,average cost to tear off and replace roof,petersen dean,shingles in adults,quality roofing,composition roof,gaf timberline,new roof,corrugated tin,timberline hd shingles,empire roofing,soffit repair,shingles on arm,shingles on scalp,roof gutter,owens corning duration,porch roof,pvc roofing,boral roofing,metal roof shingles,tecta america,residential roofing,roofers in my area,decra roofing,glass roof,asphalt roof shingles,shingles in mouth,home depot skylights,a1 roofing,local roofers,corrugated metal lowes,ab martin,roof patch,fibreglass roof,ondura roofing,dimensional shingles,cool roof,suntuf,duro last roofing,half round gutters,densdeck,house gutters,parapet roof,tamko heritage shingles,lowes roofing shingles,eagle roofing,firestone roofing,composition shingles,duro last,best roofing,box gutter,gutterstuff,malarkey roofing,home depot roofing materials,able roofing,galvalume roof,skylight replacement,carlisle roofing,decra,rainhandler,roof ridge,fabral,epdm rubber roofing,leaf relief,mueller roofing,sarnafil,crown roofing,bitumen roof,emergency roof repair,skyline roofing,iko cambridge shingles,aluminum gutters,rhino roofing,shingles on hands,roof skylight,vinyl gutters,tamko heritage,integrity roofing,rubber roofing material,dr roof,rain gutters home depot,zinc roof,collis roofing,galvanized roofing,average cost to replace a roof,metal roofing materials,retractable roof,tubular skylight,owens corning roofing,shingles on head,best roof shingles,shingles on buttocks,tremco roofing,royal roofing,reliable roofing,cedar shake roof,bundle of shingles,west end roofing,local roofing companies near me' },
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
        <Footer/>
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
