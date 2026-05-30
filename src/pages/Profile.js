import { Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.sign_in} replace />;
  }

  return (
    <PageLayout accent="#6b8cae" accentGlow="rgba(107, 140, 174, 0.28)">
      <header className="bw-hero">
        <span className="bw-eyebrow">Account</span>
        <h1 className="bw-display bw-hero__title">Profile</h1>
        <p className="bw-lead max-w-2xl mx-auto">
          Welcome back, {user.user_name}. Your session is active in the realm.
        </p>
      </header>
      <div className="bw-about-block">
        <div className="bw-prose">
          <p>
            <strong>Name:</strong> {user.user_name}
          </p>
          <p>
            <strong>Email:</strong> {user.user_email}
          </p>
          <p>
            <strong>User ID:</strong> {user.user_id}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Profile;
