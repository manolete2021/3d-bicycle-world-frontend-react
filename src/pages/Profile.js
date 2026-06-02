import { Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';

// Profile page for logged-in user information.
function Profile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Protect this route: send guests to sign-in page.
    return <Navigate to={ROUTES.sign_in} replace />;
  }

  return (
    <PageLayout>
      <header className="bw-hero bw-hero--page">
        <span className="bw-eyebrow">Account</span>
        <h1 className="bw-hero__title bw-hero__title--neon">Profile</h1>
        <p className="bw-lead bw-lead--center">
          Welcome back, {user.user_name}. Your session is active.
        </p>
      </header>
      {/* Basic account details */}
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
