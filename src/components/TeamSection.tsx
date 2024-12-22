import React, { useState } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

const teamMembers = {
  organizer: [
    { name: 'Jennifer Lee', role: 'Event Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    { name: 'Alex Rivera', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36' },
    { name: 'Marcus Chen', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
    { name: 'Sarah Johnson', role: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { name: 'Marcus Chen', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
    { name: 'Sarah Johnson', role: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  ],
  tech: [
    { name: 'Marcus Chen', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
    { name: 'Sarah Johnson', role: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  ],
  PR: [
    { name: 'Sophia Patel', role: 'PR Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e' },
    { name: 'Michael Brown', role: 'Media Relations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  ],
  Design: [
    { name: 'Emma Wilson', role: 'Social Media Strategist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
    { name: 'David Lee', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
  ],
  Management: [
    { name: 'Emma Wilson', role: 'Social Media Strategist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
    { name: 'David Lee', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
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
  const [activeTab, setActiveTab] = useState('organizer');

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
        className="flex flex-wrap justify-center items-center gap-20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{
          duration: 0.3, // Adjust duration for smoothness
          ease: "easeInOut", // Use easing for smoother transitions
        }}
        layout // Add this prop for smoother layout transitions
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
