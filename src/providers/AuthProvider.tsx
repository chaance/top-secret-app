import { createContext, useContext } from 'react';
import { User } from 'firebase';

export const AuthContext = createContext<User | null>(null);

export const useCurrentUser = () => useContext(AuthContext);

export const AuthProvider = AuthContext.Provider;

export default AuthProvider;
