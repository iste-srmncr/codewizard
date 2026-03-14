import React, { useState, useEffect } from 'react';
import { Section } from '../Section';
import { ProblemBox } from './ProblemBox';
import './ProblemStatementsSection.css';  // Custom CSS file for the modal styling

const problems = [
  {
    title: 'Decentralized Job Marketplace',
    description: 'Build a blockchain-based decentralized job marketplace that revolutionizes how freelancers and employers connect. This platform ensures security and transparency through smart contracts, allowing users to establish tamper-proof agreements without intermediaries.',
    tracks: ['Web3', 'Fintech']
  },
  {
    title: 'Personalized AI Fitness Coach',
    description: 'Create an AI-powered virtual fitness coach designed to revolutionize personal health management. The application generates personalized workout plans tailored to individual fitness goals, activity levels, and medical history.',
    tracks: ['AI', 'Healthcare']
  },
  {
    title: 'Real-Time Fake News Detection and Reporting',
    description: 'Develop an AI-powered browser plugin or mobile app to combat the spread of misinformation. Using natural language processing and machine learning, the tool analyzes article content, cross-references it with verified sources, and evaluates source credibility.',
    tracks: ['AI']
  },
];

export function ProblemStatementsSection() {
  const [selectedProblem, setSelectedProblem] = useState<{ title: string, description: string, tracks: string[] } | null>(null);

  useEffect(() => {
    if (selectedProblem) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedProblem]);

  const handleProblemClick = (problem: { title: string, description: string, tracks: string[] }) => {
    setSelectedProblem(problem);
  };

  const closeModal = () => {
    setSelectedProblem(null);
  };

  return (
    <Section id="problems" title="Problem Statements">
      <div className="grid gap-4 max-w-3xl mx-auto relative">
        <div className="filter blur-md select-none pointer-events-none">
          {problems.map((problem, index) => (
            <div key={index} className="mb-4">
              <ProblemBox
                title={problem.title}
                description={problem.description}
                tracks={problem.tracks}
                onViewMore={() => {}}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold bg-black/50 px-8 py-3 rounded-full backdrop-blur-sm">Coming Soon</span>
        </div>
      </div>
      {selectedProblem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 className="modal-title">{selectedProblem.title}</h2>
            <p className="modal-description">{selectedProblem.description}</p>
            <div className="modal-tracks">
              <h3>Tracks</h3>
              <p>{selectedProblem.tracks.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}