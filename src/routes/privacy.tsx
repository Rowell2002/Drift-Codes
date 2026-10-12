import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Cpu,
  FileCode2,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Server,
  UserCheck,
  HelpCircle,
  Clock,
  ExternalLink,
  Layers,
  Building2,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Drift Codes" },
      {
        name: "description",
        content:
          "Privacy Policy for Drift Codes (Private) Limited. Learn how we collect, protect, and handle data across our engineering services, client products, and applications like Pulse.",
      },
      { property: "og:title", content: "Privacy Policy — Drift Codes" },
      {
        property: "og:description",
        content:
          "Learn about Drift Codes (Private) Limited data protection standards, strict client code confidentiality, and privacy practices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@DriftCodes" },
    ],
  }),
  component: PrivacyPage,
});

interface SectionItem {
  id: string;
  title: string;
}

const SECTIONS: SectionItem[] = [
  { id: "overview", title: "1. Overview & Legal Entity" },
  { id: "principles", title: "2. Core Principles" },
  { id: "data-collected", title: "3. Information We Collect" },
  { id: "use-of-data", title: "4. How We Use Information" },
  { id: "client-confidentiality", title: "5. Client Code, IP & Open Source" },
  { id: "ai-governance", title: "6. AI & Machine Learning Ethics" },
  { id: "sharing-subprocessors", title: "7. Third Parties & Subprocessors" },
  { id: "external-links", title: "8. Third-Party Links" },
  { id: "international-transfers", title: "9. International Transfers" },
  { id: "security", title: "10. Security Safeguards" },
  { id: "retention", title: "11. Retention & Deletion" },
  { id: "your-rights", title: "12. Your Privacy Rights" },
  { id: "cookies", title: "13. Cookies & Analytics" },
  { id: "children", title: "14. Children's Privacy" },
  { id: "updates", title: "15. Policy Updates" },
  { id: "contact", title: "16. Contact & Legal Entity" },
];

const FAQS = [
  {
    q: "Does Drift Codes sell or monetize personal or client data?",
    a: "Never. We do not sell, rent, trade, or monetize personal information or client project assets to data brokers, advertisers, or any third party.",
  },
  {
    q: "Do you train public AI models on client code or proprietary data?",
    a: "No. When engineering AI applications, RAG pipelines, or bespoke machine learning integrations, client proprietary code and private databases are never submitted to train public foundation models without explicit contractual consent. Where supported by third-party AI providers, training exclusions and data retention controls are enabled.",
  },
  {
    q: "How does Drift Codes protect client source code and credentials?",
    a: "We implement defense-in-depth security: strict mutual NDAs, role-based least-privilege access controls, hardware MFA on all code repositories, industry-standard encryption in transit and at rest where supported by our infrastructure providers, and secure secret managers.",
  },
  {
    q: "What privacy standards does Drift Codes adhere to?",
    a: "We comply with Sri Lanka's Personal Data Protection Act (PDPA No. 9 of 2022), while honoring global standards including the European Union General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA).",
  },
  {
    q: "How can I request access to or deletion of my data?",
    a: "Subject to applicable laws and contractual obligations, individuals may request access, correction, export, or deletion of their personal information by contacting driftcodeslabs@gmail.com.",
  },
];

