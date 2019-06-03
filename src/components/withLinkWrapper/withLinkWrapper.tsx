import React from 'react';
import { Link } from '@reach/router';
import { WrappedLinkProps } from './index';

const withLinkWrapper = (Component: any, props: WrappedLinkProps) => {
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

export default withLinkWrapper;
