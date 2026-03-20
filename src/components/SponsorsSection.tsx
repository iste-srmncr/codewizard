import { Section } from "./Section";

const sponsors = [
  {
    name: "",
    logo: "/sponsors/xyz-logo-color.png",
    url: "https://gen.xyz/",
    isPlaceholder: false,
  },

  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
];

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm ${sponsor.isPlaceholder ? "pointer-events-none select-none" : ""
              }`}
            style={{
              border: "1px solid #383838",
              filter: sponsor.isPlaceholder ? "blur(12px)" : "none",
            }}
          >
            {sponsor.isPlaceholder ? (
              <>
                <div className="w-full h-24 sm:h-32 bg-gray-600 rounded-t-xl" />
                <div className="text-center mt-4">
                  <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                    Sponsor Name
                  </h3>
                </div>
              </>
            ) : (
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-24 sm:h-32 object-contain"
                />

                <div className="text-center mt-4">
                  <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
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