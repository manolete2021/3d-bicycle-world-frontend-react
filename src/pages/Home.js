import AuthAlert from '../components/AuthAlert';
import PageLayout from '../components/PageLayout';
import BicycleSlider3D from '../components/BicycleSlider3D';
import CategoryCard from '../components/CategoryCard';
import { bicycleTypes } from '../data/bicycleTypes';

// Home page with neon hero, 3D slider, and bike category grid.
function Home() {
  return (
    <PageLayout>
      <AuthAlert />
      <header className="bw-hero bw-hero--home">
        <div className="bw-hero__stage">
          <h1 className="bw-hero__title bw-hero__title--neon">BICYCLES WORLD</h1>
          <BicycleSlider3D />
        </div>
        <p className="bw-hero__caption">
          3D Slider / HTML + CSS only, rotating in an infinite loop.
        </p>
      </header>

      <section className="bw-categories" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="bw-section__title">
          Bike Categories
        </h2>
        <div className="bw-grid bw-grid--categories">
          {bicycleTypes.map((bike) => (
            <CategoryCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;
