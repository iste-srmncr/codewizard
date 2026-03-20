import { Section } from "./Section";

const sponsors = [
  {
    name: ".xyz",
    logo: "/sponsors/xyz-logo-color.svg",
    url: "https://gen.xyz/",
    color: "#09b03e", // custom hex color
    isPlaceholder: false,
  },

  {
    name: "Example Sponsor",
    logo: "/sponsors/example.png",
    url: "https://example.com",
    color: "white",
    isPlaceholder: true,
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