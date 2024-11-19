
import React from 'react'
import "../styles/imageani.scss"
import { Link } from 'react-router-dom'

const ImageAni = () => {
  return (
    <div className= "imageani-main">
        <div className='imageani-heading'>
            <h2>MADE BY ORGANIC HEALTH, CREATED WITH LOVE</h2>
        </div>

        <div className='imageani-para'>
            <p> Organic Health specializes in crafting premium medicinal extracts and plant-based powders to promote natural healing and wellness. Our products are carefully sourced and processed to preserve their therapeutic benefits. With a focus on sustainability, we aim to bring nature’s remedies to your doorstep.
          </p>
        </div>

        <div className='imageani-explore'>
          <Link to = "/screensix">
            <button>Explore</button>
            </Link>
        </div>
      
    </div>
  )
}

export default ImageAni
