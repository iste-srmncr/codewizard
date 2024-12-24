import React, { useState } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

const teamMembers = {
  organizers: [
    { name: 'Dr. Niranjan Lal', role: 'Faculty coordinator', image: 'https://www.istesrmncr.in/images/team/niranjan-sir.jpg' },
    { name: 'Hardik Behal', role: 'Executive', image: 'https://www.istesrmncr.in/images/team/IMG_0767%20-%20Hardik%20Behal.jpeg' },
    { name: 'Saksham Bhardwaj', role: 'Co-executive', image: 'https://www.istesrmncr.in/images/team/SakshamBhardwaj.png' },
    { name: 'Arpita Sharma', role: 'Associate', image: 'https://www.istesrmncr.in/images/team/arpsha%20-%20ARPITA%20SHARMA%20(RA2211003030100).jpg' },
    // { name: 'Kartikey Mittal', role: 'Tech Lead', image: 'https://www.istesrmncr.in/images/team/Kartikey-Mittal.jpg' },
    // { name: 'Anushka Jha', role: 'Content Lead', image: 'https://www.istesrmncr.in/images/team/anujha%20-%20Anushka%20Jha.jpeg' },
    // { name: 'Sneha Singh', role: 'Publicity Lead', image: 'https://www.istesrmncr.in/images/team/IMG-20241005-WA0068%20-%20Sneha%20Singh.jpg' },
    // { name: 'Srishti Ahuja', role: 'PR Lead', image: 'https://www.istesrmncr.in/images/team/IMG-20240306-WA0020%20-%20Srishti%20Ahuja.jpg' },
    // { name: 'Yash Sharma', role: 'Creative Lead', image: 'https://www.istesrmncr.in/images/team/YASSHA%20-%20Yash%20Sharma.JPG' },
    // { name: 'Saksham Dwivedi', role: 'Social Lead', image: 'https://www.istesrmncr.in/images/team/sdw1.png' },
    // { name: 'Ayush Sharma', role: 'Creative Lead', image: 'https://www.istesrmncr.in/images/team/ayush-sharma.jpg' }
  ],
  tech: [
    { name: 'Kartikey Mittal', role: 'Tech Lead', image: 'https://www.istesrmncr.in/images/team/Kartikey-Mittal.jpg' },
    { name: 'Akash Deep', role: 'Co Tech Lead', image: 'https://www.istesrmncr.in/images/team/akash%20deep.jpg' },
    
  ],
  PR: [
    { name: 'Srishti Ahuja', role: 'PR Lead', image: 'https://www.istesrmncr.in/images/team/IMG-20240306-WA0020%20-%20Srishti%20Ahuja.jpg' },
    // { name: 'Unknown Name', role: 'Lead', image: 'https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg' },
  ],
  Design: [
    { name: 'Yash Sharma', role: 'Creative Lead', image: 'https://www.istesrmncr.in/images/team/YASSHA%20-%20Yash%20Sharma.JPG' },
     { name: 'Ayush Sharma', role: 'Creative Lead', image: 'https://www.istesrmncr.in/images/team/ayush-sharma.jpg' },
    // { name: 'Unknown Name', role: 'Lead', image: 'https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg' },
  ],
  Management: [
   
    { name: 'Anushka Jha', role: 'Content Lead', image: 'https://www.istesrmncr.in/images/team/anujha%20-%20Anushka%20Jha.jpeg' },
    { name: 'Sneha Singh', role: 'Publicity Lead', image: 'https://www.istesrmncr.in/images/team/IMG-20241005-WA0068%20-%20Sneha%20Singh.jpg' },
    { name: 'Saksham Dwivedi', role: 'Social Lead', image: 'https://www.istesrmncr.in/images/team/sdw1.png' },
    // { name: 'Unknown Name', role: 'Lead', image: 'https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg' },
  ],
};

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-lg mb-6">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

export function TeamSection() {
  const [activeTab, setActiveTab] = useState('organizers');

  return (
    <Section id="team" title="Our Team">
      <div className="w-full">
        {/* Button Container */}
        <div className="flex justify-center flex-wrap space-x-4 mb-12">
          {Object.keys(teamMembers).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
                activeTab === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              } mb-2`} // Added mb-2 for vertical margin
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Team Members Flexbox Layout with animation */}
        <div className="transition-all duration-300 ease-in-out">
          <AnimatePresence mode="wait">
            {Object.entries(teamMembers).map(([category, members]) =>
              activeTab === category ? (
                <motion.div
                  key={category}
                  className="flex flex-wrap justify-center items-center gap-10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.2, // Reduced duration for smoothness
                    ease: "easeInOut", // Use easing for smoother transitions
                  }}
                >
                  {members.map((member, index) => (
                    <TeamMember key={index} {...member} />
                  ))}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}