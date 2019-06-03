import React from 'react';
import { Link } from '@reach/router';
import { ThemeProps } from '../shared/theme';

export interface WrappedLinkProps {
  target?: string;
  href?: string;
  to?: string;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  rel?: string;
  buttonSize?: string;
  theme: ThemeProps;
}

export default (Component: any, props: WrappedLinkProps) => {
  const {
    href,
    to,
    target,
    children,
    disabled,
    isLoading,
    rel,
    buttonSize,
    ...rest
  } = props;
  const button = (
    <Component
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...rest}
    >
      {children}
    </Component>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target || undefined}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...rest}
      >
        {button}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} {...rest}>
        {button}
      </Link>
    );
  }
  return button;
};
