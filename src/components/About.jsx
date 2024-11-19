import React from 'react'
import AnimatedServices from './AnimateServices'
import ScrollPower from './ScrollPower'
import "../styles/about.scss"
import "../styles/scrollpower.scss"
import RevealOnScroll from './RevealOnScroll'


const About = () => {
  return (
    <div className='about-main'>
      <div className='about-one'>
      <div className='about-logo'>
         <span>❉</span>
      </div>

      <div className='about-menu'>
        <ul>
          <li>Pure Plant Extracts</li>
          <li>Custom Formulations</li>
          <li>Organic and Safe</li>
          <li>Expert-Led Consultancy</li>
          <li>Eco-Friendly Packaging</li>
        </ul>
      </div>

      <div className='about-reach'>
          <ul>
            <li>TESTIMONIALS</li>
            <li>ABOUT US</li>
            <li>REACH OUT</li>
          </ul>
      </div>
      </div>
       <div className='about-two'>
        <AnimatedServices />
       </div>

       <div className='about-three'>
        <ScrollPower />
       </div>

       

      
    </div>
  )
}

export default About
