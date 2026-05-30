import { NavLink } from 'react-router-dom';
import { menuItems, ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';

function ProfileIcon() {
  return (
    <svg
      className="bw-header__profile-icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
    </svg>
  );
}

function Header() {
  const { user, isAuthenticated } = useAuth();

  const navItems = menuItems.filter(
    (item) => !(isAuthenticated && item.key === 'sign_in')
  );

  return (
    <header className="bw-header">
      <div className="bw-header__inner">
        <NavLink to={ROUTES.home} className="bw-header__brand">
          3D Bicycle World
        </NavLink>
        <nav className="bw-header__nav" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.key || item.name}
              to={item.path}
              className={({ isActive }) =>
                `bw-header__link${isActive ? ' bw-header__link--active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          {isAuthenticated && user && (
            <NavLink
              to={ROUTES.profile}
              className={({ isActive }) =>
                `bw-header__profile${isActive ? ' bw-header__profile--active' : ''}`
              }
              aria-label={`Profile of ${user.user_name}`}
            >
              <ProfileIcon />
              <span className="bw-header__user-name">{user.user_name}</span>
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
