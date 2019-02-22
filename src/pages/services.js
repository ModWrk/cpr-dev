import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const ServicesWrapper = styled.div`
  width: 100%;
  margin: 0 auto 75px auto;
  
`

const Services = () => (
  <Layout>
    <ServicesWrapper>
        <h1>Services</h1>
        <p>
        Clinger Pro Roofing specializes in installing flat, metal, and shingle roofs. We also offer a variety of services such as roof repair, seamless gutters, and new construction including: porches, decks, patio covers, steel carports, and even additions!
        </p>
        <h2>Products</h2>
        <p>Clinger Pro Roofing only uses the highest quality materials so our customers have peace of mind that they are going to get a reliable, long lasting product. Our manufacturers include Owens Corning, GAF, and Metal Center.
        </p>
        <h2>Flat Roofs</h2>
        <p>Clinger Pro Roofing uses GAF TPO membrane materials on flat roofs. This comes in 45mil and 60mil thick in either white or tan with specialty colors available upon request.
        </p>
        <h2>Metal Roofs</h2>
        <p>Clinger Pro Roofing uses mainly a Desert Rib. We can also order a variety of styles of panels to include R-Panel, U-Panel, and even Stand and Seam with hidden fasteners. Our Desert Rib and R-Panel are manufactured in house in Albuquerque and are available to pick up within 24 hours!
        </p>
        <h2>Shingle Roofs</h2>
        <p>Clinger Pro Roofing uses Owens Corning dimensional and duration shingles with wind resistances from 110mph to 130mph as well as a 50 year shingle that is slightly thicker. All of our shingles come in a variety of different color options to fit your preference!</p>
    </ServicesWrapper>
  </Layout>
)

export default Services
