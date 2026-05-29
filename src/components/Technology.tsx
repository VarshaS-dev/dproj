"use client";

import ScrollReveal from "./ScrollReveal";

const technologies = [
  {
    title: "Edge AI",
    description:
      "On-device neural network inference for real-time perception, sensor fusion, and decision-making at the vehicle edge — enabling autonomous capabilities without cloud dependency.",
    gradient: "from-accent-blue/20 to-accent-blue/5",
    borderHover: "hover:border-accent-blue/40",
    tag: "AI / ML",
    tagColor: "text-accent-blue bg-accent-blue/10",
    features: ["Neural Inference", "Sensor Fusion", "Edge Computing"],
  },
  {
    title: "Vehicle Software Platforms",
    description:
      "Modular, microservice-based vehicle OS architectures supporting POSIX, AUTOSAR Adaptive, and custom runtime environments for next-gen E/E architectures.",
    gradient: "from-accent-purple/20 to-accent-purple/5",
    borderHover: "hover:border-accent-purple/40",
    tag: "Platform",
    tagColor: "text-accent-purple bg-accent-purple/10",
    features: ["Microservices", "AUTOSAR", "Vehicle OS"],
  },
  {
    title: "Connected Mobility",
    description:
      "End-to-end connectivity solutions spanning V2X protocols, 5G integration, digital twin synchronization, and cloud-based fleet intelligence systems.",
    gradient: "from-accent-blue/15 to-accent-purple/10",
    borderHover: "hover:border-accent-blue/30",
    tag: "Connectivity",
    tagColor: "text-accent-blue bg-accent-blue/10",
    features: ["V2X", "5G Networks", "Digital Twins"],
  },
  {
    title: "Embedded Intelligence",
    description:
      "Safety-certified embedded solutions for automotive-grade MCUs and SoCs, optimized for deterministic performance, functional safety (ISO 26262), and cybersecurity.",
    gradient: "from-accent-red/10 to-accent-purple/10",
    borderHover: "hover:border-accent-red/30",
    tag: "Embedded",
    tagColor: "text-accent-red bg-accent-red/10",
    features: ["ISO 26262", "Cybersecurity", "Real-Time OS"],
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">
              Technology & Innovation
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for the{" "}
              <span className="text-accent-purple">Next Era</span>
            </h2>
            <p className="mt-4 text-text-secondary text-base lg:text-lg leading-relaxed">
              Our technology stack is purpose-built for the challenges of modern
              automotive — performance, safety, and intelligence at scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Technology Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {technologies.map((tech, i) => (
            <ScrollReveal
              key={tech.title}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`group relative h-full p-8 rounded-2xl bg-surface border border-border ${tech.borderHover} transition-all duration-300`}
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Tag */}
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium tracking-wide ${tech.tagColor}`}
                  >
                    {tech.tag}
                  </span>

                  <h3 className="mt-4 text-xl lg:text-2xl font-bold text-text-primary tracking-tight">
                    {tech.title}
                  </h3>

                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tech.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full text-xs font-medium text-text-secondary bg-background border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
