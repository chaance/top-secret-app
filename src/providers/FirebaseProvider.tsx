import { createContext, useContext } from 'react';
import Firebase from '../services/firebase';
import React from 'react';

export const FirebaseContext = createContext((null as unknown) as Firebase);

export const FirebaseProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const firebase: Firebase = useContext(FirebaseContext);
  if (!firebase) {
    throw new Error(
      'You probably forgot to use <FirebaseContext.Provider> before seeking its value.'
    );
  }
  return firebase;
};

export const useFirebaseAuth = () => {
  const firebase: Firebase = useContext(FirebaseContext);
  if (!firebase || !firebase.auth) {
    throw new Error(
      'You probably forgot to use <FirebaseContext.Provider> before seeking its value.'
    );
  }
  return firebase.auth;
};

export default FirebaseProvider;
