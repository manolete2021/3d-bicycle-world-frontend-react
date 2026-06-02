import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';

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

// Password recovery page (UI ready for future API integration).
function ForgotPassword() {
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (isAuthenticated) {
    return <Navigate to={ROUTES.home} replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bw-login-page">
      <Link to={ROUTES.home} className="bw-login-page__back" aria-label="Back to home">
        <BackHomeIcon />
      </Link>

      <div className="bw-login-page__center">
        <div className="bw-login-card">
          <header className="bw-login-card__header">
            <h1 className="bw-login-card__title">Reset Password</h1>
            <p className="bw-login-card__subtitle">
              Enter your email and we&apos;ll send you recovery instructions.
            </p>
          </header>

          {submitted ? (
            <p className="bw-login-form__success" role="status">
              If an account exists for {email}, you will receive an email shortly.
            </p>
          ) : (
            <form className="bw-login-form" onSubmit={handleSubmit}>
              <div className="bw-login-field">
                <label htmlFor="forgot-email">Email</label>
                <input
                  id="forgot-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="bw-login-form__submit">
                Send reset link
              </button>
            </form>
          )}

          <nav className="bw-login-card__links" aria-label="Password recovery help">
            <Link to={ROUTES.sign_in}>Back to login</Link>
            <Link to={ROUTES.sign_up}>Create account</Link>
            <Link to={ROUTES.home}>Back to home</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
