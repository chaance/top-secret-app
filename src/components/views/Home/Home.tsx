import React from 'react';
import { RouteComponentProps } from '@reach/router';
import SignOutButton from '../../SignOutButton';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div className="Home">
      <header className="Home__header">
        <h1>Home</h1>
        <SignOutButton />
      </header>
    </div>
  );
};

export default Home;
