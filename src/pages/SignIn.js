import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthAlert from '../components/AuthAlert';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';
import { useAuthAlert } from '../context/AuthAlertContext';
import { signIn } from '../services/auth_services';

function BackHomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Sign-in page styled to match the reference login design.
function SignIn() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { showAuthAlert } = useAuthAlert();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (isAuthenticated) {
    return <Navigate to={ROUTES.home} replace />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await signIn({ email, password });
      login(data);
      showAuthAlert({
        variant: 'success',
        message: data.message || 'Signed in successfully.',
      });
      navigate(ROUTES.home, { replace: true });
    } catch (err) {
      const message = err.message || 'user or password is incorrect';
      setError(message);
      showAuthAlert({ variant: 'danger', message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bw-login-page">
      <AuthAlert />
      <Link to={ROUTES.home} className="bw-login-page__back" aria-label="Back to home">
        <BackHomeIcon />
      </Link>

      <div className="bw-login-page__center">
        <div className="bw-login-card">
          <header className="bw-login-card__header">
            <h1 className="bw-login-card__title">Welcome Back</h1>
            <p className="bw-login-card__subtitle">
              Log in to continue exploring 3D Bicycle World.
            </p>
          </header>

          <form className="bw-login-form" onSubmit={handleSubmit}>
            <div className="bw-login-field">
              <label htmlFor="sign-in-email">Email</label>
              <input
                id="sign-in-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="bw-login-field">
              <label htmlFor="sign-in-password">Password</label>
              <input
                id="sign-in-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="bw-login-form__error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="bw-login-form__submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Login'}
            </button>
          </form>

          <nav className="bw-login-card__links" aria-label="Login help">
            <Link to={ROUTES.forgot_password}>Forgot password?</Link>
            <Link to={ROUTES.sign_up}>Create account</Link>
            <Link to={ROUTES.home}>Back to home</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
