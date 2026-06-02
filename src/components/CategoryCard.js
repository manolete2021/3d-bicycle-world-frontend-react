import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

// Minimal category tile linking to the products catalog.
function CategoryCard({ bike }) {
  return (
    <Link to={ROUTES.products} className="bw-category-card">
      <span className="bw-category-card__name">{bike.name}</span>
    </Link>
  );
}

export default CategoryCard;
