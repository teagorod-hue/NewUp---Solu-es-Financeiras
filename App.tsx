import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SolutionsOverview from './components/SolutionsOverview';
import ProblemSection from './components/ProblemSection';
import FlightSection from './components/FlightSection';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 font-sans text-slate-200 selection:bg-neon-green/30 selection:text-neon-green">
      <Header />
      <main>
        <Hero />
        <SolutionsOverview />
        <ProblemSection />
        <FlightSection />
        <HowItWorks />
        <SocialProof />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;