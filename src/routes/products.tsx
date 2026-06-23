import { createFileRoute, Link } from "@tanstack/react-router";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import pulseAppScreen from "@/assets/pulse-app-screen.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Drift Codes" },
      { name: "description", content: "Our products including Pulse, a next-gen fitness app by Drift Codes." },
      { property: "og:title", content: "Products — Drift Codes" },
      { property: "og:description", content: "Pulse and other products built by Drift Codes." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const reduced = useReducedMotion();
  return (
    <>
      {/* Page-wide animated accents — orange/black. Hidden under reduced motion. */}
      {!reduced && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="services-orb services-orb-1" />
          <div className="services-orb services-orb-2" />
          <div className="services-beam services-beam-1" />
          <div className="services-beam services-beam-2" />
          <div className="absolute inset-0 bg-grid-orange opacity-[0.05] animate-grid-pan" />
        </div>
      )}
      <div className="relative z-10">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 bg-grid-orange opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)] animate-fade-up">Products</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Built by Drift. <span className="text-gradient-brand">Loved in the wild.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We ship our own products too. Here is what we are working on right now.
            </p>
          </div>
        </section>

        {/* PULSE — uses ArtyClick Lime */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d130a 100%)" }}
        >
          <div
            className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
            style={{ background: "var(--lime)" }}
          />
          <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(191,255,0,0.12)", color: "var(--lime)", border: "1px solid rgba(191,255,0,0.4)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--lime)" }} />
                Now in beta
              </div>
              <h2 className="mt-5 font-display text-6xl md:text-7xl font-bold" style={{ color: "var(--lime)" }}>
                Pulse.
              </h2>
              <p className="mt-4 text-xl font-medium text-white/90">A fitness app that actually moves with you.</p>
              <p className="mt-4 max-w-xl text-white/60">
                Pulse blends adaptive workouts, real-time heart-rate intelligence and a coaching layer that gets sharper the more you train.
                Designed for the people who chase progress, not streaks.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  "Adaptive training plans",
                  "Live HR & zone tracking",
                  "AI form coach",
                  "Wearable sync (Apple, Garmin, Fitbit)",
                  "Recovery & sleep insights",
                  "Community challenges",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="grid place-items-center h-5 w-5 rounded-full text-black font-bold text-[11px]" style={{ background: "var(--lime)" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-black glow-lime hover:scale-[1.03] transition"
                  style={{ background: "var(--lime)" }}
                >
                  Join the beta →
                </a>
                <a href="#" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[var(--lime)] transition">
                  Watch demo
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto h-[560px] w-[280px]">
                <div
                  className="absolute inset-0 rounded-xl blur-2xl opacity-40"
                  style={{ background: "var(--lime)" }}
                />
                <div
                  className="relative h-full w-full overflow-hidden rounded-xl border-[6px] bg-black"
                  style={{ borderColor: "#1a1a1a", boxShadow: "0 30px 80px -20px rgba(191,255,0,0.35)" }}
                >
                  <img
                    src={pulseAppScreen}
                    alt="Pulse fitness app home screen showing today's focus workout and daily vitality stats"
                    className="block h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming soon */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <h3 className="font-display text-3xl font-bold">More products on the way</h3>
          <p className="mt-2 text-muted-foreground">We are quietly cooking. Want early access? <Link to="/contact" className="text-[var(--brand)] hover:underline">Get in touch</Link>.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {["Stride · Logistics OS", "Echo · AI Voice Agents", "Loom · Team Productivity"].map((n) => (
              <div key={n} className="rounded-3xl border border-dashed border-border p-7 text-muted-foreground">
                <div className="text-xs uppercase tracking-widest text-[var(--brand)]">Coming soon</div>
                <div className="mt-2 font-display text-xl font-semibold text-foreground">{n}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
