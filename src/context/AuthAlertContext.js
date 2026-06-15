import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const AuthAlertContext = createContext(null);

export function AuthAlertProvider({ children }) {
  const [alert, setAlert] = useState(null);

  const showAuthAlert = useCallback(({ variant, message }) => {
    setAlert({ variant, message });
  }, []);

  const clearAuthAlert = useCallback(() => {
    setAlert(null);
  }, []);

  const value = useMemo(
    () => ({
      alert,
      showAuthAlert,
      clearAuthAlert,
    }),
    [alert, showAuthAlert, clearAuthAlert]
  );

  return (
    <AuthAlertContext.Provider value={value}>{children}</AuthAlertContext.Provider>
  );
}

export function useAuthAlert() {
  const context = useContext(AuthAlertContext);
  if (!context) {
    throw new Error('useAuthAlert must be used within AuthAlertProvider');
  }
  return context;
}
