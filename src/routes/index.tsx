import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "../assets/drift-logo.png";
import heroVideo from "../assets/hero-loop.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drift Codes — Software, App & AI Development from Sri Lanka" },
      { name: "description", content: "Drift Codes designs and ships software, mobile and AI products. Sri Lanka based, globally driven." },
      { property: "og:title", content: "Drift Codes — Software, App & AI Development" },
      { property: "og:description", content: "Sri Lanka based studio crafting software, apps and AI." },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Init reduced-motion preference from storage or system setting
  useEffect(() => {
    const stored = localStorage.getItem("drift-reduced-motion");
    if (stored !== null) setReduced(stored === "1");
    else if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) setReduced(true);
  }, []);

  const toggleReduced = () => {
    setReduced((r) => {
      const next = !r;
      localStorage.setItem("drift-reduced-motion", next ? "1" : "0");
      window.dispatchEvent(new Event("drift-motion-change"));
      return next;
    });
  };

  // Scroll progress bar + section tracking
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      const sections = document.querySelectorAll<HTMLElement>("[data-section]");
      const mid = window.scrollY + window.innerHeight / 2;
      let current = 0;
      sections.forEach((s, i) => {
        if (s.offsetTop <= mid) current = i;
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const sectionLabels = ["Intro", "Showreel", "Capabilities", "Connect"];

  const scrollToSection = (i: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(`section-${i}`);
    if (!el) return;
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  // Mouse parallax for hero
  useEffect(() => {
    if (reduced) { setMouse({ x: 0, y: 0 }); return; }
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduced]);

  // Pause/play video when reduced toggles
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) { v.pause(); setPlaying(false); }
    else { v.play().then(() => setPlaying(true)).catch(() => { }); }
  }, [reduced]);

  // Scroll reveal
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
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="section-0" data-section ref={heroRef} className="relative overflow-hidden">
        {/* Autoplay background video (disabled when reduced motion is on) */}
        {!reduced && (
          <video
            ref={videoRef}
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid-orange animate-grid-pan opacity-40" />
        <div
          className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-brand opacity-30 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mouse.x * 40}px, ${mouse.y * 40}px)` }}
        />
        <div
          className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mouse.x * -50}px, ${mouse.y * -50}px)` }}
        />
        {/* Floating orbs */}
        {[
          { s: 14, t: 18, l: 22, d: "0s" },
          { s: 8, t: 60, l: 8, d: "1.2s" },
          { s: 10, t: 30, l: 78, d: "2s" },
          { s: 6, t: 75, l: 64, d: "0.6s" },
        ].map((o, i) => (
          <span
            key={i}
            className="pointer-events-none absolute rounded-full bg-[var(--brand)]/60 animate-float"
            style={{
              width: o.s, height: o.s, top: `${o.t}%`, left: `${o.l}%`,
              animationDelay: o.d, boxShadow: "0 0 24px rgba(255,122,43,0.7)",
            }}
          />
        ))}

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] animate-pulse" />
              Studio · Colombo, Sri Lanka
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We build software <br className="hidden md:inline" />
              that <span className="text-gradient-brand shine-text">drifts ahead</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Drift Codes is a software, application and AI development company
              shaping digital products end-to-end — from idea to launch and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/products" className="group relative overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-black glow-brand hover:scale-[1.03] transition">
                <span className="relative z-10">See our products</span>
                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
              <Link to="/services" className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:border-[var(--brand)] transition">
                What we do →
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-md animate-fade-up" style={{ animationDelay: "0.55s" }}>
              {[
                { k: 30, suffix: "+", v: "Projects" },
                { k: 12, suffix: "", v: "Engineers" },
                { k: 6, suffix: "", v: "Countries" },
              ].map((s) => (
                <div key={s.v} className="min-w-0">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-brand">
                    <Counter to={s.k} />{s.suffix}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className="relative mx-auto h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] max-w-full transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(900px) rotateY(${mouse.x * 18}deg) rotateX(${mouse.y * -18}deg)`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-3xl animate-pulse" />
              {/* orbit rings */}
              <div className="absolute inset-0 rounded-full border border-[var(--brand)]/30 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-[var(--brand)]/20 animate-spin-reverse" />
              <div className="absolute inset-16 rounded-full border border-dashed border-[var(--brand)]/15 animate-spin-slow" />
              <img src={logoAsset} alt="Drift Codes logo" className="relative h-full w-full object-contain animate-float drop-shadow-[0_20px_60px_rgba(255,80,20,0.55)]" />
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-border/60 bg-card/30 py-5 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 px-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["Software", "•", "Mobile Apps", "•", "AI Development", "•", "Cloud", "•", "Design Systems", "•", "Web Platforms", "•"].map((w, j) => (
                <span key={`${i}-${j}`}>{w}</span>
              ))
            )}
          </div>
        </div>

      </section>

      {/* SHOWREEL — animated visualization */}
      <section id="section-1" data-section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">Live in motion</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Code, ship, <span className="text-gradient-brand">repeat.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              From the first commit to a production deploy, our pipeline keeps
              your product flying. Watch it pulse — that's how our team thinks.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Continuous delivery", "Real-time analytics", "AI-assisted reviews"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] animate-pulse" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="reveal">
            <LiveCodeEditor />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="section-2" data-section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">What we do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-2xl">A studio engineered for product velocity.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-[var(--brand)] hover:underline">All services →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Software Development", d: "Robust web platforms, internal tools and SaaS built on modern stacks." },
            { t: "Mobile Applications", d: "Native-quality iOS & Android apps with delightful UX and tight performance." },
            { t: "AI Development", d: "LLM features, computer vision, agents and ML pipelines wired into your product." },
          ].map((c, i) => (
            <div
              key={c.t}
              data-reveal
              className="reveal tilt-card group relative rounded-3xl border border-border bg-card p-7 hover:border-[var(--brand)]/60 transition overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(255,122,43,0.18), transparent 40%)" }} />
              <div className="h-12 w-12 rounded-2xl bg-gradient-brand grid place-items-center text-black font-bold text-xl glow-brand transition-transform group-hover:rotate-6 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold group-hover:text-[var(--brand)] transition">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="section-3" data-section className="mx-auto max-w-7xl px-6 pb-24">
        <div data-reveal className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1a0a05] to-black p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="absolute inset-0 bg-grid-orange opacity-30" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">Have a product in mind? Let's build it together.</h3>
            <p className="mt-3 text-muted-foreground max-w-xl">Tell us about your idea — we reply within one working day.</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-black glow-brand hover:scale-[1.03] transition">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Counter({ to, duration = 1400 }: { to: number; duration?: number }) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <>{n}</>;
}

