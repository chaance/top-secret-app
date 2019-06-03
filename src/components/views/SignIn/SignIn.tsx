import React from 'react';
import { RouteComponentProps } from '@reach/router';
import SignInForm from '../../SignInForm';

const SignIn: React.FC<RouteComponentProps> = () => {
  return (
    <div className="SignIn">
      <header className="SignIn__header">
        <h1>Sign In</h1>
        <SignInForm />
      </header>
    </div>
  );
};

export default SignIn;
