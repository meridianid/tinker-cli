import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, ...restPprops }) => (
  <GatsbyLink to={to} {...restPprops}>
    {children}
  </GatsbyLink>
);

export default Link