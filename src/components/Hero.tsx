"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right blue glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent-blue/8 rounded-full blur-[120px]" />
        {/* Bottom-left purple glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[100px]" />
        {/* Center subtle red glow */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-accent-red/5 rounded-full blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            Pioneering Automotive Innovation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          Engineering the{" "}
          <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Future
          </span>
          <br />
          of Mobility
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          DriveOS Mobility builds next-generation software platforms for
          Software Defined Vehicles, intelligent embedded systems, and connected
          mobility ecosystems — shaping how the world moves.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group relative px-8 py-3.5 rounded-lg bg-accent-red text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-red/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Explore Our Solutions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-red to-accent-red/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-lg text-sm font-semibold text-text-secondary border border-border hover:border-accent-blue/40 hover:text-accent-blue transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
              Scroll
            </span>
            <div className="w-5 h-8 rounded-full border border-text-muted/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-accent-blue"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
