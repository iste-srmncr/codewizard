import React from 'react';
import { Navbar } from './components/Navbar';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CountdownTimer } from './components/CountdownTimer';
import { Section } from './components/Section';
import { SponsorsSection } from './components/SponsorsSection';
import { CommunityPartners } from './components/CommunityPartners';
import { MentorsSection } from './components/MentorsSection';
import { TeamSection } from './components/TeamSection';
import { ProblemStatementsSection } from './components/ProblemStatementsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PrizePool } from './components/PrizePool';
import { Code2, Wifi, Coffee, Gift } from 'lucide-react';
import { Bed, Bus, Medal, Book, Smile } from 'lucide-react';
import { RoadmapSection } from './components/RoadmapSection';
import backgroundSvg from './assets/bgsvg.webp';
import { PastSponsorsSection } from './components/PastSponsorsSection';
import { AboutSection } from './components/AboutSection';
import { JudgesSection } from './components/JudgesSection';
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
      className="min-h-screen bg-black-dark text-white bg-grain-texture bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', backgroundColor: '#010409'
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text">
            CodeWizard <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">2025</span>
          </h1>

          <h6 className="text-2xl md:text-3xl font-bold mb-6 text-[#fff] bg-clip-text">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent
"> 28-29th Jan, 2025</span>
          </h6>
          <p
            className="text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-300 mx-auto"
            style={{
              fontFamily: 'Oxanium',
              backgroundColor: '#161817',
              borderRadius: '0.7rem',
              maxWidth: '90%',  // Adjust maxWidth for mobile and larger devices
              padding: '1rem',
              position: 'relative',
              border: '1px solid #909090', // Grey border color
              display: 'inline-block', // Ensures content width determines size
            }}
          >
            36 Hours of{' '}
            <span style={{ color: '#99bcf6', fontWeight: 'bold' }}>Innovation</span>,{' '}
            <span style={{ color: '#ffc412', fontWeight: 'bold' }}>Creativity</span>, &{' '}
            <span style={{ color: '#919193', fontWeight: 'bold' }}>Code</span>
            <span
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                borderRadius: '0.7rem',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)', // Reduced opacity white
                backgroundSize: '200% 100%',
                backgroundPosition: '0 0',
                animation: 'moveBorder 5s linear infinite',
                pointerEvents: 'none', // Ensures this element does not interfere with the text
              }}
            />
          </p>
          <style>{`
  @keyframes moveBorder {
    0% {
      background-position: 150% 0;
    }
    100% {
      background-position: -50% 0;
    }
  }
`}</style>
          <div className="mb-12">
            <p style={{fontSize:38,fontWeight:"bold"}}>CodeWizard is Live now 🔥🔥</p>
          </div>
          <a
            href="https://unstop.com/p/codewizard25-srm-ist-ncr-campus-1363994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              style={{ border: "1px solid #fff4a3" }}
            >
              Register Now
            </button>
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
      <ProblemStatementsSection />
      <SponsorsSection />
      <CommunityPartners />
      <PastSponsorsSection />
      <JudgesSection/>
      <MentorsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
