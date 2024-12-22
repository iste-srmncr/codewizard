import React from 'react';
import { Section } from './Section';
import { PersonCard } from './PersonCard';

const mentors = [
  {
    name: 'Judge Name',
    role: 'Role',
    image: 'https://thumbs.dreamstime.com/b/single-gray-square-simple-human-silhouette-inside-light-background-minimalistic-clean-design-eps-340598362.jpg',
    expertise: 'Cloud Architecture',
    social: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://www.linkedin.com/in/davidkim',
      instagram: 'https://www.instagram.com/davidkim'
    }
  },
  {
    name: 'Judge Name',
    role: 'Role',
    image: 'https://thumbs.dreamstime.com/b/single-gray-square-simple-human-silhouette-inside-light-background-minimalistic-clean-design-eps-340598362.jpg',
    expertise: 'Product Strategy',
    social: {
      github: 'https://github.com/lisajohnson',
      linkedin: 'https://www.linkedin.com/in/lisajohnson',
      instagram: 'https://www.instagram.com/lisajohnson'
    }
  },
  {
    name: 'Judge Name',
    role: 'Role',
    image: 'https://thumbs.dreamstime.com/b/single-gray-square-simple-human-silhouette-inside-light-background-minimalistic-clean-design-eps-340598362.jpg',
    expertise: 'User Experience',
    social: {
      github: 'https://github.com/alexrivera',
      linkedin: 'https://www.linkedin.com/in/alexrivera',
      instagram: 'https://www.instagram.com/alexrivera'
    }
  },
];

export function JudgesSection() {
  return (
    <Section id="mentors" title="Panel of Judges">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <PersonCard key={index} {...mentor} />
        ))}
      </div>
    </Section>
  );
}
