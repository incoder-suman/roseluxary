
import React from "react";

export default function LetsConnect() {
  const contacts = [
    {
      label: "Call Us",
      value: "+9165464654131",
      link: "tel:+56465465",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      ),
    },
    {
      label: "Email Us",
      value: "hello@roseluxury.com",
      link: "mailto:hello@roseluxury.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "Visit Us",
      value: "Get in touch for our location",
      link: "#contact",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FCF5F0] px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#B77980]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#E8C5A9]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B77980]">
            <span className="h-px w-10 bg-[#B77980]" />
            Get In Touch
            <span className="h-px w-10 bg-[#B77980]" />
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#302522] sm:text-5xl lg:text-6xl">
            Ready to Book The
            <span className="block italic text-[#B77980]">
               Best Escort in Delhi!
            </span>
          </h2>

          {/* <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#82716C] sm:text-base">
            Every beautiful experience begins with a conversation.
            We'd love to hear your ideas, understand your vision,
            and help you create something truly special.
          </p> */}
        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden border border-[#E8D8D0] bg-white lg:grid-cols-2">

          {/* Left Content */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#302522] p-8 sm:p-12 lg:p-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6A5A8]">
                Rose Luxury
              </span>

              <h3 className="mt-6 max-w-md font-serif text-4xl leading-tight text-white sm:text-5xl">
                Explore 
                <span className="block italic text-[#D6A5A8]">
                  Our Services.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-8 text-white/65">
                Rose Luxury A vision of beauty and grace, she epitomizes VIP charm with impeccable elegance. Offering unparalleled quality service, she redefines escort services with sophistication. Welcome to the precinct where Ms Ritu stands as the icon of Delhi’s finest escorts.
              </p>
            </div>

            {/* Contact Details */}
            <div className="relative mt-12 space-y-7">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  className="group flex items-center gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B77980]/50 text-[#D6A5A8] transition duration-300 group-hover:bg-[#B77980] group-hover:text-white">
                    {contact.icon}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                      {contact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#D6A5A8]">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="relative mt-12 border-t border-white/15 pt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Follow Our Journey
              </p>

              <div className="mt-5 flex gap-3">
                {[
                  { name: "Instagram", url: "https://instagram.com/" },
                  { name: "Facebook", url: "https://facebook.com/" },
                  { name: "Pinterest", url: "https://pinterest.com/" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 px-4 py-2 text-xs text-white/75 transition hover:border-[#B77980] hover:bg-[#B77980] hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col items-center justify-center bg-[#F9F0EB] px-7 py-14 text-center sm:px-12 lg:p-14">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D9B5AC] text-[#B77980]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-9 w-9">
                <path d="M12 20s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.5-8 11-8 11Z" />
              </svg>
            </div>

            <span className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#B77980]">
              We'd Love To Hear From You
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#302522] sm:text-4xl">
              Let's Start a
              <span className="block italic text-[#B77980]">
                Conversation.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#82716C]">
              Have something special in mind? Connect with us directly
              and let's discuss how we can make it happen.
            </p>

            <a
              href="https://wa.me/919876543210?text=Hello%20Rose%20Luxury%2C%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-4 bg-[#B77980] px-8 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9F626B] hover:shadow-lg"
            >
              Let's Connect
              <span className="text-lg">↗</span>
            </a>

            <p className="mt-6 text-xs tracking-wide text-[#A18D85]">
              We look forward to connecting with you.
            </p>

          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="font-serif text-lg italic text-[#B77980]">
            Elegance in Every Detail.
          </p>
        </div>

      </div>
    </section>
  );
}
