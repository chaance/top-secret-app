import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Admin: React.FC<RouteComponentProps> = () => {
  return (
    <div className="Admin">
      <header className="Admin__header">
        <h1>Admin</h1>
      </header>
    </div>
  );
};

export default Admin;
