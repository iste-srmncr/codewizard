import React from 'react';
import { Section } from './Section';
import { PersonCard } from './PersonCard';

const mentors = [
  {
    name: 'Varun Kohli ',
    role: 'Co-Founder , Coding Blocks',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQGRbbuaLUhjnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1642883534969?e=1743033600&v=beta&t=deI2POxxENw0eHEYcMCJmjJNUySbZLTPA8zInfGieEg',
    expertise: 'Cloud Architecture',
    social: {
      linkedin: 'https://www.linkedin.com/in/kohli12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // instagram: 'https://www.instagram.com/davidkim'
    }
  },
  {
    name: 'Kartik Mathur',
    role: 'Academics Head , Coding Blocks',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGlGLU4MuN2DQ/profile-displayphoto-shrink_400_400/B56ZQbshyQHQAo-/0/1735631446279?e=1743033600&v=beta&t=b3WuJwaRAf1UqsdLwDh1gLfTmOuV1BBvgZJvL8awyUc',
    expertise: 'Product Strategy',
    social: {
      // github: 'https://github.com/lisajohnson',
      linkedin: 'https://www.linkedin.com/in/kartik-mathur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // instagram: 'https://www.instagram.com/lisajohnson'
    }
  },
  {
    name: 'Saran Kumar',
    role: 'Founder , 0x.day ',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEsJrKbKQfG1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719813329896?e=1743033600&v=beta&t=v-ZzJeRe31l7FQ4aBjwQE_Vk4Oj2HoFMuTNVXfpHfUE',
    expertise: 'User Experience',
    social: {
      // github: 'https://github.com/alexrivera',
      linkedin: 'https://www.linkedin.com/in/0xsaran/?originalSubdomain=in',
      // instagram: 'https://www.instagram.com/alexrivera'
    }
  },
  {
    name: 'Shubham Shakti ',
    role: 'Founder @E-Khel ',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHCGWfanbIvWw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693400821754?e=1743033600&v=beta&t=0U_IEKSKt8m2J6bwZGEwJ7hLGi9T9jm7jEkLWCDHfug',
    expertise: 'WEB3',
    social: {
      linkedin: 'https://www.linkedin.com/in/shubhamshaktirout/',
      // instagram: 'https://www.instagram.com/davidkim'
    }
  },
];

export function JudgesSection() {
  return (
    <Section id="judges" title="Panel of Judges">
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
