import { Section } from './Section';

const sponsors = [
  { name: 'Hack Briven', logo: '/sponsors_new/hackbriven.png', url: '' },
  { name: 'IndiGo', logo: '/sponsors_new/indigo.png', url: '' },
  { name: 'Coding Blocks', logo: '/sponsors_new/codingblocks.png', url: '' },
  { name: 'HiDEVS', logo: '/sponsors_new/hidevs.png', url: '' },
  { name: '.xyz', logo: '/sponsors_new/xyz.png', url: '' },
];

function SponsorCard({ sponsor }: { sponsor: { name: string; logo: string; url: string } }) {
  const content = (
    <div
      className="bg-[#12151d] rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center h-full"
      style={{ border: '1px solid #2f2e31' }}
    >
      {sponsor.logo ? (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="w-full h-24 object-contain mb-4"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-24 bg-gray-700/50 rounded-lg flex items-center justify-center mb-4">
          <span className="text-gray-500 text-sm">Coming Soon</span>
        </div>
      )}
      <h3 className="font-bold text-white text-sm text-center">{sponsor.name}</h3>
    </div>
  );

  if (sponsor.url) {
    return (
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export function CurrentSponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {sponsors.map((sponsor, i) => (
          <SponsorCard key={i} sponsor={sponsor} />
        ))}
      </div>
    </Section>
  );
}
