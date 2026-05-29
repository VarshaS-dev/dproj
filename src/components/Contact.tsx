"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Frontend only — simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-[20%] right-[-5%] w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Let&apos;s Build the{" "}
                <span className="text-accent-red">Future</span> Together
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed text-base lg:text-lg">
                Whether you&apos;re an OEM looking to accelerate your SDV
                strategy, a mobility startup seeking embedded expertise, or a
                technology partner exploring collaboration — we&apos;d love to
                hear from you.
              </p>

              {/* Contact Info Items */}
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Email</div>
                    <div className="text-sm text-text-muted">contact@driveos.io</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Location</div>
                    <div className="text-sm text-text-muted">Munich, Germany</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-surface border border-border"
            >
              {/* Success Overlay */}
              {submitted && (
                <div className="absolute inset-0 rounded-2xl bg-surface/95 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-text-primary">Message Sent!</p>
                  <p className="mt-1 text-sm text-text-muted">We&apos;ll be in touch shortly.</p>
                </div>
              )}

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200 outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-accent-red text-white font-semibold text-sm hover:bg-accent-red/90 hover:shadow-lg hover:shadow-accent-red/20 active:scale-[0.98] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
