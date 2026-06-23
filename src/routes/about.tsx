import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "../assets/drift-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Drift Codes" },
      { name: "description", content: "Drift Codes is a Sri Lanka based software, application and AI development studio." },
      { property: "og:title", content: "About — Drift Codes" },
      { property: "og:description", content: "Meet the team behind Drift Codes." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Craft over volume", d: "We ship fewer things, polished hard. Every detail earns its place." },
  { t: "Honest engineering", d: "No buzzword soup. We tell you what works, what does not, and why." },
  { t: "Move with intent", d: "Drift means motion with direction. We don't move fast and break — we move sharp." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid-orange opacity-50" />
        <div className="absolute -top-20 right-10 h-80 w-80 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)] animate-fade-up">About</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold animate-fade-up" style={{ animationDelay: "0.1s" }}>
              A studio from <span className="text-gradient-brand">Sri Lanka</span>, building for the world.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Drift Codes was founded with a simple idea — small, senior teams ship better software than large agencies.
              We design, engineer and launch software, mobile apps and AI products for ambitious founders and teams.
            </p>
          </div>
          <div className="lg:col-span-5 grid place-items-center">
            <img src={logoAsset} alt="" className="h-64 w-64 animate-float drop-shadow-[0_20px_60px_rgba(255,80,20,0.55)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-5">
        {VALUES.map((v, i) => (
          <div key={v.t} className="rounded-3xl border border-border bg-card p-7">
            <div className="font-display text-4xl font-bold text-gradient-brand">0{i + 1}</div>
            <h3 className="mt-4 font-display text-xl font-semibold">{v.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-4 gap-10">
          {[
            { k: "2026", v: "Founded" },
            { k: "30+", v: "Projects shipped" },
            { k: "12", v: "Team members" },
            { k: "6", v: "Countries served" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl font-bold text-gradient-brand">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
