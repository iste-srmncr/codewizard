import React from 'react';
import { Section } from './Section';
import { PersonCard } from './PersonCard';

const mentors = [
  {
    name: 'Manas Chopra',
    role: 'Co-Founder, GeekRoom',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF3dMwwm5HxkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727488349496?e=1743033600&v=beta&t=UAGl7KGK-YYVX9wOq8_V2x6zGlNJ2CuRx-a5vwgdp6M',
    expertise: 'Cloud Architecture',
    social: {
      linkedin: 'https://www.linkedin.com/in/themanas95826/',
      instagram: 'https://www.instagram.com/themanas.ai/'
    }
  },
  {
    name: 'Bharat Varshney',
    role: 'Technical Lead',
    image: 'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2FqSw7k5HpSwJ2HBBr4AT59P.jpeg&w=256&q=90&dpl=dpl_5weRPZ6Yua2171A8GFDAx6R8heJf',
    expertise: 'Product Strategy',
    social: {
      linkedin: 'https://www.linkedin.com/in/bharatvarshney/',
    }
  },
  {
    name: 'Harsh Kumar Jadon',
    role: 'Founder,Kalp Studio',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGJs_5eDs3ahg/profile-displayphoto-shrink_400_400/B56ZRmHeuoGoAg-/0/1736880025569?e=1743033600&v=beta&t=vGCKgMaZFieJQORWhc3xmPfcLzRjWNOTV-eKLWThpkI',
    expertise: 'User Experience',
    social: {
      linkedin: 'https://www.linkedin.com/in/harsh-kumar-jadon-204a15197/',
    }
  },
  {
    name: 'Mannas Narang',
    role: 'Software Engineer @wander',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHH3W3j3Y1Wzw/profile-displayphoto-shrink_400_400/B56ZP2UgjHG4Ak-/0/1735004392388?e=1743033600&v=beta&t=Q4ySLAzvl4tqUySZsKzqhj4thUKApJRk3EaPRDQDtgk',
    expertise: 'User Experience',
    social: {
      linkedin: 'https://www.linkedin.com/in/mannasnarang/',
    }
  },
];

export function MentorsSection() {
  return (
    <Section id="mentors" title="Meet Your Mentors">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.slice(0, 3).map((mentor, index) => (
          <PersonCard key={index} {...mentor} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <PersonCard key={3} {...mentors[3]} />
        </div>
      </div>
    </Section>
  );
}
