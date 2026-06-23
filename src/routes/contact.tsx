import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Drift Codes" },
      { name: "description", content: "Get in touch with Drift Codes for software, app and AI development projects." },
      { property: "og:title", content: "Contact — Drift Codes" },
      { property: "og:description", content: "Start a project with Drift Codes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid-orange opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand)] animate-fade-up">Contact</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Let's build <span className="text-gradient-brand">something sharp</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Tell us about your project, your timeline or your idea. We reply within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
          {[
            { l: "Email", v: "driftcodeslabs@gmail.com" },
            { l: "Phone", v: "+94 76 094 6455" },
            { l: "Studio", v: "Colombo, Sri Lanka" },
            { l: "Hours", v: "Mon – Fri · 9:00 to 18:00 IST" },
          ].map((c) => (
            <div key={c.l} className="border-l-2 border-[var(--brand)] pl-5">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.l}</div>
              <div className="mt-1 font-display text-xl font-semibold">{c.v}</div>
            </div>
          ))}
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Prefer async? Send a quick brief and we will reply with next steps, references and a rough timeline.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 rounded-3xl border border-border bg-card p-8 space-y-5"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-brand grid place-items-center text-black font-bold text-xl glow-brand">✓</div>
              <h3 className="mt-5 font-display text-2xl font-bold">Message received.</h3>
              <p className="mt-2 text-muted-foreground">We'll get back to you within one working day.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Jane Perera" />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
              </div>
              <Field label="Company" name="company" placeholder="Optional" />
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project type</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Software", "Mobile App", "AI Product", "Consulting", "Other"].map((t) => (
                    <label key={t} className="cursor-pointer rounded-full border border-border bg-background px-4 py-2 text-sm hover:border-[var(--brand)] has-[:checked]:bg-gradient-brand has-[:checked]:text-black has-[:checked]:border-transparent transition">
                      <input type="radio" name="ptype" value={t} className="sr-only" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell us a little about your project..."
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] transition" />
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-brand py-3.5 text-sm font-semibold text-black glow-brand hover:scale-[1.01] transition">
                Send message →
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={name !== "company"}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] transition" />
    </div>
  );
}
