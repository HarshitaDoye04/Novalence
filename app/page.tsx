import Image from "next/image";
import {
  ArrowDownToLine,
  Cloud,
  Globe,
  GitBranch,
  Layers,
  Lock,
  KeyRound,
  Mail,
  Phone,
  LinkedinIcon,
  ExternalLink,
} from "lucide-react";
import AnimateIn from "./components/AnimateIn";
import SmoothScrollLink from "./components/SmoothScrollLink";
import ServicesCarousel from "./components/ServicesCarousel";
import WhySection from "./components/WhySection";
import MobileNav from "./components/MobileNav";

const services = [
  {
    icon: "FileText",
    title: "Regulatory Documentation",
    bullets: [
      "CTD Dossier Compilation",
      "ACTD Dossier Formatting",
      "Regulatory Document Editing and Review",
    ],
  },
  {
    icon: "Scale",
    title: "Quality & Compliance",
    bullets: [
      "SOP Drafting",
      "Stability Documentation",
      "DMF Documentation & Compilation Support",
      "CDP study/ evaluation",
    ],
  },
  {
    icon: "Compass",
    title: "Regulatory Support",
    bullets: [
      "Labeling & Artwork Review",
      "Regulatory Gap Analysis",
      "Regulatory Research",
    ],
  },
];

