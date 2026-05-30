import PageLayout from '../components/PageLayout';
import BicycleCard from '../components/BicycleCard';
import { bicycleTypes } from '../data/bicycleTypes';

const featured = [bicycleTypes[0], bicycleTypes[2], bicycleTypes[4]];

function About() {
  return (
    <PageLayout accent="#8a3d5c" accentGlow="rgba(138, 61, 92, 0.25)">
      <header className="bw-hero mb-10">
        <span className="bw-eyebrow">Our Story</span>
        <h1 className="bw-display bw-hero__title">Chronicle of the Pedal</h1>
        <p className="bw-lead max-w-2xl mx-auto">
          Born from the obsession to unite three-dimensional design, real bicycle
          types, and an aesthetic that honors the gothic without losing chromatic
          harmony.
        </p>
      </header>

      <div className="bw-about-block">
        <div className="bw-prose">
          <p>
            <strong>3D Bicycle World</strong> is a digital sanctuary where each
            category — road, mountain, gravel, BMX, electric, and commuter —
            receives its own chromatic accent, like stained glass in a separate
            nave.
          </p>
          <p>
            We believe choosing a bicycle is choosing a path: speed, adventure,
            city, or acrobatics. Our visual catalog translates that choice into
            atmosphere: dark grounds, capital typography, and gilded borders that
            frame the passion for pedaling.
          </p>
          <p>
            Every 3D model and every image in the realm shares the same rule:
            deep contrast, one color in focus, and visual silence around it.
          </p>
        </div>
        <ul className="bw-values">
          <li>Precision in geometry and real-world proportion</li>
          <li>Gothic palette with accents per discipline</li>
          <li>Immersive experience before the first pedal stroke</li>
          <li>Community of cyclists and 3D creators</li>
        </ul>
      </div>

      <section aria-labelledby="about-bikes-heading">
        <h2 id="about-bikes-heading" className="bw-display bw-section__title mb-6">
          Three Emblematic Lineages
        </h2>
        <div className="bw-grid">
          {featured.map((bike) => (
            <BicycleCard key={bike.id} bike={bike} compact />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default About;
