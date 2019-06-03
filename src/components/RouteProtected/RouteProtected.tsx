import React from 'react';
import { Redirect } from '@reach/router';
import * as ROUTES from '../../routes';
import { useCurrentUser } from '../../hooks';

interface RouteProtectedProps {
  component: React.ElementType<any>;
  [key: string]: any;
}

const RouteProtected: React.FC<RouteProtectedProps> = ({
  component: Component,
  ...rest
}) => {
  const authUser = useCurrentUser();
  return authUser ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to={ROUTES.LANDING} noThrow />
  );
};

export default RouteProtected;
