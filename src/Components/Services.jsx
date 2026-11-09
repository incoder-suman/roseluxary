
import React, { useRef, useEffect, useState } from 'react';

const Services = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Modern, responsive websites tailored to your business.',
      // price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description: 'Improve search visibility and grow organic traffic.',
      // price: '₹4,999',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly digital experiences.',
      price: '₹6,999',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Strategic campaigns to grow your business online.',
      price: '₹7,999',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 5,
      title: 'Content Marketing',
      description: 'Engaging content that connects with your audience.',
      price: '₹3,999',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
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
                    Book Now <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs tracking-wide text-[#8B7770]">
          Thoughtfully designed. Strategically delivered.
        </p>
        
      </div>
    </section>
  );
};

export default Services;
