import React from 'react'
import { graphql } from 'gatsby'

const Post = ({data}) => {
  let blog = data.prismicBlogs.data
  console.log('DATA: ', blog)
  return (
    <main>
      <h1>{blog.title.text}</h1>
    </main>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogs(uid: { eq: $uid }) {
      id
      data {
        title {
          text
        }
        short_excerpt {
          text
        }
        keywords
        body {
          html
        }
      }
    }
  }
`
