import React from 'react';
import NextLink from 'next/link';

export const Link = ({ children, to, ...restProps }) => (
  <NextLink href={to}>
    <a {...restProps}>{children}</a>
  </NextLink>
);
