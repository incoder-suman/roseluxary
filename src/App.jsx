
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Heart,
} from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#about' },
  { label: 'Our Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
]

function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee2d9] bg-[#fffdfb]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
        <a href="#home" aria-label="Roseluxary home" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Roseluxary"
            className="h-12 w-auto max-w-[155px] object-contain sm:h-14 sm:max-w-[190px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#6f5d57] transition-colors duration-300 hover:text-[#b77980]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#342522] px-5 py-3 text-xs text-white transition-colors hover:bg-[#9d6870]"
          >
            Let's connect
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadbd2] text-[#342522] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-[#eee2d9] bg-[#fffdfb] px-5 py-4 lg:hidden"
        >
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-4 text-sm text-[#55413c] ${
                index !== links.length - 1 ? 'border-b border-[#f1e8e2]' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#342522] px-5 py-4 text-sm text-white"
          >
            Let's connect <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fcf5f0]"
    >
      <div className="pointer-events-none absolute -right-32 -top-28 -z-10 h-72 w-72 rounded-full border border-[#c6a16e]/30 sm:h-[460px] sm:w-[460px]" />
      <div className="pointer-events-none absolute -right-16 -top-12 -z-10 h-56 w-56 rounded-full border border-[#c6a16e]/25 sm:h-[340px] sm:w-[340px]" />

      <div className="mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[730px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-14 lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfc7a9] bg-white/70 px-4 py-2.5"
          >
            <Sparkles size={14} className="text-[#ad8249]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#876a48] sm:text-[10px]">
              A world of elegance
            </span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[clamp(3rem,8vw,6.8rem)] leading-[1.02] tracking-[-0.045em] text-[#342522]"
          >
            A touch of
            <br />
            <span className="italic text-[#b77980]">extraordinary.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 max-w-lg text-sm leading-7 text-[#786966] sm:text-base sm:leading-8"
          >
            Discover Roseluxary — a distinctive digital experience shaped
            by elegance, thoughtful details and a refined visual identity.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#342522] px-6 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-[#9d6870] sm:px-7 sm:text-sm"
            >
              Discover our story
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#values"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dac8bb] px-6 py-3 text-xs text-[#55413c] transition-colors hover:bg-white sm:px-7 sm:text-sm"
            >
              Explore our values
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-[#786966] sm:mt-12 sm:gap-x-8 sm:text-xs"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#ad8249]" />
              Privacy-conscious
            </span>
            <span className="flex items-center gap-2">
              <Heart size={15} className="text-[#b77980]" />
              Thoughtfully designed
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[470px] lg:max-w-none"
        >
          <div className="absolute -inset-3 rotate-[3deg] rounded-t-[48%] rounded-b-[8px] border border-[#c7a16e]/60 sm:-inset-5" />

          <div className="relative flex aspect-[4/4.5] flex-col items-center justify-center overflow-hidden rounded-t-[48%] rounded-b-[8px] border border-white/80 bg-gradient-to-br from-[#f5e5df] via-[#eed6d0] to-[#d8b4a9] px-5 text-center shadow-[0_28px_80px_rgba(100,60,50,0.10)] sm:aspect-[4/4.4] sm:px-8">
            <div className="absolute inset-3 rounded-t-[48%] rounded-b-[5px] border border-white/50 sm:inset-5" />
            <div className="absolute -right-12 top-12 h-44 w-44 rounded-full border border-white/30 sm:h-64 sm:w-64" />
            <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full border border-white/30 sm:h-72 sm:w-72" />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex flex-col items-center"
            >
              <Sparkles size={25} strokeWidth={1} className="mb-6 text-[#a47b46] sm:mb-8" />

              <p className="font-serif text-4xl leading-[1.15] text-[#684842] sm:text-5xl lg:text-6xl">
                The art of
                <br />
                <span className="italic">being distinct.</span>
              </p>

              <div className="my-6 h-px w-16 bg-[#a47b46] sm:my-8" />

              <p className="max-w-[230px] text-[10px] leading-6 tracking-[0.13em] text-[#765b54] sm:text-xs">
                ELEGANCE IN EVERY DETAIL
              </p>

              <img
                src="/logo.png"
                alt="Roseluxary"
                className="mt-7 max-h-16 w-auto max-w-[150px] object-contain sm:mt-9 sm:max-h-20 sm:max-w-[180px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#8b7168] sm:flex"
      >
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ad8060] sm:text-xs">
            The Roseluxary philosophy
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#342522] sm:text-5xl lg:text-6xl">
            Beauty in the
            <br />
            <span className="italic text-[#b77980]">details.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-sm leading-8 text-[#786966] sm:text-base">
            We believe a remarkable experience begins with thoughtful design,
            clear communication and attention to the smallest details.
            Roseluxary brings these principles together in one distinctive
            digital destination.
          </p>
          <a
            href="#values"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#9c6469] transition hover:gap-3"
          >
            What we stand for <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

const values = [
  {
    number: '01',
    title: 'Privacy matters',
    description: 'Personal information deserves careful and transparent handling.',
  },
  {
    number: '02',
    title: 'Respect comes first',
    description: 'Clear boundaries and respectful interactions are fundamental.',
  },
  {
    number: '03',
    title: 'Details make a difference',
    description: 'A considered experience on every screen and every device.',
  },
]

function Values() {
  return (
    <section id="values" className="scroll-mt-24 bg-[#faf3ef] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ad8060] sm:text-xs">
            Our principles
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#342522] sm:text-5xl lg:text-6xl">
            A thoughtful way
            <br />
            <span className="italic text-[#b77980]">forward.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#786966] sm:text-base">
            A refined experience is built on trust, respect and clarity.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {values.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1}>
              <article className="group h-full border border-[#eadbd2] bg-[#fffdfb] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b5a9] hover:shadow-xl hover:shadow-[#684842]/5 sm:p-8 lg:p-9">
                <span className="font-serif text-3xl italic text-[#c39491]">
                  {item.number}
                </span>
                <h3 className="mt-7 font-serif text-2xl text-[#342522] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#786966]">
                  {item.description}
                </p>
                <div className="mt-7 h-px w-10 bg-[#c39491] transition-all duration-300 group-hover:w-16" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <img
          src="/logo.png"
          alt="Roseluxary"
          className="mx-auto mb-8 max-h-24 w-auto max-w-[210px] object-contain"
        />
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ad8060] sm:text-xs">
          Begin a conversation
        </p>
        <h2 className="mt-5 font-serif text-4xl text-[#342522] sm:text-5xl lg:text-6xl">
          Let's connect.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#786966] sm:text-base">
          Have a question? We would be happy to hear from you.
        </p>
        <p className="mt-7 text-xs text-[#9c6469]">
          Official contact details will be added after client approval.
        </p>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#eaded7] bg-[#fffaf7] px-5 py-7 sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-[11px] text-[#786966]">
          © {new Date().getFullYear()} Roseluxary. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] text-[#786966]">
          <a href="/privacy-policy" className="hover:text-[#b77980]">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-[#b77980]">
            Terms
          </a>
          <a href="#contact" className="hover:text-[#b77980]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
