// import styles from './Default.scss'
import React from 'react'
// import cx from 'classnames'

import Navbar from '../Navbar/Navbar'

const Default = ({
  className,
  children,
  ...restProps
  }) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Default;