import PageLayout from '../components/PageLayout';
import BicycleCard from '../components/BicycleCard';
import { bicycleTypes } from '../data/bicycleTypes';

function Home() {
  return (
    <PageLayout accent="#c9a227" accentGlow="rgba(201, 162, 39, 0.2)">
      <header className="bw-hero">
        <span className="bw-eyebrow">3D Bicycle World</span>
        <h1 className="bw-display bw-hero__title">Realm of Two Wheels</h1>
        <p className="bw-lead max-w-2xl mx-auto">
          Explore six bicycle lineages forged between gothic shadow and accent
          light. Each discipline carries its own color, its ritual, and its path.
        </p>
      </header>

      <section aria-labelledby="catalog-heading">
        <h2 id="catalog-heading" className="bw-display bw-section__title mb-8">
          Discipline Catalog
        </h2>
        <div className="bw-grid bw-grid--featured">
          {bicycleTypes.map((bike) => (
            <BicycleCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;
