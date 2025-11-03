import { useState } from 'react';
import { Home } from './components/Home';
import { EducationalModules } from './components/EducationalModules';
import { PracticalLabs } from './components/PracticalLabs';
import { OSComparison } from './components/OSComparison';
import { OfficialSources } from './components/OfficialSources';

type Section = 'home' | 'modules' | 'labs' | 'comparison' | 'sources';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
  };

  const handleBack = () => {
    setCurrentSection('home');
  };

  return (
    <div className="min-h-screen bg-[#0F2027]">
      {currentSection === 'home' && <Home onNavigate={handleNavigate} />}
      {currentSection === 'modules' && <EducationalModules onBack={handleBack} />}
      {currentSection === 'labs' && <PracticalLabs onBack={handleBack} />}
      {currentSection === 'comparison' && <OSComparison onBack={handleBack} />}
      {currentSection === 'sources' && <OfficialSources onBack={handleBack} />}
    </div>
  );
}
