import PageLayout from '../components/PageLayout';
import { bicycleTypes, formatPriceAud } from '../data/bicycleTypes';

function Products() {
  return (
    <PageLayout accent="#6b8cae" accentGlow="rgba(107, 140, 174, 0.28)">
      <header className="bw-hero">
        <span className="bw-eyebrow">Shop</span>
        <h1 className="bw-display bw-hero__title">Bicycles for Sale</h1>
        <p className="bw-lead max-w-2xl mx-auto">
          Every model below will be available in the realm. Browse by name and
          type, read the full description, and see prices in Australian dollars.
        </p>
      </header>

      <section aria-labelledby="products-heading">
        <h2 id="products-heading" className="bw-display bw-section__title mb-8">
          Available Lineages
        </h2>
        <ul className="bw-products">
          {bicycleTypes.map((bike) => (
            <li
              key={bike.id}
              className="bw-product"
              style={{
                '--product-accent': bike.accent,
                '--product-glow': bike.accentGlow,
              }}
            >
              <div className="bw-product__media">
                <img
                  src={bike.image}
                  alt={`${bike.name} bicycle`}
                  className="bw-product__image"
                  loading="lazy"
                />
                <span className="bw-product__badge">For sale</span>
              </div>
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
