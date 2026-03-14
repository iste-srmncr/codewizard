import React from 'react';
import { Section } from './Section';
import { Briefcase, Clock, Lightbulb } from 'lucide-react'; // Importing icons from Lucide React

export function AboutSection() {
  return (
    <Section id="about" title="About CodeWizards" className="bg-[#070707]" style={{ backgroundColor: 'rgba(1, 1, 7, 0.6)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row text-gray-300">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 h-full">
          <img src="/hero.gif" alt="CodeWizards" className="w-full h-auto object-cover" />
        </div>
        {/* Right side with text and small cards */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-2 space-y-6">
          {/* Text Box with Fire Animation Background */}
          <div className="relative text-center p-4 rounded-lg border-s-0 transition duration-300 hover:border-red-500 fire-animation" style={{border:"1px solid #303032", width: '100%'}}>
            <p className="text-white text-lg relative z-10 fire-text">
              Join us for an unforgettable weekend of coding, creativity, and collaboration.
              <br /><strong style={{color:'#fff'}}>CodeWizards</strong> brings together the brightest minds in technology to solve real-world problems.
            </p>
          </div>
          {/* Three Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full cards-container">
            {/* Card 1 */}
            <div className="bg-[#18181b] p-2 rounded-lg text-center" style={{border:"1px solid #303032"}}>
              <Briefcase className="mx-auto h-8 w-8 text-[#dc6338] mb-2" />
              <p className="text-[white] text-sm">6+ Problems</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#18181b] p-2 rounded-lg text-center" style={{border:"1px solid #303032"}}>
              <Clock className="mx-auto h-8 w-8 text-[#dc6338] mb-2" />
              <p className="text-white text-sm">24 Hour+ Hackathon</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#18181b] p-2 rounded-lg text-center" style={{border:"1px solid #303032"}}>
              <Lightbulb className="mx-auto h-8 w-8 text-[#dc6338] mb-2" />
              <p className="text-white text-sm">Innovation</p>
            </div>
          </div>
        </div>
      </div>
      {/* CSS for Fire Animation */}
      <style jsx>{`
        @keyframes fire {
          0% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        .fire-animation::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('https://i.pinimg.com/originals/4e/ee/11/4eee11c40615aa266b415cd276e41259.gif') repeat-y;
          background-size: 100% 200%;
          opacity: 0.8;
          border: 1px solid #000; /* Border applied to ::before pseudo-element */
          border-radius: inherit; /* Matching the border radius of the parent */
          animation: fire 3s linear infinite;
          z-index: 0;
        }
        @media (max-width: 768px) {
          .fire-animation {
            width: 100%; /* Adjust width for mobile view */
          }
          .fire-text {
            font-size: 0.875rem; /* Adjust text size for mobile view */
          }
          .cards-container {
            grid-template-columns: 1fr 1fr 1fr; /* Make cards in a single row on mobile view */
          }
        }
      `}</style>
    </Section>
  );
}