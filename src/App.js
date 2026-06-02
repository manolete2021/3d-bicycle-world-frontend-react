import { BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ROUTES } from './config/routes';
import AppRoutes from './routes/appRoutes';
import Header from './components/Header';

const AUTH_ONLY_PATHS = new Set([
  ROUTES.sign_in,
  ROUTES.sign_up,
  ROUTES.forgot_password,
  ROUTES.login,
]);

function AppShell() {
  const { pathname } = useLocation();
  const showHeader = !AUTH_ONLY_PATHS.has(pathname);

  return (
    <>
      {showHeader && <Header />}
      <AppRoutes />
    </>
  );
}

// Main app container with router, auth provider, and route views.
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
