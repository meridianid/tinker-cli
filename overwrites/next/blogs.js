import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import Blogs from '../components/Blogs/Blogs'

const BlogsPage = ({
  className,
  ...restProps
  }) => {
  return (
    <Default>
      <Intro text="Blogs Page"/>
      <Blogs />
      <Footer />
    </Default>
  )
}

export default BlogsPage
