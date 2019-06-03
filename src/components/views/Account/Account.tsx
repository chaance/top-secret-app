import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Account: React.FC<RouteComponentProps> = () => {
  return (
    <div className="Account">
      <header className="Account__header">
        <h1>My Account</h1>
      </header>
    </div>
  );
};

export default Account;
