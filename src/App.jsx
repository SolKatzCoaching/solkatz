import React, { useState } from "react";.
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/bodoni-moda/700.css";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Gem, MessageCircle, Sparkles, Target, TrendingUp } from "lucide-react";

const brand = {
  ink: "#B87333",
  navy: "#2F265E",
  steel: "#9EA0A0",
  cream: "#F7F2EA",
  paper: "#FFFCF6",
};

const priorities = [
  "Increase Income",
  "Increase Impact",
  "Increase Productivity",
  "Increase Satisfaction",
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Money & Growth",
    text: "Clear thinking around income, opportunity, pricing, operations, and the numbers that actually matter.",
  },
  {
    icon: Target,
    title: "Metrics & Direction",
    text: "Stop guessing. Start measuring your success with clear metrics and a sharper next step.",
  },
  {
    icon: Sparkles,
    title: "Life & Fulfillment",
    text: "Business growth that also considers energy, health, relationships, spirituality, and real satisfaction.",
  },
];

const testimonials = [
  {
    quote:
      "Shloimy’s wisdom transcends his years. If you're seeking new levels of financial prosperity, he can show you how to achieve that through a holistic emphasis on fulfillment and positive energy.",
    name: "Dovid Winter",
    role: "Business Owner, Concierge IT",
  },
  {
    quote:
      "Sol brings out the best in people due to his friendly personality and persistence. He helps you define your goals with clarity and get there step by step.",
    name: "Judah Farkas",
    role: "VP of Operations, Frontier Education",
  },
  {
    quote:
      "Sol doesn’t just answer questions, he reframes them. Every conversation moves the needle. If you're serious about growth, Sol is who you call.",
    name: "Moshe Hecht",
    role: "Founder & CEO, Mozart Company",
  },
];

function Logo({ size = "normal", color = "navy" }) {
  const sizeClass =
    size === "large"
      ? "text-6xl md:text-7xl"
      : "text-4xl";

  const colorClass = color === "light" ? "text-[#FFFCF6]" : "text-[#2F265E]";

  return (
    <div
      className={`${sizeClass} ${colorClass} leading-none tracking-[-0.045em]`}
      style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: 700,
        letterSpacing: '-0.04em',
      }}
    >
      SolKatz
    </div>
  );
}

function Button({ children, className = "" }) {
  return (
    <a
      href="#apply"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B87333] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#B87333]/20 transition hover:-translate-y-0.5 hover:bg-[#9C6127] ${className}`}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#B87333]">
      {children}
    </div>
  );
}

