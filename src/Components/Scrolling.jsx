
import React from "react";

export default function Scrolling() {
  const services = [
    "Bachelor Party Escorts",
    "Business Companions",
    "Busty Escorts",
    "College Girl Escorts",
    "Female Pornstar Job",
    "Foreign Escorts",
    "Housewife Escorts",
    "Incall Escorts",
    "Influencer Escort",
    "Lesbian Escorts",
    "Outcall Escorts",
    "Pool Party Escorts",
    "Russian Escorts",
    "Sugar Babies",
    "Travel Companions",
  ];

  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#151515] pb-20">

      {/* Background */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Banner-1.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/90 via-[#151515]/75 to-[#101010]/90" />

      {/* Decorative Circles */}
      <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-white/10" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border border-white/10" />

      {/* Heading Content */}
      <div className="relative z-10 w-full px-5 pb-16 text-center">

        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B77980]">
          <span className="h-px w-10 bg-[#B77980]" />
          What We Do
          <span className="h-px w-10 bg-[#B77980]" />
        </span>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Delhi Escorts Service{" "}
          <span className="text-[#B77980]">
            Book Genuine & Verified Escort Near
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
          100% Satisfaction And 100% Real Escort Service.
        </p>
      </div>

      {/* Bottom Services Marquee */}
      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden border-y border-white/10 bg-black/20 py-4">

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#151515] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#151515] to-transparent sm:w-20" />

        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
              aria-hidden={group === 1}
            >
              {services.map((service) => (
                <React.Fragment key={`${group}-${service}`}>
                  <span className="mx-4 whitespace-nowrap text-sm font-medium tracking-wide text-white/85 sm:mx-6 sm:text-base">
                    {service}
                  </span>

                  <span className="mx-2 text-sm text-[#B77980]">
                    ✳
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
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
