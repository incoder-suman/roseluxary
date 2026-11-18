
import React, { useRef, useEffect, useState } from 'react';

const Services = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "919876543210";
  const telegramUsername = "yourusername";

  const message = "Hi Rose Luxary, I want to book your services.";


  const services = [
    {
      id: 1,
      title: 'Bachelor Party Escorts',
      description: 'Professional adult companions for bachelor parties and private celebrations, with a focus on respectful interactions and memorable experiences.',
      // price: '₹9,999',
      image: '/service-3.png',
    },
    {
      id: 2,
      title: 'Business Companions',
      description: 'Meet professional companions for business dinners, corporate events, social gatherings and networking occasions.',
      // price: '₹4,999',
      image: 'service-2.png',
    },
    {
      id: 3,
      title: 'Busty Escorts',
      description: 'Explore profiles of adult companions with distinctive personalities and individual styles to suit your preferences.',
      // price: '₹6,999',
      image: 'service-14.png',
    },
    {
      id: 4,
      title: 'College Girl Escorts',
      description: 'Discover verified adult companions aged 18 or above who offer friendly company for social outings and private events.',
      // price: '₹7,999',
      image: 'service-1.png',
    },
    {
      id: 5,
      title: 'Female Pornstar Job',
      description: 'Explore adult entertainment performer opportunities for verified applicants aged 18 or above, with transparent terms and informed consent.',
      // price: '₹3,999',
      image: 'service-4.png',
    },
    {
      id: 6,
      title: 'Foreign Escorts',
      description: 'Discover international adult companions from different backgrounds and cultures for social occasions and private engagements.',
      // price: '₹9,999',
      image: '/service-5.png',
    },
    {
      id: 7,
      title: 'Housewife Escorts',
      description: 'Browse profiles of independent adult women offering companionship for social outings and private occasions.',
      // price: '₹4,999',
      image: 'service-6.png',
    },
    {
      id: 8,
      title: 'Incall Escorts',
      description: 'Learn about scheduled appointments at a companion designated location, subject to availability and agreed arrangements.',
      // price: '₹6,999',
      image: 'service-7.png',
    },
    {
      id: 9,
      title: 'Influencer Escort',
      description: 'Connect with adult influencers and social personalities for events, public appearances and social engagements.',
      // price: '₹7,999',
      image: 'service-8.png',
    },
    {
      id: 10,
      title: 'Lesbian Escorts',
      description: 'Explore profiles of adult women offering companionship for women seeking female company in a respectful environment.',
      // price: '₹3,999',
      image: 'service-9.png',
    },
    {
      id: 11,
      title: 'Outcall Escorts',
      description: 'Arrange a meeting at your preferred location, subject to availability, safety requirements and prior confirmation.',
      // price: '₹9,999',
      image: '/service-15.png',
    },
    {
      id: 12,
      title: 'Pool Party Escorts',
      description: 'Find adult companions for pool parties, private celebrations and exclusive social gatherings.',
      // price: '₹4,999',
      image: 'service-11.png',
    },
    {
      id: 13,
      title: 'Russian Escorts',
      description: 'Explore profiles of Russian adult companions and learn about their individual backgrounds, interests and availability.',
      // price: '₹6,999',
      image: 'service-12.png',
    },
    {
      id: 14,
      title: 'Sugar Babies',
      description: 'Discover adult companionship profiles with transparent expectations, mutual respect and clearly communicated arrangements.',
      // price: '₹7,999',
      image: 'service-13.png',
    },
    {
      id: 15,
      title: 'Travel Companions',
      description: 'Find adult companions for holidays, business trips, sightseeing and other travel-related social experiences.',
      price: '₹3,999',
      image: 'service-10.png',
    },
  ];

  // Slider navigation
  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector('.service-card');
    if (!card) return;

    setIsPaused(true);

    const gap = 24;
    const step = card.getBoundingClientRect().width + gap;
    const loopWidth = slider.scrollWidth / 2;

    let target =
      slider.scrollLeft + (direction === 'right' ? step : -step);

    if (target >= loopWidth) target -= loopWidth;
    if (target < 0) target += loopWidth;

    slider.scrollTo({
      left: target,
      behavior: 'smooth',
    });

    window.clearTimeout(animationRef.current);

    animationRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 900);
  };

  // Automatic infinite slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isPaused) return;

    let frameId;
    lastTimeRef.current = 0;

    const speed = 35;

    const animate = (time) => {
      if (lastTimeRef.current) {
        const delta = Math.min(time - lastTimeRef.current, 40);

        slider.scrollLeft += (speed * delta) / 1000;

        const loopWidth = slider.scrollWidth / 2;

        if (loopWidth > 0 && slider.scrollLeft >= loopWidth) {
          slider.scrollLeft -= loopWidth;
        }
      }

      lastTimeRef.current = time;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  // Cleanup
  useEffect(() => {
    return () => {
      window.clearTimeout(animationRef.current);
    };
  }, []);

  // WhatsApp enquiry
  const handleBooking = (service) => {
    const message = `Hi, I am interested in ${service.title}, priced at ${service.price}. Please share more details.`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      className="overflow-hidden bg-[#F9F2EE] px-5 py-20 sm:px-8 lg:px-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-[#B8754C] sm:text-sm">
            What We Offer
          </span>

          <h2
            id="services-heading"
            className="mt-2 font-serif text-4xl font-normal leading-tight tracking-tight text-[#30221F] sm:text-5xl lg:text-6xl"
          >
            Our
            <span className="ml-4 font-serif italic text-[#BD7D83]">
              Services
            </span>
          </h2>
        </div>

        {/* Slider navigation */}
        <div className="mb-2 flex items-center justify-between border-b border-[#E8D8D0] pb-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#A16F64]">
            Our expertise
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollSlider('left')}
              aria-label="Previous services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCC9C0] bg-[#FFFCFA] text-xl text-[#30221F] transition-colors duration-300 hover:border-[#BD7D83] hover:bg-[#BD7D83] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BD7D83]"
            >
              &#8592;
            </button>

            <button
              type="button"
              onClick={() => scrollSlider('right')}
              aria-label="Next services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCC9C0] bg-[#FFFCFA] text-xl text-[#30221F] transition-colors duration-300 hover:border-[#BD7D83] hover:bg-[#BD7D83] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BD7D83]"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Infinite services slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          className="flex gap-6 overflow-x-auto pb-5"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {[...services, ...services].map((service, index) => (
            <article
              key={`${service.id}-${index}`}
              className="service-card w-[85%] shrink-0 overflow-hidden border border-[#E8D8D0] bg-[#FFFCFA] transition-colors duration-300 hover:border-[#BD7D83] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              {/* Service image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  draggable="false"
                  loading={index < 4 ? 'eager' : 'lazy'}
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-72"
                />
              </div>

              {/* Service details */}
              <div className="flex min-h-[280px] flex-col p-5 sm:p-6">
                <h3 className="mt-1 font-serif text-2xl font-normal leading-snug text-[#30221F]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#796761]">
                  {service.description}
                </p>

                <div className=" pt-6">
                  <div className="border-t border-[#E8D8D0] pt-4">
                    {/* <p className="text-xs tracking-wide text-[#8B7770]">
                      Starting at
                    </p> */}

                    {/* <p className="mt-1 font-serif text-2xl text-[#30221F]">
                      {service.price}
                    </p> */}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBooking(service)}
                    className="mt-5 w-full border border-[#BD7D83] bg-[#BD7D83] px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#30221F] hover:bg-[#30221F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BD7D83]"
                  >
                    Explore More <span aria-hidden="true">→</span>
                  </button>

                  {/* Book Now Button */}
      {/* <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-[#B77980] px-8 py-3 w-full text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#9F626B]"
      >
        Book Now
      </button> */}


{/* Popup Modal */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          > */}
            {/* Close Button */}
            {/* <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-3 text-2xl text-gray-500 transition hover:text-black"
              aria-label="Close popup"
            >
              ×
            </button>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B77980]">
              Let's Get Started
            </span>

            <h2 className="mt-3 text-2xl font-bold text-[#25211F]">
              Book Your Service
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Choose your preferred platform to connect with our team.
            </p> */}

            {/* Contact Buttons */}
            {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row"> */}

              {/* WhatsApp */}
              {/* <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1DA851]"
              >
                <span className="text-lg">◉</span>
                WhatsApp
              </a> */}

              {/* Telegram */}
              {/* <a
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#229ED9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#168AC4]"
              >
                <span className="text-lg">➤</span>
                Telegram
              </a>

            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-6 text-xs font-medium text-gray-400 transition hover:text-gray-700"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )} */}
    
                  


{/* <div className="grid w-full grid-cols-2 gap-3"> */}

  {/* WhatsApp Button */}
  {/* <button
    type="button"
    onClick={() => {
      const message =
        "Hi WebInCoder, I would like to enquire about your services.";

      window.open(
        `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }}
    className="group flex h-12 w-full items-center justify-center gap-1 bg-[#25D366] px-1 text-[10px] font-semibold leading-none tracking-[0.07em] text-white transition-all duration-300 hover:bg-[#1DA851] sm:text-xs sm:tracking-[0.09em]"
  >
    <span>WHATSAPP</span>
    <span className="text-sm font-normal transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button> */}

  {/* Telegram Button */}
  {/* <button
    type="button"
    onClick={() => {
      window.open(
        "https://t.me/yourusername",
        "_blank",
        "noopener,noreferrer"
      );
    }}
    className="group flex h-12 w-full items-center justify-center gap-1 bg-[#229ED9] px-1 text-[10px] font-semibold leading-none tracking-[0.07em] text-white transition-all duration-300 hover:bg-[#168AC4] sm:text-xs sm:tracking-[0.09em]"
  >
    <span>TELEGRAM</span>
    <span className="text-sm font-normal transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>

</div> */}




                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <p className="mt-5 text-center text-xs tracking-wide text-[#8B7770]">
          Thoughtfully designed. Strategically delivered.
        </p> */}
        
      </div>
    </section>
  );
};

export default Services;
