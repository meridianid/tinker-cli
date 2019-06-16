import React from 'react'

import Text from '../components/Text/Text'
import Default from './../layouts/Default/Default'

const HomePage = ({
  className,
  ...restProps
  }) => {
  return (
    <Default>
      <Text display3>Homepage</Text>
    </Default>
  )
}

export default HomePage