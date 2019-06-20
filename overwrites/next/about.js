import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'

const HomePage = ({
  className,
  ...restProps
  }) => {
  return (
    <Default>
      <Intro text="About Page"/>
      <WhoWeAre />
      <Footer />
    </Default>
  )
}

export default HomePage
