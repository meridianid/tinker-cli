import styles from './Default.module.scss'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Default.module.scss"
import './../../styles/invoker-layout/grid.module.scss'
import '../../assets/fonts/fonts'

import Navbar from "../../components/Navbar/Navbar"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main className={styles.root}>
        <Navbar bleed/>
        {children}
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