const whyCards = [
  {
    icon: "Zap",
    title: "Efficiency",
    color: "from-teal-500/20 to-teal-600/10",
    points: [
      "Streamlined regulatory documentation processes.",
      "Faster dossier preparation and project turnaround.",
      "Clear communication and dedicated project coordination.",
      "Single point of contact for efficient project management.",
    ],
  },
  {
    icon: "TrendingDown",
    title: "Cost Reduction",
    color: "from-emerald-500/20 to-emerald-600/10",
    points: [
      "Cost-effective outsourcing for regulatory documentation.",
      "Reduced operational burden for pharmaceutical companies.",
      "Flexible service models based on project requirements.",
      "High-quality regulatory support at competitive pricing.",
    ],
  },
  {
    icon: "Award",
    title: "Experience",
    color: "from-cyan-500/20 to-cyan-600/10",
    points: [
      "Strong knowledge of pharmaceutical regulatory documentation.",
      "Expertise in CTD / ACTD dossier compilation.",
      "Experience with stability documentation and SOP preparation.",
      "Understanding of global regulatory submission requirements.",
    ],
  },
  {
    icon: "ShieldCheck",
    title: "Flexibility & Trust",
    color: "from-teal-400/20 to-teal-500/10",
    points: [
      "Reliable regulatory documentation and compliance support.",
      "Transparent communication throughout the project lifecycle.",
      "Commitment to accuracy, quality, and regulatory standards.",
      "Trusted partner for pharmaceutical and nutraceutical companies.",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Novalence's team serves as an extension of our internal publishing and compliance team and has allowed us to achieve significant time and cost savings in comparison to our previous regulatory partners.",
    name: "HERVÉ RIQUE",
    title: "Director of Safety & Regulatory Information Management",
    company: "Stallergenes-Greer",
    initial: "H",
  },
  {
    quote:
      "I am incredibly satisfied with the work Novalence has done thus far. They communicate well and receive feedback well. I find the team incredibly easy to work with, friendly, and people I genuinely look forward to speaking with.",
    name: "JULIANA PHERAROLIS",
    title: "Project Management and Operations",
    company: "Astellas Gene Therapies",
    initial: "J",
  },
  {
    quote:
      "Novalence's expert publishing team allowed us to submit our briefing book to the US FDA in eCTD format, reducing dependencies on our core team and allowing them to focus on more strategic initiatives.",
    name: "FREDERICK COPE",
    title: "Executive",
    company: "Physis International",
    initial: "F",
  },
  {
    quote:
      "The team are experts in nearly everything you need to run your regulatory business successfully. The regulatory expertise is excellent, but it's the result-based approaches that make the wow effect. Just state your problem and get solutions that work.",
    name: "CHRISTIAN KLEWITZ",
    title: "Head of Data Management",
    company: "B Braun",
    initial: "C",
  },
];

const clients = [
  "Novartis",
  "Bausch Health",
  "Johnson & Johnson",
  "GSK",
  "Astellas Gene Therapies",
  "B Braun",
  "Sandoz",
  "Gedeon Richter",
];

const dossployerFeatures = [
  {
    Icon: ArrowDownToLine,
    title: "Understanding Your Product",
    desc: "Review of product information and regulatory requirements.",
    span: "col-span-6 md:col-span-4",
    featured: true,
    cardCls:
      "bg-gradient-to-br from-teal-700/55 to-teal-900/40 border-teal-600/35",
    iconCls: "bg-teal-500/25 border border-teal-400/25 text-teal-200",
    hasGlow: true,
    hasDots: true,
  },
  {
    Icon: Cloud,
    title: "Regulatory Strategy Planning",
    desc: "Identifying the appropriate regulatory pathway for submission.",
    span: "col-span-6 md:col-span-2",
    cardCls: "bg-teal-900/75 border-teal-800/55",
    iconCls: "bg-teal-800 border border-teal-700/60 text-teal-400",
  },
  {
    Icon: Globe,
    title: "Documentation Preparation",
    desc: "Structured preparation of CTD / ACTD and supporting documents.",
    span: "col-span-6 sm:col-span-3 md:col-span-2",
    cardCls: "bg-teal-800/40 border-teal-700/30",
    iconCls: "bg-teal-700/50 border border-teal-600/30 text-teal-300",
  },
  {
    Icon: GitBranch,
    title: "Quality & Compliance Review",
    desc: "Ensuring documentation aligns with regulatory standards.",
    span: "col-span-6 sm:col-span-3 md:col-span-2",
    cardCls: "bg-teal-700/30 border-teal-600/25",
    iconCls: "bg-teal-600/30 border border-teal-500/30 text-teal-300",
  },
  {
    Icon: Layers,
    title: "Submission Readiness",
    desc: "Final verification before regulatory submission.",
    span: "col-span-6 sm:col-span-6 md:col-span-2",
    cardCls: "bg-teal-900/55 border-teal-800/45",
    iconCls: "bg-teal-800/70 border border-teal-700/50 text-teal-400",
  },
  {
    Icon: Lock,
    title: "Client Collaboration",
    desc: "Continuous communication and project coordination.",
    span: "col-span-6 md:col-span-6",
    cardCls:
      "bg-gradient-to-br from-teal-800/50 to-teal-900/35 border-teal-700/30",
    iconCls: "bg-teal-700/40 border border-teal-600/30 text-teal-300",
    hasDots: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-teal-500/40 px-6 md:px-12 py-4 flex items-center justify-between shadow-sm">
        <Image
          src="/logo.png"
          alt="Novalence"
          width={140}
          height={36}
          className="object-contain mix-blend-multiply"
          priority
        />
        <MobileNav />
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          <SmoothScrollLink
            href="#services"
            className="hover:text-teal-700 transition-colors"
          >
            Services
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#expertise"
            className="hover:text-teal-700 transition-colors"
          >
            Expertise
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#why"
            className="hover:text-teal-700 transition-colors"
          >
            Why Us
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#technology"
            className="hover:text-teal-700 transition-colors"
          >
            Our Approach
          </SmoothScrollLink>
          {/* <SmoothScrollLink
            href="#testimonials"
            className="hover:text-teal-700 transition-colors"
          >
            Testimonials
          </SmoothScrollLink> */}
          <SmoothScrollLink
            href="#contact"
            className="rounded-full bg-teal-800 text-white px-5 py-2 hover:bg-teal-700 transition-all hover:shadow-lg hover:shadow-teal-200"
          >
            Contact Us
          </SmoothScrollLink>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-teal-950">
        {/* background pharma vials image */}
        <div className="absolute inset-0">
          <Image
            src="/pharma-vials.jpg"
            alt="Pharmaceutical lab"
            fill
            className="object-cover opacity-70 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/50 via-teal-900/40 to-teal-800/30" />
        </div>

        {/* decorative blobs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-28 text-white">
          <AnimateIn delay={0}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300 mb-5 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              Precision. Compliance. Excellence.
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Regulatory Affairs Experts for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                Pharmaceutical Industry
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg text-teal-100/80 max-w-xl leading-relaxed mb-10">
              Empowering pharmaceutical companies with end-to-end regulatory
              guidance — from strategic planning and compliance management to
              global submission support.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmoothScrollLink
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-teal-900 font-semibold px-8 py-3.5 hover:bg-teal-50 transition-all hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
              >
                Explore Services
                <span>→</span>
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Get in Touch
              </SmoothScrollLink>
            </div>
          </AnimateIn>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-teal-400/60 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="text-lg">↓</span>
        </div>
      </section>

      {/* ── Office Image (after first paint) ── */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[540px]">
          <div className="relative min-h-[340px]">
            <Image
              src="/office.jpg"
              alt="Novalence Office"
              fill
              className="object-cover"
            />
            {/* fade into the dark right panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-teal-950/70" />
          </div>
          <div className="relative bg-teal-800 flex flex-col justify-center px-10 md:px-16 py-16 text-white overflow-hidden">
            {/* decorative blobs */}
            <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
            {/* left accent bar */}
            <div className="absolute left-0 top-1/4 w-[3px] h-1/2 bg-gradient-to-b from-teal-400 to-emerald-400 rounded-full" />
            <AnimateIn direction="left" delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300 mb-6 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-1.5 w-fit">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                Guiding life sciences through every regulatory pathway with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                  clarity, compliance, and confidence.
                </span>
              </h2>
              <p className="text-teal-200/65 text-sm leading-relaxed max-w-md">
                We partner with pharmaceutical companies globally — bridging the
                gap between regulatory intelligence and the operational
                activities associated with compliance.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Our Expertise ── */}
      <section
        id="expertise"
        className="relative overflow-hidden bg-white px-6 md:px-12 py-24"
      >
        {/* subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(13,148,136,0.07) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* corner accent blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-600 mb-5 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 leading-snug">
                Regulatory Dossier{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                  Review &amp; Management
                </span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: description + feature pills */}
            <AnimateIn direction="left" delay={0.1}>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-base">
                  Novalence provides structured support for the preparation,
                  review, and organization of regulatory dossiers including CTD,
                  ACTD, and DMF formats. Our services ensure that documents are
                  properly structured according to regulatory requirements,
                  enabling efficient review, compliance verification, and
                  submission readiness.
                </p>
                <p className="text-gray-500 leading-relaxed text-base">
                  We assist clients in navigating regulatory documentation with
                  clarity, accuracy, and confidentiality while ensuring
                  alignment with international regulatory expectations.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "CTD Modules",
                    "ACTD Format",
                    "DMF documentation & compilation support",
                    "Submission Readiness",
                    "Compliance Verification",
                    "Lifecycle Documentation",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-3 py-1.5 hover:bg-teal-100 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Right: key features card */}
            <AnimateIn direction="right" delay={0.15}>
              <div className="bg-gradient-to-br from-teal-900 to-teal-950 rounded-3xl p-8 shadow-2xl shadow-teal-900/20 border border-teal-800/40 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-400/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-sm">
                    ✦
                  </span>
                  Key Features Include
                </h3>
                <div className="h-px bg-gradient-to-r from-teal-500/50 to-transparent mb-6" />
                <ul className="space-y-4">
                  {[
                    "Structured preparation of CTD and ACTD modules",
                    "Comprehensive dossier review for regulatory compliance",
                    "Document organization and formatting according to submission standards",
                    "Confidential handling of regulatory data and documents",
                    "Support for regulatory submissions and lifecycle documentation",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-400/15 border border-teal-400/30 flex items-center justify-center shrink-0 group-hover:bg-teal-400/25 transition-colors">
                        <span className="text-teal-400 text-[10px]">▸</span>
                      </span>
                      <span className="text-teal-100/80 text-sm leading-relaxed group-hover:text-teal-100 transition-colors">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-teal-50 border-y border-teal-100 px-6 md:px-12 py-16">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "Expert",
              label: "Regulatory Team",
              sub: "Seasoned professionals with deep Pharmaceutical Regulatory Affairs expertise",
            },
            {
              num: "Mpharm / PhD",
              label: "Qualified Leads",
              sub: "Project leads hold MPharm in Regulatory Affairs or a Doctorate in a relevant field",
            },
            {
              num: "Global",
              label: "Reach",
              sub: "Supporting regulatory strategy across multiple international markets",
            },
          ].map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.1} direction="up">
              <div className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors">
                  {s.num}
                </div>
                <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                  {s.label}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.sub}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative overflow-hidden bg-teal-950">
        <div className="grid md:grid-cols-2 min-h-[680px]">
          {/* Left: capsule image with section header overlaid */}
          <div className="relative min-h-[360px]">
            <Image
              src="/image-2.png"
              alt="Pharmaceutical capsules"
              fill
              className="object-cover"
            />
            {/* fade into dark right panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-teal-950/80" />
            {/* section header at bottom of image */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
              <AnimateIn direction="up">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300 mb-4 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-1.5 w-fit">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                  What We Do
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                  Full Suite of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                    Service Offerings
                  </span>
                </h2>
                <p className="text-teal-100/65 text-sm leading-relaxed max-w-xs">
                  Comprehensive regulatory support across the entire product
                  lifecycle — from first submission to post-marketing.
                </p>
              </AnimateIn>
            </div>
          </div>

          {/* Right: infinite auto-scrolling carousel */}
          <div className="relative bg-teal-950 flex flex-col overflow-hidden">
            {/* decorative blob */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
            <ServicesCarousel services={services} />
          </div>
        </div>
      </section>

      {/* ── Why Novalence ── */}
      <WhySection whyCards={whyCards} />

      {/* ── Regulatory Approach ── */}
      <section
        id="technology"
        className="relative overflow-hidden bg-teal-950 text-white px-6 md:px-12 py-24"
      >
        {/* background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/6 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-teal-300/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Section header */}
          <AnimateIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300 mb-5 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                How We Work
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                  Regulatory Approach
                </span>
              </h2>
              <p className="text-teal-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
                A structured, end-to-end process designed to ensure every
                submission is accurate, compliant, and ready on time.
              </p>
            </div>
          </AnimateIn>

          {/* Bento grid */}
          <div className="grid grid-cols-6 gap-3 md:gap-4">
            {dossployerFeatures.map((f, i) => (
              <AnimateIn
                key={f.title}
                delay={i * 0.07}
                direction="up"
                className={f.span}
              >
                <div
                  className={`relative h-full rounded-2xl border p-6 md:p-7 flex flex-col gap-4 overflow-hidden
                    hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-950/60 transition-all duration-300
                    ${f.cardCls} ${f.featured ? "md:flex-row md:items-start md:gap-7" : ""}`}
                  style={
                    f.hasDots
                      ? {
                          backgroundImage:
                            "radial-gradient(rgba(94,234,212,0.10) 1.5px, transparent 1.5px)",
                          backgroundSize: "22px 22px",
                        }
                      : undefined
                  }
                >
                  {/* top-right glow on featured card */}
                  {f.hasGlow && (
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
                  )}

                  {/* Icon */}
                  <div
                    className={`shrink-0 rounded-xl flex items-center justify-center
                    ${f.featured ? "w-14 h-14" : "w-10 h-10"} ${f.iconCls}`}
                  >
                    <f.Icon size={f.featured ? 26 : 18} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <p
                      className={`font-semibold leading-snug ${f.featured ? "text-white text-lg md:text-xl" : "text-teal-100/90 text-sm"}`}
                    >
                      {f.title}
                    </p>
                    {f.desc && (
                      <p className="text-teal-200/55 text-sm leading-relaxed mt-1">
                        {f.desc}
                      </p>
                    )}
                  </div>

                  {/* bottom-right accent line on featured */}
                  {f.featured && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400/40 via-emerald-400/30 to-transparent" />
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      {/* <section className="px-6 md:px-12 py-20 bg-teal-50/60">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-teal-900 text-center mb-12">
              Trusted by Global Industry Leaders
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((c) => (
                <div
                  key={c}
                  className="bg-white border border-teal-100 rounded-2xl px-7 py-4 text-sm font-semibold text-teal-800 shadow-sm hover:shadow-md hover:border-teal-300 hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {c}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section> */}

      {/* ── Testimonials ── */}
      {/* <section id="testimonials" className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
                Client Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
                What Our Clients Say
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn
                key={t.name}
                delay={(i % 2) * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 flex flex-col gap-5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-50 transition-all h-full">
                  <div className="text-3xl text-teal-300 leading-none">"</div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 -mt-3 italic">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-teal-100">
                    <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-bold text-teal-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-teal-600 text-xs">{t.title}</div>
                      <div className="text-gray-400 text-xs">{t.company}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Section divider ── */}
      <div className="relative bg-teal-950 flex flex-col items-center py-0 overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        <div className="flex items-center gap-4 py-5">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-teal-500/40" />
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50" />
            <span className="w-2 h-2 rounded-full bg-teal-400/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50" />
          </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-teal-500/40" />
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      </div>

      {/* ── Contact CTA ── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-teal-950 text-white"
      >
        <div className="grid md:grid-cols-[55%_45%] min-h-[680px]">
          {/* ── Left: content ── */}
          <div className="relative flex flex-col justify-center px-8 md:px-16 py-20 overflow-hidden">
            {/* dot-grid texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(94,234,212,0.07) 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* corner glows */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-1/3 w-56 h-56 bg-emerald-400/6 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <AnimateIn direction="up">
                <div className="mb-8">
                  <Image
                    src="/logo.png"
                    alt="Novalence"
                    width={160}
                    height={42}
                    className="object-contain invert brightness-0 invert"
                  />
                </div>

                {/* Badge */}
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300 mb-5 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                  Let&apos;s Work Together
                </span>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                  Helping You Navigate Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                    Regulatory Challenges
                  </span>
                </h2>
                <p className="text-teal-100/65 leading-relaxed mb-8 max-w-md">
                  We have the knowledge and expertise to navigate the most
                  complex pharmaceutical regulations — ensuring full global
                  compliance throughout every step.
                </p>

                {/* Contact cards */}
                <div className="space-y-3 mb-8">
                  <a
                    href="mailto:novalenceregulatoryadvisory@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-teal-800/35 border border-teal-700/35 hover:bg-teal-800/55 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-700/50 border border-teal-600/30 flex items-center justify-center shrink-0">
                      <Mail size={17} className="text-teal-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-teal-400 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
                        Email
                      </div>
                      <div className="text-white text-sm font-medium truncate">
                        novalenceregulatoryadvisory@gmail.com{" "}
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-teal-600 group-hover:text-teal-400 transition-colors shrink-0"
                    />
                  </a>

                  <a
                    href="tel:+918980876937"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-teal-800/35 border border-teal-700/35 hover:bg-teal-800/55 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-700/50 border border-teal-600/30 flex items-center justify-center shrink-0">
                      <Phone size={17} className="text-teal-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-teal-400 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
                        Phone
                      </div>
                      <div className="text-white text-sm font-medium">
                        (+91) 8980876937
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-teal-600 group-hover:text-teal-400 transition-colors shrink-0"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/novalence-regulatory-advisory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-teal-800/35 border border-teal-700/35 hover:bg-teal-800/55 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-700/50 border border-teal-600/30 flex items-center justify-center shrink-0">
                      <LinkedinIcon size={17} className="text-teal-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-teal-400 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
                        LinkedIn
                      </div>
                      <div className="text-white text-sm font-medium truncate">
                        https://www.linkedin.com/company/novalence-regulatory-advisory/{" "}
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-teal-600 group-hover:text-teal-400 transition-colors shrink-0"
                    />
                  </a>
                </div>

                {/* Website CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-400 text-teal-950 font-bold px-7 py-3 hover:bg-teal-300 transition-all hover:shadow-xl hover:shadow-teal-400/20 hover:-translate-y-0.5 text-sm"
                >
                  Visit novalence.org
                  <ExternalLink size={14} />
                </a>
              </AnimateIn>
            </div>
          </div>

          {/* ── Right: images ── */}
          <div className="relative min-h-[420px] overflow-hidden">
            {/* Main team image */}
            <Image
              src="/image-1.png"
              alt="Novalence team"
              fill
              className="object-cover"
            />
            {/* teal color overlay */}
            <div className="absolute inset-0 bg-teal-700/40 mix-blend-multiply" />
            {/* gradient fade to left */}
            <div className="absolute inset-0 bg-gradient-to-l from-teal-950/10 via-transparent to-teal-950/75" />
            {/* gradient fade to bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/65 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black/90 text-teal-500/60 px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Image
          src="/logo.png"
          alt="Novalence"
          width={120}
          height={32}
          className="object-contain brightness-0 invert opacity-75"
        />
        <span className="text-center">
          © 2026 Novalence. All rights reserved.
        </span>
        {/* <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
        </div> */}
      </footer>
    </main>
  );
}
