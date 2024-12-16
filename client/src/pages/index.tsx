import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import YandexMap from '../components/YandexMap'



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
       <YandexMap />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
