import React from 'react';
import { RouteComponentProps } from '@reach/router';
import SignUpForm from '../../SignUpForm';

const SignUp: React.FC<RouteComponentProps> = () => {
  return (
    <div className="SignUp">
      <header className="SignUp__header">
        <h1>Sign Up</h1>
        <SignUpForm />
      </header>
    </div>
  );
};

export default SignUp;
