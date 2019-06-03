import React from 'react';
import { RouteComponentProps } from '@reach/router';

const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <div className="NotFound">
      <header className="NotFound__header">
        <h1>404: Page Not Found</h1>
      </header>
    </div>
  );
};

export default NotFound;
