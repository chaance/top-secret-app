import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Landing: React.FC<RouteComponentProps> = () => {
  return (
    <div className="Landing">
      <header className="Landing__header">
        <h1>Landing</h1>
      </header>
    </div>
  );
};

export default Landing;
