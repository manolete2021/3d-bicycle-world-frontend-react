import { formatPriceAud } from '../data/bicycleTypes';

// Card to present one bicycle with image, text, and optional compact mode.
function BicycleCard({ bike, compact = false }) {
  return (
    <article
      className={`bw-card${compact ? ' bw-card--compact' : ''}`}
      style={{
        '--card-accent': bike.accent,
        '--card-glow': bike.accentGlow,
      }}
    >
      <div className="bw-card__frame">
        {/* Bicycle image area */}
        <div className="bw-card__image-wrap">
          <img
            src={bike.image}
            alt={`${bike.name} bicycle`}
            className="bw-card__image"
            loading="lazy"
          />
          <div className="bw-card__overlay" aria-hidden="true" />
        </div>
        {/* Bicycle text and accent details */}
        <div className="bw-card__body">
          <span className="bw-card__eyebrow">{bike.tagline}</span>
          <h3 className="bw-card__title">{bike.name}</h3>
          {typeof bike.priceAud === 'number' && (
            <p className="bw-card__price">{formatPriceAud(bike.priceAud)}</p>
          )}
          {!compact && <p className="bw-card__desc">{bike.description}</p>}
          <span
            className="bw-card__swatch"
            aria-label={`Accent color for ${bike.name}`}
          />
        </div>
      </div>
    </article>
  );
}

export default BicycleCard;
