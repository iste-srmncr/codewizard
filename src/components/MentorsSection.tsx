import React from 'react';
import { Section } from './Section';

const dummyCards = Array.from({ length: 4 }, (_, i) => i);

function DummyPersonCard() {
  return (
    <div className="bg-[#12151d] rounded-xl shadow-lg p-6 backdrop-blur-sm" style={{ border: "1px solid #2f2e31" }}>
      <div className="flex items-center gap-4">
        <div className="w-1/2">
          <div className="w-full h-32 bg-gray-700 rounded-md" />
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-center text-white mb-1">Mentor Name</h3>
          <p className="text-center text-gray-400 mb-4">Role Title</p>
          <div className="flex justify-center gap-4">
            <div className="w-5 h-5 bg-gray-600 rounded-full" />
            <div className="w-5 h-5 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MentorsSection() {
  return (
    <Section id="mentors" title="Meet Your Mentors">
      <div className="relative">
        <div className="select-none pointer-events-none" style={{ filter: 'blur(20px)' }}>
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
