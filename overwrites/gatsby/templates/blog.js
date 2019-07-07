import React from 'react'
import cx from 'classnames'
import styles from './blog.module.scss'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';

import Default from './../layouts/Default/Default'
import Container from '../layouts/Container/Container';
import Footer from '../components/Footer/Footer';
import Text from '../components/Text/Text';
import linkResolver from './../utils/prismic/linkResolver'
import htmlSerializer from './../utils/prismic/htmlSerializer'

const Post = ({data}) => {
  let content = data.prismic
  return (
    <Default>
      <Container post component="section" className={cx(styles.content)}>
        <header className={styles.header}>
          <Text heading1 className={styles.heading1} component="h1">{content.blogs.title[0].text}</Text>
        </header>
        <main>
          <RichText htmlSerializer={htmlSerializer} render={content.blogs.body}></RichText>
        </main>
      </Container>
      <Footer />
    </Default>
  )
}

export default Post

export const pageQuery = graphql`
  query PostById($lang: String!, $uid: String!) {
    prismic {
      blogs(uid: $uid, lang: $lang) {
        _meta {
          id
          uid
        }
        title
        cover
        short_excerpt
        published_date
        keywords
        body
      }
    }
  }
`
