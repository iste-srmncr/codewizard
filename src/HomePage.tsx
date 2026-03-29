import React from 'react';
import { Navbar } from './components/Navbar';
import { CountdownTimer } from './components/CountdownTimer';
import { Section } from './components/Section';
import { SponsorsSection } from './components/SponsorsSection';
import { CommunityPartners } from './components/CommunityPartners';
import { MentorsSection } from './components/MentorsSection';
import { TeamSection } from './components/TeamSection';
// import { ProblemStatementsSection } from './components/ProblemStatementsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PrizePool } from './components/PrizePool';
import { Code2, Wifi, Coffee, Gift } from 'lucide-react';
import { Bed, Bus, Medal, Book, Smile } from 'lucide-react';
import { RoadmapSection } from './components/RoadmapSection';
import { AboutSection } from './components/AboutSection';
import { JudgesSection } from './components/JudgesSection';
// import { PastSponsorsSection } from './components/PastSponsorsSection';
import { VantaBackground } from './components/VantaBackground';
function App() {
  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, title: 'High-Speed WiFi', description: 'Stay connected with blazing fast internet' },
    { icon: <Coffee className="w-8 h-8" />, title: 'Free Food & Drinks', description: 'Keep energized throughout the event' },
    { icon: <Bus className="w-8 h-8" />, title: 'Transportation', description: 'Enjoy free transport services from the nearest metro station.' },
    { icon: <Bed className="w-8 h-8" />, title: 'Accommodation', description: 'Comfortable stay for all participants' },
    { icon: <Gift className="w-8 h-8" />, title: 'Swag Kits', description: 'Exclusive merchandise for all participants' },
    { icon: <Code2 className="w-8 h-8" />, title: 'Workshop Access', description: 'Learn from industry experts' },

    { icon: <Medal className="w-8 h-8" />, title: 'Awards & Recognition', description: 'Get rewarded for your outstanding efforts' },
    { icon: <Smile className="w-8 h-8" />, title: 'Networking Opportunities', description: 'Connect with like-minded individuals' },
  ];
  // jnj

  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden"
      style={{ backgroundColor: '#010409' }}
    >
      <VantaBackground />
      <div className="relative z-[1]">
        <Navbar />

        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text">
              CodeWizards <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">2.0</span>
            </h1>

            <h6 className="text-2xl md:text-3xl font-bold mb-6 text-[#fff] bg-clip-text">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent
"> 17-18th April, 2026</span>
            </h6>
            <div className="inline-block mb-12 px-6 py-3 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300" style={{ fontFamily: 'Oxanium' }}>
                36 Hours of{' '}
                <span style={{ color: '#99bcf6', fontWeight: 'bold' }}>Innovation</span>,{' '}
                <span style={{ color: '#ffc412', fontWeight: 'bold' }}>Creativity</span>, &{' '}
                <span style={{ color: '#c0c0c0', fontWeight: 'bold' }}>Code</span>
              </p>
            </div>
            <div className="mb-8"></div>
            <a
              href="https://unstop.com/o/rI6SB5k?lb=X3zc78BR&utm_medium=Share&utm_source=isteozwv61127&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              style={{ border: "1px solid #fff4a3" }}
            >
              Register Now
            </a>

          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        <RoadmapSection />

        {/* Amenities Section */}
        <Section id="amenities" title="What We Offer" className="bg-black-dark" style={{ backgroundColor: 'rgba(1, 1, 7, 0.7)' }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((item, index) => (
              <div key={index} className="p-6 bg-[#18181b] rounded-xl backdrop-blur-sm hover:scale-105 transition-transform" style={{ border: '1px solid #303032' }}>
                <div className="text-[#abc8f8] mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <PrizePool />
        {/* ProblemStatementsSection removed temporarily */}
        <SponsorsSection />
        {/* Past sponsors section commented out */}
        <CommunityPartners />
        <JudgesSection />
        <MentorsSection />
        {/* <TeamSection /> */}
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
