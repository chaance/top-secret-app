import React, { useEffect, useState, useRef } from 'react';
import { Router } from '@reach/router';

// Local imports
import * as ROUTES from '../../routes';
import { useFirebaseAuth } from '../../providers/FirebaseProvider';
import { ThemeProvider, AuthProvider } from '../../providers';

// Local components
import TopNav from '../TopNav';
import RouteProtected from '../RouteProtected';

// Pages
import Home from '../views/Home';
import Landing from '../views/Landing';
import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';
import PasswordForget from '../views/PasswordForget';
import Account from '../views/Account';
import Admin from '../views/Admin';
import NotFound from '../views/NotFound';

// Styles
import { User } from 'firebase';

const App: React.FC = () => {
  // Get logged in user info
  const localAuthUser = sessionStorage.getItem('authUser');
  const prevAuthUser = localAuthUser
    ? (JSON.parse(localAuthUser) as User)
    : null;
  const firebase = useFirebaseAuth();
  const [authUser, setAuthUser] = useState(prevAuthUser);
  const listenerRef: any = useRef();
  useEffect(() => {
    const listener = firebase.onAuthStateChanged(
      (user): void => {
        if (user) {
          sessionStorage.setItem('authUser', JSON.stringify(user));
          setAuthUser(user);
        } else {
          sessionStorage.removeItem('authUser');
          setAuthUser(null);
        }
      }
    );
    listenerRef.current = listener;
    return () => listenerRef.current && listenerRef.current();
  }, []); // eslint-disable-line

  process.env.NODE_ENV === 'development' && console.log(authUser);

  return (
    <ThemeProvider>
      <AuthProvider value={authUser}>
        <div className="App">
          <TopNav />
          <hr />
          <Router>
            <NotFound default />
            <Landing path={ROUTES.LANDING} />
            <RouteProtected component={Home} path={ROUTES.HOME} />
            <SignUp path={ROUTES.SIGN_UP} />
            <SignIn path={ROUTES.SIGN_IN} />
            <PasswordForget path={ROUTES.PASSWORD_FORGET} />
            <RouteProtected component={Account} path={ROUTES.ACCOUNT} />
            <RouteProtected component={Admin} path={ROUTES.ADMIN} />
          </Router>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
