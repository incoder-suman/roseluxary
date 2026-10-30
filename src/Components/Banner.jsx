
import React from 'react';

const Banner = () => {
  const services = [
    'WEB DEVELOPMENT',
    'SEO OPTIMIZATION',
    'UI/UX DESIGN',
    'DIGITAL GROWTH',
  ];

  return (
    <section
      className="relative flex min-h-[450px] items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Marquee */}
      <div className="relative w-full -rotate-2 overflow-hidden border-y border-white/30 bg-white/10 py-6 backdrop-blur-sm">
        <div className="marquee-track flex w-max">
          {[1, 2].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
              aria-hidden={group === 2}
            >
              {services.map((service) => (
                <React.Fragment key={service}>
                  <span className="mx-6 whitespace-nowrap text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl md:text-7xl">
                    {service}
                  </span>

                  <span className="text-4xl text-cyan-300 sm:text-5xl md:text-6xl">
                    ✳
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
