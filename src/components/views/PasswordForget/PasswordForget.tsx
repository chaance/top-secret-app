import React from 'react';
import { RouteComponentProps } from '@reach/router';

const PasswordForget: React.FC<RouteComponentProps> = () => {
  return (
    <div className="PasswordForget">
      <header className="PasswordForget__header">
        <h1>Forgot Password?</h1>
      </header>
    </div>
  );
};

export default PasswordForget;
