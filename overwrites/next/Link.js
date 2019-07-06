import React from 'react';
import NextLink from 'next/link';

const Link = ({ children, external, to, ...restPprops }) => external
  ? <a href={to} {...restPprops}>
      {children}
    </a>
  : <NextLink to={to} {...restPprops}>
      {children}
    </NextLink>

export default Link