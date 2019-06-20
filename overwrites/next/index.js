import React from 'react'
import Head from 'next/head'

import Default from '../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'

const HomePage = () => {
  return (
    <Default>
      <Head>
        <title>invoker-next</title>
      </Head>
      <Intro />
      <WhoWeAre />
      <Footer />
    </Default>
  )
}

export default HomePage