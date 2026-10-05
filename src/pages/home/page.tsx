import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import Hero from './components/Hero';
import Firma from './components/Firma';
import Audience from './components/Audience';
import Areas from './components/Areas';
import Vinculacion from './components/Vinculacion';
import Modalidades from './components/Modalidades';
import StrategicCTA from './components/StrategicCTA';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Firma />
        <Audience />
        <Areas />
        <Vinculacion />
        <Modalidades />
        <StrategicCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}