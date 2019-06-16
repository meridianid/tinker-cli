import React from 'react'
import Link from './../Link/Link'
import { withRouter } from 'next/router'
import cx from 'classnames'

const NavLink = ({
  router,
  className,
  activeClassName,
  children,
  to = '#',
  ...restProps
}) => {

  let regex = new RegExp(`^\\${to}((\\?|\\/).*)?$`)

  return (
    <Link
      to={to}
      className={cx({
        [className]: true,
        [activeClassName]: router.asPath.match(regex)
      })}
      {...restProps}>
      {children}
    </Link>
  );
}

export default withRouter(NavLink);