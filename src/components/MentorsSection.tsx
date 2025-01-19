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
    name: 'Pratham Batra',
    role: 'Co-Founder, GeekRoom',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEpB4pG9Liivg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702434558476?e=1743033600&v=beta&t=5pZTJR5XpDSGx28QXW8Jw5Oje1F3XQqjiM1OdDre0UU',
    expertise: 'Product Strategy',
    social: {
     
      linkedin: 'https://www.linkedin.com/in/pratham1908/',
     
    }
  },
  {
    name: 'Sanidhya Goel',
    role: 'President, GeekRoom',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQE5W6rOwfsPxw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709818256510?e=1743033600&v=beta&t=nXMFXDgxWs2xMnsZ1EjHSehMlE9f9hV5zvY3gqHHy90',
    expertise: 'User Experience',
    social: {
     
      linkedin: 'https://www.linkedin.com/in/sanidhya-goel-2499991b1/',
 
    }
  },
  {
    name: 'Mannas Narang',
    role: 'Software Engineer @wander',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQE5W6rOwfsPxw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709818256510?e=1743033600&v=beta&t=nXMFXDgxWs2xMnsZ1EjHSehMlE9f9hV5zvY3gqHHy90',
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
        {mentors.map((mentor, index) => (
          <PersonCard key={index} {...mentor} />
        ))}
      </div>
    </Section>
  );
}
