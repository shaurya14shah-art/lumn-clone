import { Banner } from './components/ui/Banner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { DemoSection } from './components/home/DemoSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InstallSection } from './components/home/InstallSection';
import { FaqSection } from './components/home/FaqSection';
import { FinalCtaSection } from './components/home/FinalCtaSection';
import { OutroSection } from './components/home/OutroSection';
import { AmbientCursor } from './components/AmbientCursor';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-black text-white">
      <AmbientCursor />
      <Banner />
      <Header />
      
      <main className="flex-grow pt-16">
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <InstallSection />
        <FaqSection />
        <FinalCtaSection />
        <OutroSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