export default function SolKatzHomepage() {
  const [submitted, setSubmitted] = useState(false);
  const headingFont = {
    fontFamily: '"Bodoni Moda", "Cormorant Garamond", serif',
    fontWeight: 700,
    letterSpacing: '-0.04em',
  };

  const bodyFont = {
    fontFamily: '"Manrope", sans-serif',
    fontWeight: 400,
  };
  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#211B36]" style={bodyFont}>
      <div className="absolute inset-0 -z-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#2F265E 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

      <header className="sticky top-0 z-50 border-b border-[#2F265E]/10 bg-[#FFFCF6]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          <a href="#top" aria-label="SolKatz home">
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#2F265E]/75 md:flex">
            <a href="#next-level" className="hover:text-[#B87333]">Next Level</a>
            <a href="#method" className="hover:text-[#B87333]">Method</a>
            <a href="#experience" className="hover:text-[#B87333]">Clients</a>
          </nav>
          <a href="#apply" className="rounded-2xl border border-[#2F265E]/15 px-5 py-3 text-sm font-bold text-[#2F265E] hover:bg-[#2F265E] hover:text-white">
            Apply
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B87333]/25 bg-white/60 px-4 py-2 text-sm font-semibold text-[#2F265E] shadow-sm">
              <Gem size={16} className="text-[#B87333]" />
              Executive coaching for VIP business people
            </div>
            <h1 style={headingFont} className="max-w-5xl text-6xl leading-[0.96] tracking-tight text-[#2F265E] md:text-8xl">
              Take Your Business to the Next Level.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#3E3B4D]/80">
              Got business problems? We love big ones. The bigger the problem, the bigger the opportunity hiding behind it.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button>Apply to Work With SolKatz</Button>
              <a href="#experience" className="inline-flex items-center justify-center rounded-2xl border border-[#2F265E]/15 bg-white/50 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2F265E] hover:bg-white">
                Hear Client Experience
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#B87333]/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-[#2F265E]/15 blur-2xl" />
            <div className="relative rounded-[2rem] border border-[#2F265E]/10 bg-[#FFFCF6] p-6 shadow-2xl shadow-[#2F265E]/10">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#2F265E] shadow-2xl shadow-[#2F265E]/30">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                  poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-young-business-team-working-together-1560082521733?download=1080p" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-br from-[#1E183D]/95 via-[#2F265E]/82 to-[#B87333]/30" />

                <div className="relative flex min-h-[620px] flex-col justify-end p-10 text-white">
                  <div className="max-w-xl">
                    <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">
                      Executive Strategic Advisory
                    </div>

                    <Logo size="large" color="light" />

                    <div className="mt-3 text-lg tracking-[0.22em] text-[#E7C79F] uppercase">
                      Your Guide on the Side
                    </div>

                    <div
                      style={headingFont}
                      className="mt-8 text-5xl leading-[1.02] text-white md:text-6xl"
                    >
                      The conversation that changes your trajectory.
                    </div>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-white/78">
                      Powerful guidance for leaders navigating growth, uncertainty, opportunity, and the next chapter of their business and life.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                        Clarity
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                        Leadership
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                        Wealth
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                        Fulfillment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="next-level" className="px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl text-center">
          <SectionLabel>What is your next level?</SectionLabel>

          <div className="mx-auto max-w-3xl">
            <h2
              style={headingFont}
              className="text-5xl leading-[1] text-[#2F265E] md:text-7xl"
            >
              Choose the future you want to grow into.
            </h2>

            <p className="mt-6 text-xl leading-9 text-[#3E3B4D]/70">
              Strategic growth for business owners who want more clarity, momentum, fulfillment, and measurable progress.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {priorities.map((item) => (
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                key={item}
                className="group rounded-[2rem] border border-white/40 bg-white/70 p-8 shadow-xl shadow-[#2F265E]/5 backdrop-blur-xl"
              >
                <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-[#B87333]/0 via-[#B87333] to-[#B87333]/0 opacity-60" />

                <div
                  style={headingFont}
                  className="text-3xl leading-tight text-[#2F265E]"
                >
                  {item}
                </div>

                <p className="mt-4 text-base leading-7 text-[#3E3B4D]/65">
                  Elevate your business and personal trajectory with focused guidance and measurable outcomes.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="px-6 py-18 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>The SolKatz conversation</SectionLabel>
            <h2 style={headingFont} className="text-5xl leading-tight text-[#2F265E] md:text-6xl">
              Stop guessing. Start measuring.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3E3B4D]/75">
              Guidance, advice, consulting, coaching, money, health, friends, spirituality, connection, relationships, trust, and G-d — brought into one focused business conversation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[2rem] border border-[#2F265E]/10 bg-[#FFFCF6] p-8 shadow-lg shadow-[#2F265E]/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B87333]/10 text-[#B87333]">
                  <Icon size={26} />
                </div>
                <h3 style={headingFont} className="text-3xl text-[#2F265E]">{title}</h3>
                <p className="mt-4 leading-7 text-[#3E3B4D]/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#2F265E] shadow-2xl shadow-[#2F265E]/15 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden p-8 text-white md:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#B87333]/30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <SectionLabel>Exclusive availability</SectionLabel>
              <h2 style={headingFont} className="text-5xl leading-tight text-white md:text-6xl">
                Apply for a private SolKatz conversation.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                This is for business owners and leaders ready to think bigger, move clearer, and unlock the opportunity inside their current challenges.
              </p>

              <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <Logo size="large" color="light" />
                <div className="mt-4 h-px w-24 bg-white/25" />
                <p className="mt-5 text-white/75">
                  To help you shine with clarity, confidence, and purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFCF6] p-6 md:p-10">
            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center rounded-[2rem] border border-[#2F265E]/10 bg-white p-10 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#B87333]/10 text-[#B87333]">
                  <Sparkles size={30} />
                </div>
                <h3 style={headingFont} className="text-4xl leading-tight text-[#2F265E]">
                  Application received.
                </h3>
                <p className="mt-5 max-w-md text-lg leading-8 text-[#3E3B4D]/70">
                  Thank you. The next step is a private review, followed by a conversation if it feels aligned.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-[2rem] border border-[#2F265E]/10 bg-white p-6 shadow-xl shadow-[#2F265E]/5 md:p-8"
              >
                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#B87333]">
                    Private application
                  </div>
                  <h3 style={headingFont} className="mt-3 text-4xl leading-tight text-[#2F265E]">
                    Tell us where you are and where you want to go.
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">Full name</span>
                    <input required className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]" placeholder="Your name" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">Email</span>
                    <input required type="email" className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]" placeholder="you@company.com" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">Phone</span>
                    <input className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]" placeholder="Best number" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">Business / company</span>
                    <input className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]" placeholder="Company name" />
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">Current business stage</span>
                    <select className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]">
                      <option>Choose one</option>
                      <option>Starting / rebuilding</option>
                      <option>Growing steadily</option>
                      <option>Scaling quickly</option>
                      <option>Established and ready for a new level</option>
                    </select>
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">What is your biggest business challenge right now?</span>
                    <textarea required rows="4" className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]" placeholder="Share the real problem you want to solve..." />
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-[#2F265E]">What would make this a powerful win for you?</span>
                    <textarea rows="4" className="w-full rounded-2xl border border-[#2F265E]/10 bg-[#F7F2EA] px-4 py-4 outline-none focus:border-[#B87333]" placeholder="Income, impact, clarity, productivity, fulfillment..." />
                  </label>
                </div>

                <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B87333] px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#B87333]/20 transition hover:-translate-y-0.5 hover:bg-[#9C6127]">
                  Apply for consideration
                  <ArrowRight size={18} />
                </button>

                <p className="mt-4 text-center text-sm leading-6 text-[#3E3B4D]/55">
                  This preview saves no data yet. On launch, this can connect to Tally, Formspree, Airtable, Google Sheets, or your CRM.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-18 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Hear the experience directly from clients</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-[2rem] border border-[#2F265E]/10 bg-[#FFFCF6] p-8 shadow-lg shadow-[#2F265E]/5">
                <p className="text-lg leading-8 text-[#3E3B4D]/85">“{t.quote}”</p>
                <div className="mt-8 border-t border-[#2F265E]/10 pt-5">
                  <div style={headingFont} className="text-2xl text-[#2F265E]">{t.name}</div>
                  <div className="mt-1 text-sm font-medium text-[#B87333]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2F265E]/10 bg-[#FFFCF6] px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <div className="text-sm text-[#3E3B4D]/60">© 2026 SolKatz. Executive Coaching.</div>
        </div>
      </footer>
    </main>
  );
}
