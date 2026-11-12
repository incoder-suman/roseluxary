
import React from "react";

const Icon = ({ name, size = 18 }) => {
    const icons = {
        // instagram: (
        //     <>
        //         <rect x="3" y="3" width="18" height="18" rx="5" />
        //         <circle cx="12" cy="12" r="4" />
        //         <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        //     </>
        // ),
        whatsapp: (
            <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 0 0 23.5 12a11.8 11.8 0 0 0-3-8.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9 9 0 1 1 12 21Zm5-6.7c-.3-.2-1.7-.9-2-.9s-.5-.2-.7.2-.8.9-1 1.1-.4.2-.7.1a7.5 7.5 0 0 1-3.7-3.2c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5 2.4 3.7 5.8 5c.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z" />
        ),
        telegram: (
            <path d="M21.9 3.2 18.6 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.5 2c.9-.3 1.7.2 1.4 1.2Z" />
        ),
        linkedin: (
            <>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </>
        ),
        facebook: (
            <path d="M15 3h4V0h-4a6 6 0 0 0-6 6v3H6v4h3v8h4v-8h4l1-4h-5V6a2 2 0 0 1 2-3Z" />
        ),
        arrow: (
            <>
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
            </>
        ),
        right: (
            <>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </>
        ),
        mail: (
            <>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
            </>
        ),
        phone: (
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.45 2.7a2 2 0 0 1-.57 1.68L7.7 9.39a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 1.68-.57l2.7.45a2 2 0 0 1 1.63 2.94Z" />
        ),
        pin: (
            <>
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
            </>
        )
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
            aria-hidden="true"
        >
            {icons[name]}
        </svg>
    );
};

export default function FooterR() {
    const services = [
        "Web Development",
        "UI/UX Design",
        "SEO Optimization",
        "Digital Marketing",
        "E-Commerce Solutions",
        "Website Maintenance"
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" }
    ];

    const socialLinks = [
        // { icon: "instagram", href: "#", label: "Instagram" },
        // { icon: "linkedin", href: "#", label: "LinkedIn" },
        // { icon: "facebook", href: "#", label: "Facebook" },
        { icon: "whatsapp", href: "https://wa.me/919876543210", label: "WhatsApp" },
        { icon: "telegram", href: "https://t.me/yourusername", label: "Telegram" }
    ];

    return (
        <footer className="relative overflow-hidden bg-[#151515] text-white">
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#B77980]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-10 lg:px-8">
                <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <a href="/" className="inline-block text-3xl font-bold tracking-tight">
                            Rose<span className="text-[#B77980]">Luxury</span>
                        </a>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
                            100% Satisfaction And 100% Real Escort Service With Five Star Hotel.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:border-[#B77980] hover:bg-[#B77980] hover:text-white"
                                >
                                    <Icon name={icon} size={19} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.18em]">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group flex w-fit items-center gap-2 text-sm text-white/55 transition hover:text-[#B77980]"
                                    >
                                        <span>{link.name}</span>
                                        <Icon
                                            name="arrow"
                                            size={14}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.18em]">
                            Our Services
                        </h3>

                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="/services"
                                        className="text-sm text-white/55 transition hover:text-[#B77980]"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.18em]">
                            Get In Touch
                        </h3>

                        <div className="space-y-5">
                            <a
                                href="mailto:info@webincoder.com"
                                className="group flex gap-3"
                            >
                                <span className="mt-1 text-[#B77980]">
                                    <Icon name="mail" size={18} />
                                </span>
                                <span className="text-sm text-white/60 transition group-hover:text-white">
                                    info@webincoder.com
                                </span>
                            </a>

                            <a
                                href="tel:+910000000000"
                                className="group flex gap-3"
                            >
                                <span className="mt-1 text-[#B77980]">
                                    <Icon name="phone" size={18} />
                                </span>
                                <span className="text-sm text-white/60 transition group-hover:text-white">
                                    +91 00000 00000
                                </span>
                            </a>

                            <div className="flex gap-3">
                                <span className="mt-1 text-[#B77980]">
                                    <Icon name="pin" size={18} />
                                </span>
                                <span className="text-sm leading-6 text-white/60">
                                    India
                                </span>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#B77980] transition hover:gap-4"
                        >
                            Let's Talk <Icon name="right" size={16} />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} WebInCoder. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
                        <a href="/privacy-policy" className="transition hover:text-[#B77980]">
                            Privacy Policy
                        </a>

                        <a href="/terms-and-conditions" className="transition hover:text-[#B77980]">
                            Terms & Conditions
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-xs text-white/50 transition hover:text-[#B77980]"
                    >
                        Back to top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}
