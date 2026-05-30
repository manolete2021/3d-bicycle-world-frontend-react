import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';
import { signIn } from '../services/auth_services';

function SignIn() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
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
      navigate(ROUTES.home, { replace: true });
    } catch (err) {
      setError(err.message || 'Sign in failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLayout accent="#8a7a5c" accentGlow="rgba(138, 122, 92, 0.25)">
      <header className="bw-hero mb-10">
        <span className="bw-eyebrow">Account</span>
        <h1 className="bw-display bw-hero__title">Sign In</h1>
        <p className="bw-lead max-w-2xl mx-auto">
          Enter your email and password to access your 3D Bicycle World account.
        </p>
      </header>

      <div className="bw-auth-wrap">
        <form className="bw-form-panel bw-auth-form" onSubmit={handleSubmit}>
          <div className="bw-field">
            <label htmlFor="sign-in-email">Email</label>
            <input
              id="sign-in-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="bw-field">
            <label htmlFor="sign-in-password">Password</label>
            <input
              id="sign-in-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="bw-auth-message bw-auth-message--error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="bw-btn" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </PageLayout>
  );
}

export default SignIn;
