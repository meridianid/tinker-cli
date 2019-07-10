import React from 'react';
import NextLink from 'next/link';

const Link = ({ children, external, to, ...restPprops }) => external
  ? <a href={to} {...restPprops}>
      {children}
    </a>
  : <NextLink href={to}>
      <a {...restPprops}>
        {children}
      </a>
    </NextLink>

export default Link