import React from 'react';
import { Section } from './Section';
import { Linkedin } from 'lucide-react';

interface Mentor {
  name: string;
  title: string;
  organization: string;
  imageUrl: string;
  linkedinUrl: string;
  imagePosition?: string;
}

const mentors: Mentor[] = [
  {
    name: 'Unnati Gupta',
    title: 'SDR',
    organization: 'XDC Network',
    imageUrl: '/mentors/unnati-gupta.png',
    linkedinUrl: 'https://www.linkedin.com/in/unnati-gupta-b73a8a27b/',
  },
  {
    name: 'Sairam Kaushik',
    title: 'SDE',
    organization: 'Goolluck Consulting',
    imageUrl: '/mentors/sairam-kaushik.png',
    linkedinUrl: 'https://www.linkedin.com/in/sairamkaushik',
    imagePosition: 'center 80%',
  },
  {
    name: 'Shivam Taneja',
    title: 'Engineer',
    organization: 'NTT Data',
    imageUrl: '/mentors/shivam-taneja.png',
    linkedinUrl: 'https://www.linkedin.com/in/shivam-taneja/',
  },
  {
    name: 'Snigdha Kashyap',
    title: 'Software Engineer',
    organization: 'Expedia Group B2B',
    imageUrl: '/mentors/snigdha-kashyap.png',
    linkedinUrl: 'https://www.linkedin.com/in/snigdha-kashyap/',
  },
  {
    name: 'Surya Gupta',
    title: 'Ambixous Creator Fellow',
    organization: '',
    imageUrl: '/mentors/surya-gupta.png',
    linkedinUrl: 'https://www.linkedin.com/in/surya-gupta-ai/',
  },
  {
    name: 'Pawan Singhla',
    title: 'SDE-II',
    organization: 'ZIGRAM',
    imageUrl: '/mentors/pawan-singhla.png',
    linkedinUrl: 'https://www.linkedin.com/in/pawansinghla300/',
  },
  {
    name: 'Aseem Chishti',
    title: 'Founder/Architect',
    organization: 'VAMS Network',
    imageUrl: '/mentors/aseem-chishti.png',
    linkedinUrl: 'https://www.linkedin.com/in/aseemchishti/',
  },
  {
    name: 'Shreyan Basu Ray',
    title: 'Technical Author',
    organization: 'Weights & Biases',
    imageUrl: '/mentors/shreyan-basu-ray.png',
    linkedinUrl: 'https://www.linkedin.com/in/shreyanbasuray',
  },
];

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div
      className="bg-[#12151d] rounded-xl shadow-lg p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
      style={{ border: '1px solid #2f2e31' }}
    >
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-purple-500/40">
          <img
            src={mentor.imageUrl}
            alt={mentor.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: mentor.imagePosition || 'top' }}
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
        <p className="text-purple-400 font-medium text-sm mb-1">{mentor.title}</p>
        {mentor.organization && (
          <p className="text-gray-400 text-sm mb-3">{mentor.organization}</p>
        )}
        {mentor.linkedinUrl && (
          <a
            href={mentor.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors mt-auto pt-4"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

function RevealingSoonCard() {
  return (
    <div
      className="bg-[#12151d] rounded-xl shadow-lg p-6 backdrop-blur-sm h-full flex flex-col"
      style={{ border: '1px solid #2f2e31' }}
    >
      <div className="flex flex-col items-center text-center flex-1 justify-center">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-gray-600/40 bg-gray-700 flex items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="22" r="11" fill="#4b5563" />
            <path d="M10 58 C10 42 20 34 32 34 C44 34 54 42 54 58" fill="#4b5563" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-1">Revealing Soon</h3>
        <p className="text-gray-400 text-sm">Stay Tuned</p>
      </div>
    </div>
  );
}

export function MentorsSection() {
  const remainingSlots = 8 - mentors.length;

  return (
    <Section id="mentors" title="Meet Your Mentors">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentors.map((mentor, i) => (
          <MentorCard key={i} mentor={mentor} />
        ))}
        {Array.from({ length: remainingSlots }, (_, i) => (
          <RevealingSoonCard key={`placeholder-${i}`} />
        ))}
      </div>
    </Section>
  );
}
