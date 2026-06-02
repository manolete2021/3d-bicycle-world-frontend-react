import { bicycleTypes } from '../data/bicycleTypes';

// CSS-only 3D carousel of bicycle images (infinite rotation).
function BicycleSlider3D() {
  const count = bicycleTypes.length;
  const angle = 360 / count;

  return (
    <div className="bw-slider-3d" aria-label="Bicycle categories 3D showcase">
      <div className="bw-slider-3d__stage">
        <div
          className="bw-slider-3d__ring"
          style={{
            '--slide-count': count,
            '--slide-angle': `${angle}deg`,
          }}
        >
          {bicycleTypes.map((bike, index) => (
            <figure
              key={bike.id}
              className="bw-slider-3d__slide"
              style={{ '--slide-index': index }}
            >
              <img src={bike.image} alt={bike.name} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BicycleSlider3D;
