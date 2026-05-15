import Hero from '../components/Hero';
import AboutBlurb from '../components/AboutBlurb';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="grow">
        <Hero />
        <AboutBlurb />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}
