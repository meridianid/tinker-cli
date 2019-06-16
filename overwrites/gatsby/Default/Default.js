import styles from './Default.module.scss'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Default.module.scss"
import './../../sass/invoker-layout/grid.module.scss'
import '../../assets/fonts/fonts'

import Navbar from "../../components/Navbar/Navbar"
import ActionBar from "../../components/ActionBar/ActionBar"
import ActionMenu from "../../components/ActionMenu/ActionMenu"

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
        <ActionBar >
          <ActionMenu to="/">Home</ActionMenu>
        </ActionBar>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
