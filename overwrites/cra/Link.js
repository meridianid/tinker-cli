import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ children, to, ...props }) => (
  <RouterLink to={to} {...props}>
    {children}
  </RouterLink>
);
