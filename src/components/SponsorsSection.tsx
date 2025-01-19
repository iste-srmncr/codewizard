import { Section } from './Section';

const sponsors = [
  { name: '0x.day', tier: 'platinum', imageUrl: 'https://i.ibb.co/4NrvXbG/0x-Day.png', url: 'https://0x.day/' },
  { name: 'DoraHacks', tier: 'gold', imageUrl: 'https://media.licdn.com/dms/image/v2/C560BAQGkE3LXE54TSw/company-logo_200_200/company-logo_200_200/0/1636729801714/dorahacks_logo?e=2147483647&v=beta&t=KfvgydRECMTjVhs8v9G-R8zmgKniEa9n41qddvcHL-A', url: 'https://dorahacks.io/hackathon/' },
  { name: 'Coding Blocks', tier: 'gold', imageUrl: 'https://blog.codingblocks.com/content/images/size/w1000/2018/11/Logo_White_-NoShadow.png', url: 'https://codingblocks.com/' },
  { name: 'EXPLORERS COMPANY', tier: 'gold', imageUrl: 'https://ugc.production.linktr.ee/yxjvusj4RuG0iLkbmzGy_2uzW9AQNsqw3xQc6?io=true&size=avatar-v3_0', url: 'https://www.instagram.com/explorers_company/' },
  { name: 'DevDocks.ai', tier: 'silver', imageUrl: 'https://pbs.twimg.com/profile_images/1854967586674425856/KtgsHH0u_400x400.jpg', url: 'https://devdock.ai/' },
  { name: 'FlatLogic', tier: 'silver', imageUrl: 'https://avatars.githubusercontent.com/u/8533408?s=280&v=4', url: 'https://flatlogic.com/' },
  { name: 'Interview Buddy', tier: 'silver', imageUrl: 'https://interviewbuddy.net/assests/logos/old-ib-logo.svg', url: 'https://interviewbuddy.net/' },
  { name: 'gen.xyz', tier: 'silver', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/1200px-.xyz_logo.svg.png', url: 'https://gen.xyz/' },
  { name: 'Budweiser', tier: 'silver', imageUrl: 'https://i.ibb.co/TWVthqB/budweiser.png', url: 'https://www.budweiser.com/en' },
  { name: 'AoPS Online', tier: 'silver', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhwsUBSbaHw3WEOhjJQYuwzRtH3Zx6200ag&s', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhwsUBSbaHw3WEOhjJQYuwzRtH3Zx6200ag&s' },
];

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* First Row for All Sponsors Except AoPS Online */}
          {sponsors.slice(0, 9).map((sponsor, index) => (
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
                <div className={`text-center mt-4 ${sponsor.tier === 'platinum' ? 
                  'text-2xl' : sponsor.tier === 'gold' ? 
                  'text-xl' : 
                  'text-lg'
                }`}>
                  <h3 className="font-bold text-white mb-1">{sponsor.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Second Row for AoPS Online Centered */}
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
          {/* Empty divs for centering */}
          <div></div>
          <a
            href={sponsors[9].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-center"
          >
            <div
              className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-all"
              style={{ border: "1px solid #383838" }}
            >
              <img
                src={sponsors[9].imageUrl}
                alt={sponsors[9].name}
                className="w-full h-32 object-contain rounded-t-xl"
                onLoad={(e) => e.target.style.opacity = '1'}
                onError={(e) => e.target.style.backgroundColor = 'gray'}
                style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
              />
              <div className={`text-center mt-4 ${sponsors[9].tier === 'platinum' ? 
                'text-2xl' : sponsors[9].tier === 'gold' ? 
                'text-xl' : 
                'text-lg'
              }`}>
                <h3 className="font-bold text-white mb-1">{sponsors[9].name}</h3>
              </div>
            </div>
          </a>
          <div></div>
        </div>
      </div>
    </Section>
  );
}
