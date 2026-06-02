import { createContext, useContext, useMemo, useState } from 'react';
import {
  clearAuthSession,
  getAuthSession,
  saveAuthSession,
} from '../services/auth_storage';

// Shared auth context for user session state.
const AuthContext = createContext(null);

// Provider that exposes auth state and auth actions.
export function AuthProvider({ children }) {
  // Initialize user from local storage when app starts.
  const [user, setUser] = useState(() => getAuthSession());

  // Memoized auth API to avoid unnecessary re-renders.
  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user?.token),
      // Save user from API response and update context state.
      login(response) {
        const sessionUser = response?.user;
        if (!sessionUser?.token) {
          throw new Error('Invalid sign-in response.');
        }
        saveAuthSession(sessionUser);
        setUser(sessionUser);
      },
      // Clear persisted session and reset user state.
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
  // Custom hook to safely consume AuthContext.
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
