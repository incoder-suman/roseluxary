import React, { useState } from "react";

export default function Banner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Enquiry Details:", formData);
  };

  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1211]/85 via-[#291716]/70 to-[#1E1211]/50" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-12 lg:px-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* LEFT TEXT SECTION */}
          <div className="text-white">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E8C5A9]">
              <span className="h-[1px] w-8 bg-[#E8C5A9]" />
              Welcome to Rose Luxury
            </span>

            <h1 className="mt-5 max-w-lg font-serif text-3xl font-light leading-[1.25] tracking-wide text-white sm:text-4xl lg:text-[44px]">
              Luxury &amp; Exclusivity:
              <span className="mt-1 block font-serif italic text-[#E8C5A9]">
                Best High-Class Escorts
              </span>
              in Delhi.
            </h1>

            <p className="mt-5 max-w-md text-xs leading-[1.8] text-white/75 sm:text-sm">
              Step into a world where beauty meets brilliance, where indulgence is an art, and where only the most exclusive gentlemen gain access. Welcome to Tulika Jain’s ultra-premium selection of VIP model escorts in Delhi—a league reserved for those who demand nothing but the best escorts in Delhi.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href="#enquiry-form"
                className="bg-[#B77980] px-6 py-3 text-xs font-semibold tracking-wide text-white transition duration-300 hover:bg-[#9F626B]"
              >
                Make An Enquiry
                <span className="ml-2 text-xs">↗</span>
              </a>

              {/* <a
                href="#about"
                className="border-b border-white/40 pb-1 text-xs font-medium tracking-wide text-white transition hover:border-[#E8C5A9] hover:text-[#E8C5A9]"
              >
                Discover More
              </a> */}
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div id="enquiry-form" className="w-full lg:pl-6">
            <div className="ml-auto max-w-sm rounded-sm border border-white/20 bg-[#FCF5F0]/95 p-6 shadow-2xl backdrop-blur-md sm:p-7">
              <div className="mb-5 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B77980]">
                  Let's Connect
                </span>

                <h2 className="mt-2 font-serif text-2xl font-normal text-[#302522] sm:text-3xl">
                  Make An Enquiry
                </h2>

                <p className="mt-1.5 text-[11px] leading-snug text-[#82716C]">
                  Share your details and our team will get in touch with you.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E7D5CF] text-xl text-[#9F626B]">
                    ✓
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-[#302522]">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-xs text-[#82716C]">
                    Your details have been collected.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#65534F]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E5D6D0] bg-white px-3 py-2 text-xs text-[#302522] outline-none transition focus:border-[#B77980]"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#65534F]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-[#E5D6D0] bg-white px-3 py-2 text-xs text-[#302522] outline-none focus:border-[#B77980]"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#65534F]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-[#E5D6D0] bg-white px-3 py-2 text-xs text-[#302522] outline-none focus:border-[#B77980]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#65534F]">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E5D6D0] bg-white px-3 py-2 text-xs text-[#82716C] outline-none focus:border-[#B77980]"
                    >
                      <option value="">Choose a service</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Luxury Event">Luxury Event</option>
                      <option value="Photography">Photography</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#65534F]">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none border border-[#E5D6D0] bg-white px-3 py-2 text-xs text-[#302522] outline-none focus:border-[#B77980]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 bg-[#B77980] py-3 text-xs font-semibold uppercase tracking-widest text-white transition duration-300 hover:bg-[#9F626B]"
                  >
                    Submit Enquiry
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}