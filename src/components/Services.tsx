"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8l3 3-3 3" />
        <line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    ),
    title: "Software Defined Vehicles",
    description:
      "End-to-end SDV platforms enabling over-the-air updates, service-oriented architectures, and continuous vehicle evolution throughout its lifecycle.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Automotive Software",
    description:
      "Production-grade middleware, AUTOSAR-compliant stacks, and custom application software for powertrain, ADAS, and infotainment domains.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    title: "Embedded Systems",
    description:
      "High-performance embedded software for automotive ECUs, real-time operating systems, and safety-critical hardware abstraction layers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <circle cx="12" cy="14" r="4" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
        <path d="M5 10l-2 2" />
        <path d="M19 10l2 2" />
      </svg>
    ),
    title: "AI & Intelligent Mobility",
    description:
      "Machine learning pipelines for predictive maintenance, autonomous driving perception, and intelligent traffic optimization systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "EV Ecosystem",
    description:
      "Comprehensive electric vehicle software solutions including battery management systems, charging infrastructure, and energy optimization.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
        <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    title: "Connected Vehicle Platforms",
    description:
      "Cloud-connected vehicle platforms enabling V2X communication, fleet management, remote diagnostics, and seamless digital services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[50%] right-[-5%] w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Core{" "}
              <span className="text-accent-blue">Services</span>
            </h2>
            <p className="mt-4 text-text-secondary text-base lg:text-lg leading-relaxed">
              From silicon to cloud, we deliver the complete automotive software
              stack that powers the vehicles of tomorrow.
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="group relative h-full p-7 rounded-2xl bg-surface border border-border hover:border-accent-blue/30 transition-all duration-300">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/15 group-hover:border-accent-blue/30 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold text-text-primary tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
