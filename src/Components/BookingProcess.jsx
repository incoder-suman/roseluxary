
import React from "react";

export default function BookingProcess() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Explore our services and choose the right solution for your business.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Discuss Your Project",
      description:
        "Share your goals, requirements, budget, and project expectations with us.",
      icon: "💬",
    },
    {
      number: "03",
      title: "Get Your Proposal",
      description:
        "Receive a customized strategy, transparent pricing, and project timeline.",
      icon: "📋",
    },
    {
      number: "04",
      title: "Start Your Project",
      description:
        "Approve the plan and let our experts bring your vision to life.",
      icon: "🚀",
    },
  ];

  const whatsappNumber = "YOUR_WHATSAPP_NUMBER";
  const message = encodeURIComponent(
    "Hi WebInCoder! I would like to book a consultation for my project."
  );

  return (
    <section
      id="booking-process"
      className="relative overflow-hidden bg-[#FCF5F0] px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-5 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B77980] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B77980]">
            <span className="h-2 w-2 rounded-full bg-[#B77980]" />
            Simple & Hassle-Free
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#25211F] sm:text-4xl lg:text-5xl">
            How Our Booking
            <span className="block text-[#B77980]">
              Process Works
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Getting started with WebInCoder is simple. Follow these four
            easy steps to turn your business ideas into reality.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-orange-300 lg:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-orange-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B77980] hover:shadow-xl"
            >
              {/* Number */}
              <span className="absolute right-5 top-5 text-sm font-extrabold tracking-widest text-[#B77980]    ">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#FCF5F0] text-4xl transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#B77980]">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="mt-7 text-xl font-bold text-[#25211F] transition-colors group-hover:text-[#B77980]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#B77980] transition-all duration-300 group-hover:w-20 group-hover:bg-[#B77980]" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#25211F] px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B77980]">
                Let’s Work Together
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Ready to Start Your Project?
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                Have an idea in mind? Let’s discuss your requirements and
                find the perfect digital solution for your business.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#B77980] px-8 py-4 font-bold text-white shadow-lg shadow-orange-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
            >
              Book a Consultation
              <span className="text-xl" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
