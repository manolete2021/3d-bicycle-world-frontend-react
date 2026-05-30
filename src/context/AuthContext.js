import { createContext, useContext, useMemo, useState } from 'react';
import {
  clearAuthSession,
  getAuthSession,
  saveAuthSession,
} from '../services/auth_storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getAuthSession());

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user?.token),
      login(response) {
        const sessionUser = response?.user;
        if (!sessionUser?.token) {
          throw new Error('Invalid sign-in response.');
        }
        saveAuthSession(sessionUser);
        setUser(sessionUser);
      },
      logout() {
        clearAuthSession();
        setUser(null);
      },
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
