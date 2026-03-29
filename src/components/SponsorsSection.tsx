import { Section } from "./Section";

const sponsors = [
  { name: '0x.day', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHgu_N0xl290g/company-logo_200_200/company-logo_200_200/0/1709907862057/0xday_logo?e=2147483647&v=beta&t=Z4W7JAzQQv33LQxTE6ID_tYa6v7h-bb99kEBXl_vOIo', url: 'https://0x.day/', isPlaceholder: false },
  { name: 'DoraHacks', logo: 'https://media.licdn.com/dms/image/v2/C560BAQGkE3LXE54TSw/company-logo_200_200/company-logo_200_200/0/1636729801714/dorahacks_logo?e=2147483647&v=beta&t=KfvgydRECMTjVhs8v9G-R8zmgKniEa9n41qddvcHL-A', url: 'https://dorahacks.io/hackathon/', isPlaceholder: false },
  { name: 'Coding Blocks', logo: 'https://blog.codingblocks.com/content/images/size/w1000/2018/11/Logo_White_-NoShadow.png', url: 'https://codingblocks.com/', isPlaceholder: false },
  { name: 'EXPLORERS COMPANY', logo: 'https://ugc.production.linktr.ee/yxjvusj4RuG0iLkbmzGy_2uzW9AQNsqw3xQc6?io=true&size=avatar-v3_0', url: 'https://www.instagram.com/explorers_company/', isPlaceholder: false },
  { name: 'DevDocks.ai', logo: 'https://pbs.twimg.com/profile_images/1854967586674425856/KtgsHH0u_400x400.jpg', url: 'https://devdock.ai/', isPlaceholder: false },
  { name: 'FlatLogic', logo: 'https://avatars.githubusercontent.com/u/8533408?s=280&v=4', url: 'https://flatlogic.com/', isPlaceholder: false },
  { name: 'Interview Buddy', logo: 'https://interviewbuddy.net/assests/logos/old-ib-logo.svg', url: 'https://interviewbuddy.net/', isPlaceholder: false },
  { name: '.xyz', logo: '/sponsors/xyz-logo-color.svg', url: 'https://gen.xyz/', color: '#09b03e', isPlaceholder: false },
  { name: 'Hurricane', logo: 'https://cdn.freebiesupply.com/logos/large/2x/carolina-hurricanes-logo.png', url: 'https://www.hurricaneenergy.in/', isPlaceholder: false },
  { name: 'Appwrite', logo: 'https://appwrite.io/images/logos/appwrite.svg', url: 'https://appwrite.io/', isPlaceholder: false },
  { name: 'AoPS Online', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhwsUBSbaHw3WEOhjJQYuwzRtH3Zx6200ag&s', url: 'https://artofproblemsolving.com/', isPlaceholder: false },
  { name: 'Spheron', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-c-NsIL7Z1X-H1iZp0PaNqSSQlB6rosZE3A&s', url: 'https://www.spheron.network/', isPlaceholder: false },
];

function getFilter(color) {
  if (!color) return "none";

  if (color === "white") return "brightness(0) invert(1)";
  if (color === "black") return "brightness(0)";
  if (color === "gray") return "grayscale(1)";

  return "none";
}

function isHex(color) {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Previous Sponsors">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm`}
            style={{
              border: "1px solid #383838",
            }}
          >
            {sponsor.isPlaceholder ? (
              <>
                <div className="w-full h-24 sm:h-32 bg-gray-600 rounded-t-xl" />

                <div className="text-center mt-4">
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    Sponsor Name
                  </h3>
                </div>
              </>
            ) : (
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {isHex(sponsor.color) ? (
                  <div
                    className="w-full h-24 sm:h-32"
                    style={{
                      backgroundColor: sponsor.color,
                      WebkitMaskImage: `url(${sponsor.logo})`,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskImage: `url(${sponsor.logo})`,
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain",
                    }}
                  />
                ) : (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-24 sm:h-32 object-contain"
                    referrerPolicy="no-referrer"
                    style={{
                      filter: getFilter(sponsor.color),
                    }}
                  />
                )}

                <div className="text-center mt-4">
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {sponsor.name}
                  </h3>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}