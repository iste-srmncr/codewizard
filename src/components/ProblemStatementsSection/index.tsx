import React, { useState } from 'react';
import { Section } from '../Section';
import { ProblemBox } from './ProblemBox';

const problems = [
  {
    title: 'AI-Powered Healthcare Assistant [SAMPLE]',
    description: 'This is where the problem will be briefly described [SAMPLE]',
  },
  {
    title: 'Smart City Traffic Management [SAMPLE]',
    description: 'This is where the problem will be briefly described [SAMPLE]',
  },
  {
    title: 'Sustainable Energy Monitor [SAMPLE]',
    description: 'This is where the problem will be briefly described [SAMPLE]',
  },
  {
    title: 'Educational Resource Equalizer [SAMPLE]',
    description: 'This is where the problem will be briefly described [SAMPLE]',
  },
  {
    title: 'Supply Chain Optimizer [SAMPLE]',
    description: 'This is where the problem will be briefly described [SAMPLE]',
  },
];


export function ProblemStatementsSection() {
  const [unlockedProblems, setUnlockedProblems] = useState<number[]>([]);

  const toggleProblem = (index: number) => {
    setUnlockedProblems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Initially locking all problems
  const lockAllProblems = false;

  return (
    <Section id="problems" title="Problem Statements">
      <div className="grid gap-4 max-w-3xl mx-auto">
        {problems.map((problem, index) => (
          <ProblemBox
            key={index}
            title={problem.title}
            description={problem.description}
            isLocked={lockAllProblems}
            onToggle={() => toggleProblem(index)}
          />
        ))}
      </div>
    </Section>
  );
}
