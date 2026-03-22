import React from 'react';
import { Section } from './Section';

const dummyCards = Array.from({ length: 4 }, (_, i) => i);

function WizardAvatar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-28 h-28 rounded-full flex items-center justify-center mentor-avatar-glow" style={{background: 'rgba(30, 20, 60, 0.8)', border: '1px solid rgba(168, 85, 247, 0.3)', transition: 'box-shadow 0.3s ease-out'}}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wizard hat */}
          <polygon points="32,4 18,28 46,28" fill="url(#mentorHatGrad)" />
          <rect x="14" y="28" width="36" height="4" rx="2" fill="url(#mentorHatGrad)" />
          {/* Hooded figure silhouette */}
          <ellipse cx="32" cy="42" rx="12" ry="10" fill="url(#mentorBodyGrad)" />
          {/* Question mark */}
          <text x="32" y="47" textAnchor="middle" fontSize="16" fontWeight="bold" fill="url(#mentorQGrad)" fontFamily="sans-serif">?</text>
          <defs>
            <linearGradient id="mentorHatGrad" x1="18" y1="4" x2="46" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="mentorBodyGrad" x1="20" y1="32" x2="44" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#581c87" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
            <linearGradient id="mentorQGrad" x1="26" y1="36" x2="38" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DummyPersonCard() {
  return (
    <div
      className="bg-[#12151d] rounded-xl shadow-lg p-6 backdrop-blur-sm mentor-card-hover"
      style={{ border: '1px solid #2f2e31' }}
    >
      <style>{`
        .mentor-card-hover {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .mentor-card-hover:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.25);
        }
        .mentor-card-hover:hover .mentor-avatar-glow {
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.4);
        }
      `}</style>
      <WizardAvatar />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-white mb-1">To Be Announced</h3>
        <p className="text-sm text-gray-500">Coming Soon</p>
      </div>
    </div>
  );
}

export function MentorsSection() {
  return (
    <Section id="mentors" title="Meet Your Mentors">
      <div className="relative">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyCards.slice(0, 3).map((i) => (
              <DummyPersonCard key={i} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <DummyPersonCard />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
