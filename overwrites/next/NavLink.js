import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import cx from 'classnames'

const NavLink = ({
  router,
  activeClassName,
  children,
  href = '#',
  ...restProps
}) => {

  let regex = new RegExp(`^\\${href}((\\?|\\/).*)?$`)

  return (
    <Link
      {...restProps}
      href={href}>
      {React.cloneElement(children, {
        className: cx({
          [children.props.className]: true,
          [activeClassName]: router.asPath.match(regex)
        })
      })}
    </Link>
  );
}

export default withRouter(NavLink);