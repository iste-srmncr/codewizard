import React from 'react';
import { Section } from './Section';
import { Linkedin } from 'lucide-react';

interface Judge {
  name: string;
  title: string;
  organization: string;
  highlights: string[];
  imageUrl: string;
  linkedinUrl: string;
}

const judges: Judge[] = [
  {
    name: 'Varun Kohli',
    title: 'Co-Founder & CEO',
    organization: 'Coding Blocks',
    highlights: [
      'Founding Member at Mirai',
      'Making people fall in love with coding',
    ],
    imageUrl: '/judges/varun-kohli.png',
    linkedinUrl: 'https://www.linkedin.com/in/kohli12/',
  },
  {
    name: 'Jatin Kumar',
    title: 'Software Development Engineer',
    organization: 'Amazon',
    highlights: [
      'Built systems impacting $200M+',
      'Microservices handling 5M+ users/month',
      'Mentor | Hackathon Judge',
      'Ex-NIC & NeGD Intern',
    ],
    imageUrl: '/judges/jatin-kumar.png',
    linkedinUrl: 'https://www.linkedin.com/in/heyjatinnn',
  },
  {
    name: 'Harminder Singh',
    title: 'Tech Founder & Security Leader',
    organization: 'CEO @ Ezintsha | CTO @ Invoiz',
    highlights: [
      'Creator of EzSecure',
      'AI-Driven Sensitive Data Discovery',
      'Compliance Automation',
    ],
    imageUrl: '/judges/harminder-singh.png',
    linkedinUrl: 'https://www.linkedin.com/in/harminder-singh140890',
  },
  {
    name: 'Kapila Arora',
    title: 'Enterprise Architect',
    organization: 'IBM',
    highlights: [
      'RedHat OpenShift Certified',
      'Government Blockchain Expert',
      'Integration Architect',
      'Complex System Integrations SME',
    ],
    imageUrl: '/judges/kapila-arora.png',
    linkedinUrl: 'https://www.linkedin.com/in/kapila-arora',
  },
];

function JudgeCard({ judge }: { judge: Judge }) {
  return (
    <div
      className="bg-[#12151d] rounded-xl shadow-lg p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
      style={{ border: '1px solid #2f2e31' }}
    >
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-purple-500/40">
          <img
            src={judge.imageUrl}
            alt={judge.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{judge.name}</h3>
        <p className="text-purple-400 font-medium text-sm mb-1">{judge.title}</p>
        {judge.organization && (
          <p className="text-gray-400 text-sm mb-3">{judge.organization}</p>
        )}
        {judge.highlights.length > 0 && (
          <ul className="text-gray-500 text-xs space-y-1 flex-1">
            {judge.highlights.map((h, i) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>
        )}
        <a
          href={judge.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export function JudgesSection() {
  return (
    <Section id="judges" title="Panel of Judges">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {judges.map((judge, i) => (
          <JudgeCard key={i} judge={judge} />
        ))}
      </div>
    </Section>
  );
}
