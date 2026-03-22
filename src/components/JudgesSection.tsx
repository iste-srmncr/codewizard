import React from 'react';
import { Section } from './Section';

const dummyCards = Array.from({ length: 4 }, (_, i) => i);

const judgeStyles = `
  .judge-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .judge-card:hover {
    transform: scale(1.03);
    border-color: #9333ea !important;
    box-shadow: 0 0 25px rgba(124, 58, 237, 0.35);
  }
`;

function SilhouetteAvatar() {
  return (
    <div className="w-full flex justify-center">
      <div style={{filter: 'drop-shadow(0 0 20px rgba(124, 58, 237, 0.3))'}}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <circle cx="50" cy="32" r="16" fill="#0a0a0a" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Shoulders */}
          <ellipse cx="50" cy="78" rx="34" ry="20" fill="#0a0a0a" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function DummyPersonCard() {
  return (
    <div
      className="shadow-lg p-6 judge-card"
      style={{ background: '#12101c', border: '1.5px solid #7c3aed', borderRadius: 0 }}
    >
      <SilhouetteAvatar />
      <div className="mt-4 text-center">
        <p className="text-sm italic" style={{color: '#6a6a7a'}}>Coming Soon...</p>
      </div>
    </div>
  );
}

export function JudgesSection() {
  return (
    <Section id="judges" title="Panel of Judges">
      <style>{judgeStyles}</style>
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
