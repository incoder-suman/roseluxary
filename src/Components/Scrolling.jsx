
import React from "react";

export default function Scrolling() {
  const services = [
    "WEB DEVELOPMENT",
    "SEO OPTIMIZATION",
    "UI/UX DESIGN",
    "DIGITAL GROWTH",
    "BRAND STRATEGY",
    "CREATIVE SOLUTIONS"
  ];

  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#151515]">

      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85')"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/90 via-[#151515]/75 to-[#101010]/90" />

      <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-white/10" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border border-white/10" />

      <div className="relative z-10 w-full">

        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B77980]">
            <span className="h-px w-10 bg-[#B77980]" />
            What We Do
            <span className="h-px w-10 bg-[#B77980]" />
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Delhi Escorts Service <span className="text-[#B77980]">Book Genuine & Verified Escort Near</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl px-5 text-sm leading-7 text-white/65 sm:text-base">
            100% Satisfaction And 100% Real Escort Service With Five Star Hotel.
          </p>
        </div>

        <div className="relative -rotate-2 overflow-hidden border-y border-white/20 bg-white/[0.08] py-7 backdrop-blur-md sm:py-9">

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#151515] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#151515] to-transparent sm:w-28" />

          <div className="marquee-track flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
                aria-hidden={group === 1}
              >
                {services.map((service) => (
                  <React.Fragment key={`${group}-${service}`}>
                    <span className="mx-5 whitespace-nowrap text-3xl font-extrabold tracking-wide text-white sm:mx-8 sm:text-5xl md:text-6xl lg:text-7xl">
                      {service}
                    </span>

                    <span className="mx-2 text-3xl text-[#B77980] sm:text-5xl">
                      ✳
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 px-5 text-center">
          <span className="h-2 w-2 rounded-full bg-[#B77980] shadow-[0_0_12px_#B77980]" />

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 sm:text-sm">
            Creative Thinking. Smart Technology. Measurable Growth.
          </p>
        </div>
      </div>

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
          animation: marquee 35s linear infinite;
          will-change: transform;
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
}
