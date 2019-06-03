import app from 'firebase/app';
import { UserCredential } from '@firebase/auth-types';
import 'firebase/auth';
import 'firebase/database';
import * as config from '../../lib/config';

interface Credentials {
  email: string;
  password: string;
  [key: string]: any;
  [key: number]: any;
}

class Firebase {
  auth: firebase.auth.Auth;

  constructor() {
    app.initializeApp(config.firebase);
    this.auth = app.auth();
  }

  // Auth API
  createUser = ({
    email,
    password,
    ...rest
  }: Credentials): Promise<UserCredential> =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = ({
    email,
    password,
    ...rest
  }: Credentials): Promise<UserCredential> =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = (): Promise<void> => this.auth.signOut();

  resetPassword = ({ email, ...rest }: Credentials): Promise<void> =>
    this.auth.sendPasswordResetEmail(email);

  updatePassword = ({ password, ...rest }: Credentials): Promise<void> => {
    if (this.auth.currentUser) {
      return this.auth.currentUser.updatePassword(password);
    }
    return new Promise((resolve, reject) => {
      reject(new Error('Current user not found.'));
    });
  };

  currentUser = () => this.auth.currentUser;
}

export default Firebase;
