import React from 'react'
import Head from 'next/head'

import Default from '../layouts/Default/Default'
import Text from '../components/Text/Text'

const HomePage = () => {
  return (
    <Default>
      <Head>
        <title>invoker-next</title>
      </Head>
      <Text display3>Welcome to invoker-next!</Text>
    </Default>
  )
}

export default HomePage