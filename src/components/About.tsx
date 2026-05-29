"use client";

import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "150+", label: "Engineers Worldwide", accent: "text-accent-blue" },
  { value: "40+", label: "OEM Partnerships", accent: "text-accent-purple" },
  { value: "12M+", label: "Vehicles Powered", accent: "text-accent-blue" },
  { value: "99.9%", label: "System Uptime", accent: "text-accent-red" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                About Us
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Driving Innovation in{" "}
                <span className="text-accent-purple">Automotive</span>{" "}
                Technology
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed text-base lg:text-lg">
                DriveOS Mobility is at the forefront of the automotive software
                revolution. We design and deliver cutting-edge platforms that
                power the next generation of Software Defined Vehicles —
                blending deep embedded expertise with cloud-native
                architectures and AI-driven intelligence.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed text-sm lg:text-base">
                Our mission is to accelerate the transition to intelligent,
                connected, and sustainable mobility by building the software
                backbone that automakers and mobility providers trust worldwide.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
                <div className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent-blue/20 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div
                      className={`text-3xl lg:text-4xl font-bold tracking-tight ${stat.accent}`}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-text-muted font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
