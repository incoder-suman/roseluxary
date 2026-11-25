
import React from "react";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[680px] h-[90vh] max-h-[900px] w-full items-center overflow-hidden bg-[#151515] sm:min-h-[720px]"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Roseluxary background video"
      >
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-8">
        <div className="max-w-2xl text-white">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B77980]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D9A0A6]">
              Welcome to RoseLuxury
            </span>
          </div>

          <h1 className="font-serif text-4xl font-light leading-[1.2] tracking-wide sm:text-5xl lg:text-7xl">
            Experience
            <span className="block italic text-[#D9A0A6]">
              Luxury & Elegance
            </span>
            Like Never Before
          </h1>

          {/* <p className="mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Discover a world of refined experiences, personalized attention
            and exceptional hospitality with RoseLuxury.
          </p> */}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-[#B77980] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#965E67]"
            >
              Explore Services
              <span className="text-base">↗</span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/60 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:border-[#B77980] hover:bg-[#B77980]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
          Scroll to Explore
        </span>
        <span className="h-10 w-px bg-[#B77980]" />
      </div> */}
    </section>
  );
}
