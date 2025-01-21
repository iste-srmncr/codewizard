import { Section } from './Section';

const community = [

    { name: 'ReSkilll', tier: 'gold', imageUrl: 'https://i.ibb.co/Qdw0VV5/reskilll-1.png', url: 'https://reskilll.com/' },
    { name: 'GeekRoom', tier: 'gold', imageUrl: 'https://i.ibb.co/tM3nSfH/geekroom.jpg', url: 'https://www.geekroom.in/' },
    { name: 'theDevArmy', tier: 'gold', imageUrl: 'https://i.ibb.co/42G4jSN/cropped-Logo-Group-1.png', url: 'https://thedevarmy.com/' },
    { name: 'Web Forge', tier: 'gold', imageUrl: 'https://i.ibb.co/MDqpHP5/WebForge.png', url: 'https://bento.me/webforge' },
    { name: 'The Global Hues', tier: 'silver', imageUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQH-v9FDjtaPzA/company-logo_200_200/company-logo_200_200/0/1663179453334?e=1745452800&v=beta&t=yy6CN7llzU1t69fFkBx1tE_j7SnBz_QCr_h0cCOht_g', url: 'https://theglobalhues.com/' },
];

export function CommunityPartners() {
    return (
        <Section id="community" title="Community & Media Partner">
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {community.map((community, index) => (
                        <a
                            key={index}
                            href={community.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div
                                className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-all"
                                style={{ border: "1px solid #383838" }}
                            >
                                <img
                                    src={community.imageUrl}
                                    alt={community.name}
                                    className="w-full h-32 object-contain rounded-t-xl"
                                    onLoad={(e) => e.target.style.opacity = '1'}
                                    onError={(e) => e.target.style.backgroundColor = 'gray'}
                                    style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                                />
                                <div className={`text-center mt-4 ${community.tier === 'platinum' ? 'text-2xl' :
                                    community.tier === 'gold' ? 'text-xl' :
                                        'text-lg'
                                    }`}>
                                    <h3 className="font-bold text-white mb-1">{community.name}</h3>
                                    {/* <span className={`text-sm ${
                    community
                    .tier === 'platinum' ? 'text-[#dbe2e7]' :
                    community
                    .tier === 'gold' ? 'text-yellow-400' :
                    community
                    .tier === 'silver' ? 'text-gray-400' :
                    'text-orange-400'
                  }`}>
                    {community
                    .tier.charAt(0).toUpperCase() + community
                    .tier.slice(1)} community

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
