import PageLayout from '../components/PageLayout';
import BicycleCard from '../components/BicycleCard';
import { bicycleTypes } from '../data/bicycleTypes';

// Preselected bicycles to highlight on the About page.
const featured = [bicycleTypes[0], bicycleTypes[2], bicycleTypes[4]];

// About page with story content and featured bicycle cards.
function About() {
  return (
    <PageLayout>
      <header className="bw-hero bw-hero--page">
        <span className="bw-eyebrow">Our Story</span>
        <h1 className="bw-hero__title bw-hero__title--neon">About Us</h1>
        <p className="bw-lead bw-lead--center">
          Born from the obsession to unite three-dimensional design, real bicycle
          types, and a sleek neon aesthetic built for riders who love the road ahead.
        </p>
      </header>

      {/* Brand story and value points */}
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
            atmosphere: dark grounds, bold typography, and neon highlights that
            frame the passion for pedaling.
          </p>
          <p>
            Every 3D model and every image in the realm shares the same rule:
            deep contrast, one color in focus, and visual silence around it.
          </p>
        </div>
        <ul className="bw-values">
          <li>Precision in geometry and real-world proportion</li>
          <li>Neon palette with accents per discipline</li>
          <li>Immersive experience before the first pedal stroke</li>
          <li>Community of cyclists and 3D creators</li>
        </ul>
      </div>

      {/* Section with selected bicycle examples */}
      <section aria-labelledby="about-bikes-heading">
        <h2 id="about-bikes-heading" className="bw-section__title bw-section__title--spaced">
          Three Emblematic Lineages
        </h2>
        <div className="bw-grid">
          {/* Render compact cards for featured bicycles */}
          {featured.map((bike) => (
            <BicycleCard key={bike.id} bike={bike} compact />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default About;
