import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const InstagramPosts = ({ data }) => {
  // Проверяем, что данные доступны
  const posts = data?.allInstagramContent?.edges || []

  return (
    <div>
      <h2>Последние посты из Instagram</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.length > 0 ? (
          posts.map(({ node }) => (
            <div key={node.id} style={{ margin: "10px", maxWidth: "300px" }}>
              <a href={node.permalink} target="_blank" rel="noopener noreferrer">
                <Img fluid={node.localFile.childImageSharp.fluid} alt={node.caption} />
              </a>
              <p>{node.caption}</p>
            </div>
          ))
        ) : (
          <p>Загрузка постов...</p>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allInstagramContent {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          permalink
        }
      }
    }
  }
`

export default InstagramPosts
