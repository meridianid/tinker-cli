import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, external, to, ...restPprops }) => external
  ? <a href={to} {...restPprops}>
      {children}
    </a>
  : <GatsbyLink to={to} {...restPprops}>
      {children}
    </GatsbyLink>

export default Link