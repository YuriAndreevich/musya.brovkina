import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function index() {
  return (
    <div>musya.brovkina
          <StaticImage
            src='../../images/mainPaige.jpg'
            alt='topic image'
            placeholder="blurred"  
            layout="constrained"   
          />
    </div>
  )
}

export default index