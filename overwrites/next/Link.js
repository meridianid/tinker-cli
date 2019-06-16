import React from 'react';
import NextLink from 'next/link';

const Link = ({ children, to, ...restProps }) => (
  <NextLink href={to}>
    <a {...restProps}>{children}</a>
  </NextLink>
);

export default Link