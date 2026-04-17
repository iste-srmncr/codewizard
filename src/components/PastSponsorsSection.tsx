
import { Section } from './Section';

const pastSponsors = [
  { name: '0x.day', tier: 'platinum', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQHgu_N0xl290g/company-logo_200_200/company-logo_200_200/0/1709907862057/0xday_logo?e=2147483647&v=beta&t=Z4W7JAzQQv33LQxTE6ID_tYa6v7h-bb99kEBXl_vOIo' },
  { name: 'DoraHacks', tier: 'gold', imageUrl: 'https://media.licdn.com/dms/image/v2/C560BAQGkE3LXE54TSw/company-logo_200_200/company-logo_200_200/0/1636729801714/dorahacks_logo?e=2147483647&v=beta&t=KfvgydRECMTjVhs8v9G-R8zmgKniEa9n41qddvcHL-A' },
  { name: 'Coding Blocks', tier: 'gold', imageUrl: 'https://blog.codingblocks.com/content/images/size/w1000/2018/11/Logo_White_-NoShadow.png' },
  { name: 'DevDocks.ai', tier: 'silver', imageUrl: 'https://pbs.twimg.com/profile_images/1854967586674425856/KtgsHH0u_400x400.jpg' },
  { name: 'FlatLogic', tier: 'silver', imageUrl: 'https://avatars.githubusercontent.com/u/8533408?s=280&v=4' },
  { name: 'Interview Buddy', tier: 'silver', imageUrl: 'https://interviewbuddy.net/assests/logos/old-ib-logo.svg' },
  { name: 'gen.xyz', tier: 'silver', imageUrl: '/sponsors/xyz-logo-color.png' },
  { name: 'Appwrite', tier: 'silver', imageUrl: 'https://appwrite.io/images/logos/appwrite.svg' },
  { name: 'AoPS Online', tier: 'silver', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhwsUBSbaHw3WEOhjJQYuwzRtH3Zx6200ag&s' },
  { name: 'Spheron', tier: 'silver', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-c-NsIL7Z1X-H1iZp0PaNqSSQlB6rosZE3A&s' },
];

export function PastSponsorsSection() {
  
  return (
    <Section id="past-sponsors" title="Past Sponsors" >
      <div className="flex flex-wrap justify-center gap-4">
        {pastSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-500/80 p-2 rounded-lg backdrop-blur-sm hover:scale-105 transition-all w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
            style={{ border: "1px solid #444", opacity: 0.8 }}
          >
            <img
              src={sponsor.imageUrl}
              alt={sponsor.name}
              className="w-full h-20 rounded-t-md object-contain"
              referrerPolicy="no-referrer"
            />
            <div className={`text-center mt-2 text-sm ${
              sponsor.tier === 'platinum' ? 'text-xl' :
              sponsor.tier === 'gold' ? 'text-lg' :
              'text-base'
            }`}>
              {/* <span className={`text-xs ${
                sponsor.tier === 'platinum' ? 'text-[#dbe2e7]' :
                sponsor.tier === 'gold' ? 'text-yellow-400' :
                sponsor.tier === 'silver' ? 'text-gray-400' :
                'text-orange-400'
              }`}>
                {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsor
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}