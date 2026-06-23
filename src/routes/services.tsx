import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Code2, Smartphone, Brain, Cloud, Palette, Rocket,
  ArrowUpRight, Check, Sparkles,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Drift Codes" },
      { name: "description", content: "Software, mobile, AI, cloud and design services from Drift Codes — a Sri Lanka based studio." },
      { property: "og:title", content: "Services — Drift Codes" },
      { property: "og:description", content: "End-to-end engineering and AI services." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Code2,
    t: "Software Development",
    d: "Web apps, SaaS platforms, internal tools and APIs engineered for scale and reliability.",
    bullets: ["Full-stack web platforms", "REST & GraphQL APIs", "Hardened auth & billing"],
    tags: ["React", "Node.js", "Postgres", "AWS"],
    cta: "Brief a build",
  },
  {
    icon: Smartphone,
    t: "Mobile App Development",
    d: "iOS, Android and cross-platform apps with native feel, smooth motion and tight performance.",
    bullets: ["Native iOS & Android", "Cross-platform RN / Flutter", "Offline-first sync"],
    tags: ["Swift", "Kotlin", "React Native", "Flutter"],
    cta: "Plan an app",
  },
  {
    icon: Brain,
    t: "AI & Machine Learning",
    d: "LLM features, RAG, computer vision, agents and ML pipelines wired into your product.",
    bullets: ["LLM apps & RAG pipelines", "Custom agents & tools", "Vision & forecasting models"],
    tags: ["OpenAI", "LangChain", "PyTorch", "Vector DBs"],
    cta: "Scope an AI feature",
  },
  {
    icon: Cloud,
    t: "Cloud & DevOps",
    d: "Infra as code, CI/CD, observability and cost-tuned cloud architectures that just run.",
    bullets: ["IaC & multi-env setup", "CI/CD with rollbacks", "Monitoring & cost tuning"],
    tags: ["AWS", "GCP", "Docker", "Terraform"],
    cta: "Audit my cloud",
  },
  {
    icon: Palette,
    t: "UI / UX Design",
    d: "Brand-aligned product design, prototyping and design systems that ship — not just decks.",
    bullets: ["Product & UX design", "Design systems", "Motion & micro-interactions"],
    tags: ["Figma", "Design Systems", "Motion"],
    cta: "Redesign with us",
  },
  {
    icon: Rocket,
    t: "Consulting & MVPs",
    d: "Idea-to-MVP in weeks, with senior engineering and product partnership end-to-end.",
    bullets: ["Discovery & roadmap", "2-week build sprints", "Investor-ready demos"],
    tags: ["Discovery", "Sprints", "Roadmap"],
    cta: "Launch an MVP",
  },
];

const STEPS = [
  { n: "01", t: "Discover", d: "We unpack the problem, audience and constraints in a short kickoff." },
  { n: "02", t: "Design", d: "Rapid prototyping and a tight feedback loop until the experience clicks." },
  { n: "03", t: "Build", d: "Senior engineers ship in two-week cycles with weekly demos." },
  { n: "04", t: "Launch & Evolve", d: "We monitor, iterate and keep the product sharp post-launch." },
];

function ServicesPage() {
  const reduced = useReducedMotion();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <>
      {/* Page-wide animated accents (orange on black). Hidden when reduced motion is on. */}
      {!reduced && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="services-orb services-orb-1" />
          <div className="services-orb services-orb-2" />
          <div className="services-orb services-orb-3" />
          <div className="services-beam services-beam-1" />
          <div className="services-beam services-beam-2" />
          <div className="absolute inset-0 bg-grid-orange opacity-[0.06]" />
        </div>
      )}
      <div className="relative z-10">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid-orange opacity-40 animate-grid-pan" />
        <div className="absolute -top-24 right-10 h-[360px] w-[360px] rounded-full bg-gradient-brand opacity-25 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground animate-fade-up">
            <Sparkles className="h-3 w-3 text-[var(--brand)]" />
            Services
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Engineering, design & AI — <span className="text-gradient-brand">under one roof</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            One tight team across product, design and engineering. No agency hand-offs, no bloated retainers — just senior people who ship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact" className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-black glow-brand hover:scale-[1.03] transition">
              Book a free intro call
            </Link>
            <a href="#services-grid" className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:border-[var(--brand)] transition">
              Explore services ↓
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div data-reveal className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">What we do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Six capabilities. One team.</h2>
          </div>
          <p data-reveal className="reveal max-w-sm text-sm text-muted-foreground">
            Pick a starting point — we'll wire the rest of the stack around it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.t}
                data-reveal
                onMouseMove={handleSpotlight}
                className="reveal service-card group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-[var(--brand)]/60"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* spotlight */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                     style={{ background: "radial-gradient(360px circle at var(--mx,50%) var(--my,50%), rgba(255,122,43,0.15), transparent 45%)" }} />
                {/* top accent line */}
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/70 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="relative flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-brand grid place-items-center text-black glow-brand transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <span className="font-display text-sm text-muted-foreground">/{(i + 1).toString().padStart(2, "0")}</span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-semibold group-hover:text-[var(--brand)] transition">{s.t}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.d}</p>

                <ul className="relative mt-5 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/85">
                      <Check className="h-3.5 w-3.5 text-[var(--brand)]" strokeWidth={3} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground">{t}</span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] group/cta"
                  >
                    {s.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </Link>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">2–8 weeks</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div data-reveal className="reveal max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">Process</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">How we work</h2>
            <p className="mt-3 text-muted-foreground">A simple, opinionated process designed to ship — fast, then keep shipping.</p>
          </div>

          <div className="relative mt-14 grid md:grid-cols-4 gap-5">
            {/* connecting line */}
            <div className="hidden md:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-transparent" />
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                data-reveal
                className="reveal relative rounded-3xl border border-border bg-background p-7 hover:border-[var(--brand)]/60 transition"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="absolute -top-3 left-7 inline-flex h-6 items-center rounded-full bg-gradient-brand px-3 text-[11px] font-bold text-black glow-brand">
                  STEP {s.n}
                </div>
                <div className="font-display text-5xl font-bold text-gradient-brand">{s.n}</div>
                <h4 className="mt-4 font-display text-lg font-semibold">{s.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-border bg-border">
          {[
            { k: "30+", v: "Projects shipped" },
            { k: "12", v: "Senior engineers" },
            { k: "6", v: "Countries served" },
            { k: "<24h", v: "Avg. reply time" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-8 text-center">
              <div className="font-display text-4xl font-bold text-gradient-brand">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1a0a05] to-black p-10 md:p-16">
          <div className="absolute inset-0 bg-grid-orange opacity-25" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-5xl font-bold">Ready to brief us?</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Tell us about your project — we reply within one working day with a short plan and a price range.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-black glow-brand hover:scale-[1.03] transition">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