function PrivacyPage() {
  const reduced = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative">
      {/* Background ambient accents */}
      {!reduced && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="services-orb services-orb-1 opacity-25" />
          <div className="services-orb services-orb-2 opacity-20" />
          <div className="absolute inset-0 bg-grid-orange opacity-[0.04] animate-grid-pan" />
        </div>
      )}

      {/* Hero Header */}
      <section className="relative z-10 overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid-orange opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-4 py-1.5 text-xs font-semibold text-[var(--brand)] animate-fade-up">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Data Governance & Trust</span>
          </div>

          <h1
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Privacy <span className="text-gradient-brand">Policy</span>
          </h1>

          <p
            className="mt-4 max-w-3xl text-base sm:text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            At Drift Codes, transparency, security, and engineering integrity go hand in hand. This
            policy outlines how we handle personal data, maintain strict confidentiality over client
            proprietary code, and protect the privacy of users interacting with our studio and
            digital products.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6 text-xs text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5 text-[var(--brand)]" />
              <span>
                <strong>Operated By:</strong> Drift Codes (Private) Limited
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-[var(--brand)]" />
              <span>
                <strong>Last Updated:</strong> October 12, 2026
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[var(--brand)]" />
              <span>
                <strong>Registered In:</strong> Sri Lanka (Global Operations)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-[var(--brand)]" />
              <span>
                <strong>Version:</strong> 2.1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Principles Grid */}
      <section className="relative z-10 border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--brand)] font-semibold mb-6">
            Key Commitments at a Glance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "Zero Data Selling",
                desc: "We never monetize or sell your personal details or telemetry to advertisers or data brokers.",
              },
              {
                icon: FileCode2,
                title: "Client IP Governance",
                desc: "Ownership of deliverables is governed by the applicable client agreement, statement of work, or software development contract.",
              },
              {
                icon: Cpu,
                title: "Ethical AI Handling",
                desc: "Where supported by third-party AI providers, training exclusions and data retention controls are enabled to reduce exposure of customer information.",
              },
              {
                icon: UserCheck,
                title: "Full Rights Control",
                desc: "Subject to applicable laws and contractual obligations, individuals may request access, correction, export, or deletion of their personal information.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border/80 bg-card p-5 transition-all duration-300 hover:border-[var(--brand)]/50 hover:shadow-lg"
                >
                  <div className="h-9 w-9 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl border border-border bg-card/90 backdrop-blur-md p-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <span className="font-display text-sm font-semibold text-foreground">
                  Table of Contents
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--brand)]">
                  {SECTIONS.length} Sections
                </span>
              </div>
              <nav className="flex flex-col space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`flex items-center justify-between text-left rounded-xl px-3 py-2 text-xs transition-all ${
                      activeSection === sec.id
                        ? "bg-gradient-brand text-black font-semibold shadow-sm"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <ChevronRight
                      className={`h-3 w-3 shrink-0 ml-2 transition-transform ${
                        activeSection === sec.id ? "rotate-90 text-black" : "opacity-40"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              <div className="mt-6 border-t border-border/60 pt-5">
                <div className="rounded-2xl bg-muted/40 p-4 border border-border/60">
                  <p className="text-xs font-semibold text-foreground">Have a privacy inquiry?</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Reach our data protection team directly for questions or rights requests.
                  </p>
                  <a
                    href="mailto:driftcodeslabs@gmail.com"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] hover:underline"
                  >
                    <span>driftcodeslabs@gmail.com</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Legal Clauses & Document Body */}
          <div className="lg:col-span-8 space-y-14">
            {/* Section 1 */}
            <article id="overview" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 01
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Overview & Legal Entity
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Privacy Policy describes the practices of <strong>Drift Codes</strong>{" "}
                (&ldquo;Drift Codes&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;).{" "}
                <strong>
                  Drift Codes is operated by Drift Codes (Private) Limited, a company registered in
                  Sri Lanka.
                </strong>
              </p>

              <div className="rounded-2xl border border-border bg-card p-5 mt-2">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      Operating Legal Entity
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Drift Codes is operated by <strong>Drift Codes (Private) Limited</strong>, a
                      company registered under the laws of Sri Lanka, providing software
                      engineering, mobile app development, artificial intelligence systems, and
                      cloud solutions to clients worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                This policy applies to information collected when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
                <li>
                  Visit or interact with our primary website located at{" "}
                  <span className="text-foreground font-mono text-xs">driftcodes.com</span> and any
                  associated subdomains.
                </li>
                <li>
                  Engage us for bespoke software engineering, mobile app development (iOS, Android,
                  cross-platform), AI/ML integration, cloud consulting, or UI/UX design.
                </li>
                <li>
                  Use proprietary digital products, mobile applications (such as{" "}
                  <strong>Pulse</strong>), or web apps designed, published, or hosted by Drift Codes
                  (Private) Limited.
                </li>
                <li>
                  Communicate with us via electronic mail, web contact forms, scheduling services,
                  or telephone.
                </li>
              </ul>
            </article>

            {/* Section 2 */}
            <article id="principles" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 02
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Core Privacy Principles
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We approach data privacy with the same rigor we apply to software architecture. Our
                practices rest on four pillars:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" />
                    Data Minimization
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    We collect only the minimum data elements necessary to execute contracts,
                    provide technical services, respond to briefs, and deliver reliable software.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" />
                    Zero Commercial Exploitation
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    We are an engineering studio, not a data broker. We never sell, license, or
                    barter contact details or user metrics to advertising networks.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" />
                    Ironclad Client Confidentiality
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Client codebases, schema designs, secret keys, and business logic are
                    safeguarded under strict contractual non-disclosure agreements.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" />
                    Transparent AI Operations
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Where supported by third-party AI providers, training exclusions and data
                    retention controls are enabled to reduce exposure of customer information.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3 */}
            <article id="data-collected" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 03
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Information We Collect
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The types of information we process depend on your interaction with Drift Codes:
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    A. Information You Provide Voluntarily
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Inquiry & Contact Details:</strong> Full
                      name, corporate email address, telephone number, company affiliation, and
                      project description submitted via our contact forms.
                    </li>
                    <li>
                      <strong className="text-foreground">Client Engagement Data:</strong> Technical
                      specifications, architectural requirements, billing contact details, invoicing
                      addresses, and authorized project sign-offs.
                    </li>
                    <li>
                      <strong className="text-foreground">Product Account Information:</strong>{" "}
                      Where you register for our products (such as Pulse), your chosen display name,
                      authentication credentials (via secure third-party OAuth providers), and
                      optional profile preferences.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    B. Information Collected Automatically
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Device & Network Metadata:</strong>{" "}
                      Truncated IP addresses, operating system version, browser user-agent, device
                      hardware attributes, and language settings.
                    </li>
                    <li>
                      <strong className="text-foreground">Usage & Diagnostic Metrics:</strong> Page
                      response times, routing transitions, HTTP status codes, and crash reporting
                      stack traces used to diagnose bugs and maintain uptime.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    C. Information Not Collected
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    We do not collect sensitive government identifiers (e.g. social security
                    numbers), political affiliations, biometrics for identification, or intrusive
                    financial data. All client payments are settled via authorized banking transfers
                    or PCI-DSS certified payment processors.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article id="use-of-data" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 04
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                How We Use Information & Legal Bases
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We only process personal data when we possess a valid lawful basis under applicable
                privacy legislation (including Sri Lanka PDPA and GDPR Article 6):
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left text-xs">
                  <thead className="bg-muted/60 text-foreground font-semibold border-b border-border">
                    <tr>
                      <th className="p-3.5">Purpose of Processing</th>
                      <th className="p-3.5">Categories of Data</th>
                      <th className="p-3.5">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted-foreground">
                    <tr>
                      <td className="p-3.5 font-medium text-foreground">
                        Delivering client software engineering, mobile development & AI deployments
                      </td>
                      <td className="p-3.5">Contact info, project briefs, technical specs</td>
                      <td className="p-3.5">
                        Contractual Necessity (to fulfill service agreements)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-foreground">
                        Responding to prospective client inquiries and project proposals
                      </td>
                      <td className="p-3.5">Name, email, company, project notes</td>
                      <td className="p-3.5">Legitimate Interests / Consent</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-foreground">
                        Operating digital products (e.g. Pulse) & sync features
                      </td>
                      <td className="p-3.5">Account credentials, app telemetry</td>
                      <td className="p-3.5">Contractual Necessity & Consent</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-foreground">
                        System defense, error logging, and prevention of malicious abuse
                      </td>
                      <td className="p-3.5">
                        Server logs, anonymized IP addresses, error telemetry
                      </td>
                      <td className="p-3.5">Legitimate Interests (security & reliability)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-foreground">
                        Compliance with corporate taxation, financial audits & legal demands
                      </td>
                      <td className="p-3.5">Invoicing records, contracts, payment histories</td>
                      <td className="p-3.5">Legal Obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 5 */}
            <article id="client-confidentiality" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 05
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Client Code, Deliverables, IP & Open-Source Components
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As a specialized engineering studio, we recognize that our clients entrust us with
                mission-critical intellectual property. We enforce strict contractual, licensing,
                and technical boundaries:
              </p>
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="h-7 w-7 rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      Non-Disclosure Agreements (NDA)
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      All client engagements are governed by comprehensive non-disclosure agreements
                      before project code is authored, inspected, or deployed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="h-7 w-7 rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0 mt-0.5">
                    <FileCode2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      Client Deliverables & IP Ownership
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Ownership of deliverables is governed by the applicable client agreement,
                      statement of work, or software development contract.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="h-7 w-7 rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      Open-Source Components
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Many solutions delivered by Drift Codes may incorporate open-source components
                      subject to their respective licenses. Such components remain governed by their
                      original licensing terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="h-7 w-7 rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0 mt-0.5">
                    <Server className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      Isolated Environments & Least Privilege
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Client repositories and production cloud environments are isolated. Drift
                      Codes engineers operate on role-based, least-privilege credentials requiring
                      multi-factor authentication (MFA) and hardware keys.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 6 */}
            <article id="ai-governance" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 06
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                AI & Machine Learning Ethics and Model Governance
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drift Codes builds modern AI products, retrieval-augmented generation (RAG)
                pipelines, and intelligent agents. We hold ourselves to uncompromising standards of
                AI safety and data hygiene:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
                <li>
                  <strong className="text-foreground">No Public Training on Client Assets:</strong>{" "}
                  Client proprietary data, private documents, prompt history, and source code are
                  never allowed to train public foundation models without explicit contractual
                  consent.
                </li>
                <li>
                  <strong className="text-foreground">AI Provider Controls:</strong> Where supported
                  by third-party AI providers, training exclusions and data retention controls are
                  enabled to reduce exposure of customer information.
                </li>
                <li>
                  <strong className="text-foreground">Vector Data Isolation:</strong> Client
                  embeddings and vector indices reside in isolated, dedicated namespaces with
                  role-based cryptographic access control.
                </li>
                <li>
                  <strong className="text-foreground">Human-in-the-Loop Safeguards:</strong>{" "}
                  Autonomous agents built for clients include sensible guardrails, audit logging,
                  and human override capability.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article id="sharing-subprocessors" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 07
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Third Parties & Trusted Subprocessors
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not sell personal data. We only share data with vetted third-party
                infrastructure providers (&ldquo;Subprocessors&rdquo;) essential to delivering our
                services:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    name: "Cloud Hosting & Edge Network",
                    vendors: "Vercel, Cloudflare, AWS",
                    purpose:
                      "Hosting website bundles, edge caching, SSL termination, and DDoS mitigation.",
                  },
                  {
                    name: "Developer Tools & Version Control",
                    vendors: "GitHub, GitLab",
                    purpose:
                      "Secure Git hosting, continuous integration, and version tracking under private enterprise repositories.",
                  },
                  {
                    name: "Communication & Scheduling",
                    vendors: "Google Workspace, Cal.com",
                    purpose:
                      "Email correspondence, project briefings, and scheduling discovery calls.",
                  },
                  {
                    name: "Telemetry & Performance Monitoring",
                    vendors: "Vercel Analytics, Sentry (Self-hosted/Cloud)",
                    purpose:
                      "Anonymous runtime performance tracking and debugging software crashes.",
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-2xl border border-border bg-card p-4">
                    <span className="text-[11px] font-semibold text-[var(--brand)] uppercase tracking-wider">
                      {item.name}
                    </span>
                    <h3 className="font-display font-semibold text-sm text-foreground mt-1">
                      {item.vendors}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground pt-2">
                All subprocessors are bound by data processing agreements (DPAs) requiring adherence
                to strict confidentiality, encryption, and data protection benchmarks.
              </p>
            </article>

            {/* Section 8: Third-Party Links */}
            <article id="external-links" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 08
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Third-Party Links
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of external websites not operated by Drift Codes.
              </p>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0 mt-0.5">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      External Privacy Policies
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      We encourage you to review the privacy policies and terms of any external
                      websites or third-party platforms that you visit through links provided on our
                      site or applications.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 9: International Transfers */}
            <article id="international-transfers" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 09
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                International Data Transfers
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drift Codes is based in Sri Lanka and serves clients across the United States,
                Europe, Australia, and Asia. When data crosses national borders:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
                <li>
                  We utilize Standard Contractual Clauses (SCCs) approved by the European Commission
                  for transfers outside the European Economic Area.
                </li>
                <li>
                  We comply with Section 26 of Sri Lanka&rsquo;s Personal Data Protection Act No. 9
                  of 2022 governing cross-border transfers.
                </li>
                <li>
                  Data stored in cloud environments is pinned to regional data centers (e.g. EU, US,
                  or AP-Southeast) according to our clients&rsquo; regulatory and contractual
                  demands.
                </li>
              </ul>
            </article>

            {/* Section 10: Security Safeguards */}
            <article id="security" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 10
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Security & Technical Safeguards
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We implement industry-standard physical, technical, and organizational measures
                designed to protect information from loss, theft, misuse, unauthorized access,
                disclosure, alteration, and destruction:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-border bg-card p-4 text-center">
                  <div className="font-display text-base font-bold text-gradient-brand">
                    TLS 1.3
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    End-to-end transport layer encryption for all web and API traffic.
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 text-center">
                  <div className="font-display text-base font-bold text-gradient-brand">
                    Encryption at Rest & In Transit
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Industry-standard encryption is used to protect data in transit and at rest
                    where supported by our hosting and infrastructure providers.
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 text-center">
                  <div className="font-display text-base font-bold text-gradient-brand">
                    2FA / MFA
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Compulsory multi-factor authentication for all engineering accounts.
                  </div>
                </div>
              </div>
            </article>

            {/* Section 11: Data Retention */}
            <article id="retention" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 11
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Data Retention & Deletion
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We store personal and project data only as long as necessary to satisfy the purposes
                for which it was gathered:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
                <li>
                  <strong className="text-foreground">Inquiries & Briefs:</strong> Non-converting
                  prospect inquiries are retained for up to 12 months, after which they are purged.
                </li>
                <li>
                  <strong className="text-foreground">Client Contracts & Invoices:</strong> Retained
                  for statutory accounting and tax retention periods in Sri Lanka and relevant
                  international client jurisdictions.
                </li>
                <li>
                  <strong className="text-foreground">Working Repositories:</strong> Staged client
                  build repositories are archived or transferred to client-owned organizations in
                  accordance with the applicable statement of work.
                </li>
                <li>
                  <strong className="text-foreground">Product Accounts:</strong> Deletion of a user
                  account triggers irreversible data expungement within 30 days.
                </li>
              </ul>
            </article>

            {/* Section 12: Your Privacy Rights */}
            <article id="your-rights" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 12
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Your Privacy Rights (GDPR, CCPA, SL PDPA)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regardless of your geographic location, Drift Codes respects your rights over your
                personal data:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    Right of Access & Portability
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Request an export of personal data held concerning you.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    Right to Rectification
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Correct inaccurate, incomplete, or out-of-date personal information.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    Right to Erasure (&ldquo;Forgotten&rdquo;)
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Request deletion of your records when processing is no longer required.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    Right to Restriction & Objection
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Limit or halt processing based on legitimate interests or direct communication.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/5 p-4 mt-3">
                <p className="text-xs text-foreground font-medium leading-relaxed">
                  <strong>How to exercise your rights:</strong> Subject to applicable laws and
                  contractual obligations, individuals may request access, correction, export, or
                  deletion of their personal information by contacting our privacy team at{" "}
                  <a
                    href="mailto:driftcodeslabs@gmail.com"
                    className="text-[var(--brand)] underline font-semibold"
                  >
                    driftcodeslabs@gmail.com
                  </a>{" "}
                  with the subject line &ldquo;Privacy Rights Request&rdquo;.
                </p>
              </div>
            </article>

            {/* Section 13: Cookies */}
            <article id="cookies" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 13
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Cookies & Tracking Technologies
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our approach to cookies is minimal and privacy-preserving:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
                <li>
                  <strong className="text-foreground">Strictly Necessary Cookies:</strong> Required
                  to maintain security, session integrity, and user authentication.
                </li>
                <li>
                  <strong className="text-foreground">No Invasive Advertising Cookies:</strong> We
                  do not deploy third-party advertising pixels, Facebook beacons, or cross-site
                  tracking cookies.
                </li>
                <li>
                  <strong className="text-foreground">Browser Controls:</strong> You may configure
                  your browser to block or alert you about cookies; however, some site
                  functionalities may become degraded.
                </li>
              </ul>
            </article>

            {/* Section 14: Children */}
            <article id="children" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 14
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Children&rsquo;s Privacy
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our services and commercial software offerings are intended for businesses and
                individuals aged 16 and older. We do not knowingly solicit or collect personal
                information from children under the age of 16. If we become aware that an underage
                individual has submitted data without verified parental consent, we take prompt
                steps to delete the records.
              </p>
            </article>

            {/* Section 15: Updates */}
            <article id="updates" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 15
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Changes to This Privacy Policy
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may modify this Privacy Policy periodically to reflect engineering advancements,
                new product launches (such as updates to Pulse), or evolving international privacy
                laws. When updates are published, the &ldquo;Last Updated&rdquo; timestamp at the
                top of this document will be updated. For material alterations impacting client
                commitments, we will provide appropriate notice to registered clients.
              </p>
            </article>

            {/* Section 16: Contact & Legal Entity */}
            <article id="contact" className="scroll-mt-28 space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                Section 16
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Contact & Legal Entity Information
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you have questions, feedback, or requests regarding this Privacy Policy or our
                engineering privacy safeguards, please reach out to us:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <Building2 className="h-5 w-5 text-[var(--brand)] mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Legal Entity
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    Drift Codes (Private) Limited
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">Colombo, Sri Lanka</div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5">
                  <Mail className="h-5 w-5 text-[var(--brand)] mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Email
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    <a
                      href="mailto:driftcodeslabs@gmail.com"
                      className="hover:text-[var(--brand)] transition"
                    >
                      driftcodeslabs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5">
                  <Phone className="h-5 w-5 text-[var(--brand)] mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Direct Line
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    <a href="tel:+94760946455" className="hover:text-[var(--brand)] transition">
                      +94 76 094 6455
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Interactive Frequently Asked Privacy Questions */}
      <section className="relative z-10 border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand)] font-semibold">
              Quick Answers
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              Frequently Asked Privacy Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Direct, unambiguous answers to common questions about how we handle client software
              and user privacy.
            </p>
          </div>

          <div className="mt-8 space-y-3 max-w-3xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border bg-card transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-foreground hover:text-[var(--brand)] transition"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 text-[var(--brand)] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground ${
                        isOpen ? "rotate-90 text-[var(--brand)]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative z-10 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-brand opacity-15 blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Ready to build with a studio that values{" "}
                <span className="text-gradient-brand">your security & privacy</span>?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Whether you need a full-stack platform, an iOS/Android app, or custom AI agents, we
                engineer with privacy by design.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-black glow-brand hover:scale-[1.02] transition"
                >
                  <span>Start a project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-[var(--brand)] transition"
                >
                  <span>Learn about Drift Codes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
