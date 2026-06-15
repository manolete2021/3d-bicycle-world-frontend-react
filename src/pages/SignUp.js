import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';
import { useAuthAlert } from '../context/AuthAlertContext';
import { signUp } from '../services/auth_services';

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

// Sign-up page styled to match the reference create-account design.
function SignUp() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { showAuthAlert } = useAuthAlert();
  const [name, setName] = useState('');
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
      const data = await signUp({ name, email, password });
      if (data?.user?.token) {
        login(data);
        showAuthAlert({
          variant: 'success',
          message: data.message || 'Account created successfully.',
        });
        navigate(ROUTES.home, { replace: true });
      } else {
        navigate(ROUTES.sign_in, { replace: true });
      }
    } catch (err) {
      const message = err.message || 'Sign up failed.';
      setError(message);
      showAuthAlert({ variant: 'danger', message });
      navigate(ROUTES.home, { replace: true });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bw-login-page">
      <Link to={ROUTES.home} className="bw-login-page__back" aria-label="Back to home">
        <BackHomeIcon />
      </Link>

      <div className="bw-login-page__center">
        <div className="bw-login-card">
          <header className="bw-login-card__header">
            <h1 className="bw-login-card__title">Create Account</h1>
            <p className="bw-login-card__subtitle">Create your new user profile.</p>
          </header>

          <form className="bw-login-form" onSubmit={handleSubmit}>
            <div className="bw-login-field">
              <label htmlFor="sign-up-name">Nombre</label>
              <input
                id="sign-up-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="bw-login-field">
              <label htmlFor="sign-up-email">Email</label>
              <input
                id="sign-up-email"
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
              <label htmlFor="sign-up-password">Password</label>
              <input
                id="sign-up-password"
                name="password"
                type="password"
                autoComplete="new-password"
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

            <button
              type="submit"
              className="bw-login-form__submit bw-login-form__submit--signup"
              disabled={loading}
            >
              {loading ? 'Signing up…' : 'Sign up'}
            </button>
          </form>

          <nav className="bw-login-card__links bw-login-card__links--pair" aria-label="Sign up help">
            <Link to={ROUTES.sign_in}>Back to login</Link>
            <Link to={ROUTES.home}>Back to home</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
