import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as s from './Topic.module.scss'
import InfinityMarquee from '../InfiniteMarquee'

function Index() {
  return (
    <div className={s.container}>
<InfinityMarquee classname={s.infinity__marquee}/>
      <StaticImage
        src="../../images/mainPaige.jpg"
        alt="topic image"
        placeholder="blurred"
        layout="constrained"
        className={s.image}
      />
      <h1 className={s.title}>Бровист г.Новополоцк</h1>
    </div>
  )
}

export default Index
