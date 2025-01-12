import { Section } from './Section';

const sponsors = [
  { name: '0x.day', tier: 'platinum', imageUrl: 'https://i.ibb.co/4NrvXbG/0x-Day.png', url: 'https://0x.day/' },
  { name: 'HackQuest', tier: 'gold', imageUrl: 'https://pbs.twimg.com/profile_images/1734099293676396544/jIdC7NYM_400x400.jpg', url: 'https://hackquest.io/en' },
  { name: 'Coding Blocks', tier: 'gold', imageUrl: 'https://blog.codingblocks.com/content/images/size/w1000/2018/11/Logo_White_-NoShadow.png', url: 'https://codingblocks.com/' },
  { name: 'DevDocs', tier: 'silver', imageUrl: 'https://devdocs.io/images/icon-320.png', url: 'https://devdocs.io/' },
  { name: 'Interview Buddy', tier: 'silver', imageUrl: 'https://interviewbuddy.net/assests/logos/old-ib-logo.svg', url: 'https://interviewbuddy.net/' },
  { name: 'gen.xyz', tier: 'silver', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/1200px-.xyz_logo.svg.png', url: 'https://gen.xyz/' },
];

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sponsors.map((sponsor, index) => (
            <a 
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-all" 
                style={{ border: "1px solid #383838" }}
              >
                <img
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  className="w-full h-32 object-contain rounded-t-xl"
                  onLoad={(e) => e.target.style.opacity = '1'}
                  onError={(e) => e.target.style.backgroundColor = 'gray'}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                />
                <div className={`text-center mt-4 ${
                  sponsor.tier === 'platinum' ? 'text-2xl' :
                  sponsor.tier === 'gold' ? 'text-xl' :
                  'text-lg'
                }`}>
                  <h3 className="font-bold text-white mb-1">{sponsor.name}</h3>
                  {/* <span className={`text-sm ${
                    sponsor.tier === 'platinum' ? 'text-[#dbe2e7]' :
                    sponsor.tier === 'gold' ? 'text-yellow-400' :
                    sponsor.tier === 'silver' ? 'text-gray-400' :
                    'text-orange-400'
                  }`}>
                    {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsor
                  </span> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}