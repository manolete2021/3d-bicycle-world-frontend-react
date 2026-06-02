import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { menuItems, ROUTES } from '../config/routes';
import { useAuth } from '../context/AuthContext';
import { signOut } from '../services/auth_services';

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

const AUTH_KEYS = new Set(['sign_in', 'sign_up']);

function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = menuItems.filter((item) => !AUTH_KEYS.has(item.key));

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  async function handleSignOut() {
    setMenuOpen(false);

    try {
      if (user?.token) {
        await signOut({ token: user.token });
      }
    } catch {
      // Clear local session even if API sign-out fails.
    } finally {
      logout();
      navigate(ROUTES.home);
    }
  }

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
        </nav>

        <div className="bw-header__actions">
          {!isAuthenticated ? (
            <NavLink to={ROUTES.sign_in} className="bw-header__btn-outline">
              Log In
            </NavLink>
          ) : (
            user && (
              <div className="bw-header__profile-menu" ref={menuRef}>
                <button
                  type="button"
                  className={`bw-header__profile${
                    menuOpen ? ' bw-header__profile--open' : ''
                  }`}
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                  aria-label={`Account menu for ${user.user_name}`}
                >
                  <ProfileIcon />
                  <span className="bw-header__user-name">{user.user_name}</span>
                </button>
                {menuOpen && (
                  <div className="bw-header__dropdown" role="menu">
                    <NavLink
                      to={ROUTES.profile}
                      role="menuitem"
                      className={({ isActive }) =>
                        `bw-header__dropdown-item${
                          isActive ? ' bw-header__dropdown-item--active' : ''
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to={ROUTES.products}
                      role="menuitem"
                      className="bw-header__dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      Products
                    </NavLink>
                    <button
                      type="button"
                      role="menuitem"
                      className="bw-header__dropdown-item bw-header__dropdown-item--action"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
