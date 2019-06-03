import React from 'react';
import { navigate } from '@reach/router';
// import cx from 'classnames';
import * as ROUTES from '../../routes';
import Firebase from '../../services/firebase';
import { PrimaryButton } from '../Button';
import { useFirebase } from '../../hooks';

const SignOutButton: React.FC<any> = ({
  label = 'Sign Out',
  redirectTo = ROUTES.LANDING,
  ...props
}) => {
  const firebase: Firebase = useFirebase();
  const handleClick = () => {
    firebase
      .signOut()
      .then(() => {
        navigate(redirectTo);
      })
      .catch(console.error);
  };
  return (
    <PrimaryButton type="button" onClick={handleClick} {...props}>
      {label}
    </PrimaryButton>
  );
};

export default SignOutButton;
