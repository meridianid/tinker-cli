import styles from './Default.module.scss'
import React from "react"
import PropTypes from "prop-types"

import "./Default.module.scss"
import '../../assets/fonts/fonts'

/**
 * Uncomment below lines if you want to use legacy grid and column using Bootstrap grid
 */
// import './../../styles/invoker-layout/grid.module.scss'

import Navbar from "../../components/Navbar/Navbar"

const Layout = ({ children }) => (
  <main className={styles.root}>
    <Navbar bleed />
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
