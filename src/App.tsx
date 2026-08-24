import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import ChallengeSection from './components/challenges/ChallengeSection';
import SolutionPillars from './components/solutions/SolutionPillars';
import ProductOverview from './components/products/ProductOverview';
import IndustriesSection from './components/industries/IndustriesSection';
import CaseStudies from './components/caseStudies/CaseStudies';
import WhyTqnia from './components/company/WhyTqnia';
import HowWeWork from './components/company/HowWeWork';
import ReadyCustomBuild from './components/company/ReadyCustomBuild';
import SaudiPresence from './components/company/SaudiPresence';
import AboutTqnia from './components/company/AboutTqnia';
import LeadForm from './components/lead/LeadForm';
import FinalCTA from './components/lead/FinalCTA';
import FloatingActions from './components/lead/FloatingActions';
import MeetingModal from './components/lead/MeetingModal';

function MainAppContent() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [meetingSubject, setMeetingSubject] = useState('');
  const [leadFormChallenge, setLeadFormChallenge] = useState('');

  const handleOpenMeeting = (subject?: string) => {
    if (subject) {
      setMeetingSubject(subject);
    } else {
      setMeetingSubject('');
    }
    setMeetingModalOpen(true);
  };

  const handleScrollToFormWithChallenge = (challengeId: string) => {
    setLeadFormChallenge(challengeId);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#0A0202] bg-[#F8FAFC] dark:text-[#F3F4F6] text-slate-900 transition-colors duration-300 selection:bg-[#E92929] selection:text-white">
      {/* Sticky Executive Navigation Header with Theme Switcher */}
      <Navbar onOpenMeeting={() => handleOpenMeeting()} />

      {/* Main Content Flow */}
      <main>
        {/* 01. Hero Section & Ecosystem Visualization */}
        <Hero
          onOpenMeeting={() => handleOpenMeeting()}
          onScrollToChallenges={() => handleScrollToSection('challenges')}
        />

        {/* 02. Problem-Led Business Challenges Section */}
        <ChallengeSection
          onSelectChallengeForForm={handleScrollToFormWithChallenge}
        />

        {/* 03. 6 Core Solution Pillars */}
        <SolutionPillars
          onScrollToProducts={() => handleScrollToSection('products')}
        />

        {/* 04. Ready-to-Deploy Platforms (T STORE, T FOOD, T REAL ESTATE) */}
        <ProductOverview
          onOpenMeetingWithSubject={(subject) => handleOpenMeeting(subject)}
        />

        {/* 05. Ready -> Custom -> Build Positioning Paradigm */}
        <ReadyCustomBuild />

        {/* 06. Cross-Sector Industry Adaptability */}
        <IndustriesSection />

        {/* 07. Verified Qualitative Case Studies */}
        <CaseStudies />

        {/* 08. Enterprise Delivery Methodology (How We Work) */}
        <HowWeWork />

        {/* 09. Why Businesses Choose TQNiA */}
        <WhyTqnia />

        {/* 10. Technology Architecture & Security Standards */}
        {/* <TechnologySection /> */}

        {/* 11. Saudi Arabia Regional Presence & Riyadh Hub */}
        <SaudiPresence />

        {/* 12. Factual Track Record & Client Experience */}
        {/* <TrustSection />
        <Testimonials /> */}

        {/* 13. Corporate Profile */}
        <AboutTqnia />

        {/* 14. Lead Generation Inquiry Form */}
        <LeadForm initialChallenge={leadFormChallenge} />

        {/* 15. High-Impact Final Call to Action */}
        <FinalCTA
          onOpenMeeting={() => handleOpenMeeting()}
          onScrollToForm={() => handleScrollToSection('contact')}
        />
      </main>

      {/* Executive Footer */}
      <Footer />

      {/* Persistent Floating Quick Actions (WhatsApp & Meeting) */}
      <FloatingActions onOpenMeeting={() => handleOpenMeeting()} />

      {/* 30-Minute Meeting Booking Modal */}
      <MeetingModal
        isOpen={meetingModalOpen}
        onClose={() => setMeetingModalOpen(false)}
        initialSubject={meetingSubject}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
