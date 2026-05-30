import { NavLink } from 'react-router-dom';
import { menuItems, ROUTES } from '../config/routes';

function Header() {
  return (
    <header className="bw-header">
      <div className="bw-header__inner">
        <NavLink to={ROUTES.home} className="bw-header__brand">
          3D Bicycle World
        </NavLink>
        <nav className="bw-header__nav" aria-label="Principal">
          {menuItems.map((item) => (
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
      </div>
    </header>
  );
}

export default Header;
