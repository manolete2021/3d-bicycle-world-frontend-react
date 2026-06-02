import PageLayout from '../components/PageLayout';
import { bicycleTypes, formatPriceAud } from '../data/bicycleTypes';

// Products page with full details and price for each bicycle.
function Products() {
  return (
    <PageLayout>
      <header className="bw-hero bw-hero--page">
        <span className="bw-eyebrow">Shop</span>
        <h1 className="bw-hero__title bw-hero__title--neon">Bicycles for Sale</h1>
        <p className="bw-lead bw-lead--center">
          Every model below will be available in the realm. Browse by name and
          type, read the full description, and see prices in Australian dollars.
        </p>
      </header>

      {/* List of products available in the catalog */}
      <section aria-labelledby="products-heading">
        <h2 id="products-heading" className="bw-section__title bw-section__title--spaced-lg">
          Available Lineages
        </h2>
        <ul className="bw-products">
          {/* Render each bicycle as a product item */}
          {bicycleTypes.map((bike) => (
            <li
              key={bike.id}
              className="bw-product"
              style={{
                '--product-accent': bike.accent,
                '--product-glow': bike.accentGlow,
              }}
            >
              {/* Product image and status badge */}
              <div className="bw-product__media">
                <img
                  src={bike.image}
                  alt={`${bike.name} bicycle`}
                  className="bw-product__image"
                  loading="lazy"
                />
                <span className="bw-product__badge">For sale</span>
              </div>
              {/* Product text information and formatted price */}
              <div className="bw-product__info">
                <h3 className="bw-product__name">{bike.name}</h3>
                <p className="bw-product__type">
                  <span className="bw-product__type-label">Type</span>
                  {bike.label}
                </p>
                <p className="bw-product__tagline">{bike.tagline}</p>
                <p className="bw-product__desc">{bike.description}</p>
                <p className="bw-product__price">
                  <span className="bw-product__price-label">Price</span>
                  {formatPriceAud(bike.priceAud)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}

export default Products;