const CODE_LINES: { t: string; c?: string }[] = [
  { t: "import { deploy } from '@drift/ci'", c: "text-[#ff9d6b]" },
  { t: "import { ai } from '@drift/agents'", c: "text-[#ff9d6b]" },
  { t: "" },
  { t: "export async function ship(app) {", c: "text-[#7dd3fc]" },
  { t: "  const review = await ai.review(app)", c: "text-foreground/90" },
  { t: "  if (review.ok) {", c: "text-foreground/90" },
  { t: "    await deploy(app, { env: 'prod' })", c: "text-[#bfff00]" },
  { t: "    return { status: 'live' }", c: "text-foreground/90" },
  { t: "  }", c: "text-foreground/90" },
  { t: "}", c: "text-[#7dd3fc]" },
];

function LiveCodeEditor() {
  const [typed, setTyped] = useState<string[]>([""]);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let line = 0;
    let col = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (line >= CODE_LINES.length) {
        // reset loop
        setTimeout(() => {
          if (cancelled) return;
          line = 0;
          col = 0;
          setTyped([""]);
          setTimeout(tick, 600);
        }, 2200);
        return;
      }
      const full = CODE_LINES[line].t;
      col += 1;
      setTyped((prev) => {
        const next = [...prev];
        next[line] = full.slice(0, col);
        return next;
      });
      if (col >= full.length) {
        line += 1;
        col = 0;
        setTyped((prev) => (line < CODE_LINES.length ? [...prev, ""] : prev));
        setTimeout(tick, 90);
      } else {
        setTimeout(tick, 28 + Math.random() * 40);
      }
    };
    const id = setTimeout(tick, 500);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const messages = [
      "✓ typecheck passed",
      "→ building bundle…",
      "✓ 142 modules transformed",
      "→ deploying to edge…",
      "✓ live at drift.app",
      "● agent: review complete",
    ];
    let i = 0;
    const id = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, messages[i % messages.length]];
        return next.slice(-4);
      });
      i += 1;
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-3xl border border-border bg-gradient-to-br from-[#150803] to-black overflow-hidden shadow-2xl">
      {/* window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-black/40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] animate-pulse" />
          drift://ship.ts
        </div>
        <div className="text-[10px] text-muted-foreground">main ●</div>
      </div>

      {/* tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 text-[11px] bg-black/30 border-b border-border">
        {["ship.ts", "agent.ts", "deploy.yml"].map((f, i) => (
          <span
            key={f}
            className={`px-3 py-1.5 rounded-t-md ${i === 0
                ? "bg-[#150803] text-foreground border border-b-0 border-border"
                : "text-muted-foreground/70"
              }`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* editor body */}
      <div className="flex font-mono text-[12px] leading-[1.55] px-3 py-3 h-[calc(100%-160px)] overflow-hidden">
        <div className="pr-3 text-right text-muted-foreground/40 select-none">
          {typed.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="flex-1 min-w-0">
          {typed.map((line, i) => {
            const isLast = i === typed.length - 1;
            return (
              <div key={i} className={`whitespace-pre ${CODE_LINES[i]?.c ?? "text-foreground/90"}`}>
                {line || "\u00A0"}
                {isLast && (
                  <span className="inline-block w-[7px] h-[14px] -mb-[2px] ml-[1px] bg-[var(--brand)] animate-pulse align-middle" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* terminal / status */}
      <div className="absolute inset-x-0 bottom-0 border-t border-border bg-black/70 backdrop-blur-sm px-4 py-2 font-mono text-[11px] space-y-0.5">
        {logs.length === 0 ? (
          <div className="text-muted-foreground/60">$ waiting for changes…</div>
        ) : (
          logs.map((l, i) => (
            <div
              key={`${l}-${i}`}
              className={
                l.startsWith("✓")
                  ? "text-[#bfff00]"
                  : l.startsWith("→")
                    ? "text-[#ff9d6b]"
                    : "text-foreground/80"
              }
            >
              {l}
            </div>
          ))
        )}
      </div>

      {/* scanline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--brand)] animate-scanline" />
    </div>
  );
}
