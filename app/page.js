import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import GitHubWidget from '@/components/GitHubWidget';
import Footer from '@/components/Footer';
import GridLines from '@/components/GridLines';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="below-hero">
        <GridLines />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GitHubWidget />
        <Footer />
      </div>
    </>
  );
}
