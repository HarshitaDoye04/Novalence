"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, TrendingDown, Award, ShieldCheck, type LucideProps } from "lucide-react";
import AnimateIn from "./AnimateIn";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Zap, TrendingDown, Award, ShieldCheck,
};

// ── SVG ring chart helpers ────────────────────────────────────────────────────
const CX = 200, CY = 200, OUTER = 178, INNER = 112, LABEL_R = 146;
const GAP = 4;

function toRad(deg: number) {
  return ((deg - 90) * Math.PI) / 180;
}
function pt(r: number, deg: number) {
  const a = toRad(deg);
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}
function segPath(s: number, e: number) {
  const o1 = pt(OUTER, s), o2 = pt(OUTER, e);
  const i1 = pt(INNER, s), i2 = pt(INNER, e);
  const lg = Math.abs(e - s) > 180 ? 1 : 0;
  const f = (n: number) => n.toFixed(2);
  return [
    `M${f(o1.x)} ${f(o1.y)}`,
    `A${OUTER} ${OUTER} 0 ${lg} 1 ${f(o2.x)} ${f(o2.y)}`,
    `L${f(i2.x)} ${f(i2.y)}`,
    `A${INNER} ${INNER} 0 ${lg} 0 ${f(i1.x)} ${f(i1.y)}`,
    "Z",
  ].join(" ");
}

// 0° = 12-o'clock, clockwise
const CHART_SEGS = [
  { key: "eff",  start: 225+GAP, end: 315-GAP, mid: 270, color: "#5eead4", rot: -90, lines: ["Efficiency"] },
  { key: "cost", start: -45+GAP, end:  45-GAP, mid:   0, color: "#14b8a6", rot:   0, lines: ["Cost", "Reduction"] },
  { key: "flex", start:  45+GAP, end: 135-GAP, mid:  90, color: "#0d9488", rot:  90, lines: ["Flexibility", "& Trust"] },
  { key: "exp",  start: 135+GAP, end: 225-GAP, mid: 180, color: "#0f766e", rot:   0, lines: ["Experience"] },
];

// ── Types ─────────────────────────────────────────────────────────────────────
type WhyCard = { icon: string; title: string; color: string; points: string[] };

// ── Left / Right card columns ─────────────────────────────────────────────────
function CardColumn({ cards, align }: { cards: WhyCard[]; align: "left" | "right" }) {
  return (
    <div className="space-y-10">
      {cards.map((card, i) => (
        <AnimateIn key={card.title} delay={i * 0.12} direction={align === "left" ? "left" : "right"}>
          <div className={align === "right" ? "text-left md:text-right" : ""}>
            <div className={`flex items-center gap-3 mb-3 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                {(() => { const Icon = ICON_MAP[card.icon]; return Icon ? <Icon size={20} className="text-teal-600" /> : null; })()}
              </div>
              <h3 className="font-bold text-teal-900 text-lg leading-tight">{card.title}</h3>
            </div>
            <ul className={`space-y-2 ${align === "right" ? "md:items-end" : ""}`}>
              {card.points.map((p, j) => (
                <li
                  key={j}
                  className={`flex gap-2 text-gray-500 text-sm leading-relaxed ${
                    align === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <span className="text-teal-400 shrink-0 mt-0.5">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function WhySection({ whyCards }: { whyCards: WhyCard[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-80px" });

  // whyCards order: 0=Efficiency, 1=Cost Reduction, 2=Experience, 3=Flexibility & Trust
  const left  = [whyCards[0], whyCards[2]]; // Efficiency + Experience
  const right = [whyCards[1], whyCards[3]]; // Cost Reduction + Flexibility & Trust

  return (
    <section id="why" className="px-6 md:px-12 py-24 bg-teal-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Why Novalence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">Experienced Regulatory Support for the Pharmaceutical Industry</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Delivering expert-led regulatory solutions that help pharmaceutical companies meet compliance standards and achieve successful submissions.
            </p>
          </div>
        </AnimateIn>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px_1fr] gap-8 items-center">

          {/* Left cards */}
          <CardColumn cards={left} align="left" />

          {/* Center ring chart */}
          <div className="flex justify-center">
            <svg
              ref={svgRef}
              viewBox="0 0 400 400"
              width="300"
              height="300"
              className="overflow-visible"
            >
              {/* ── Segments ── */}
              {CHART_SEGS.map((s, i) => (
                <motion.path
                  key={s.key}
                  d={segPath(s.start, s.end)}
                  fill={s.color}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />
              ))}

              {/* ── Outer ring accent ── */}
              <motion.circle
                cx={CX} cy={CY} r={OUTER + 6}
                fill="none"
                stroke="#e0f2f1"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />

              {/* ── Center white circle ── */}
              <motion.circle
                cx={CX} cy={CY} r={INNER - 6}
                fill="white"
                stroke="#ccfbf1"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
                transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />

              {/* ── Center text ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <text
                  x={CX} y={CY - 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#0f766e"
                  fontSize="15"
                  fontWeight="700"
                  fontFamily="sans-serif"
                >
                  Why
                </text>
                <text
                  x={CX} y={CY + 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#0f766e"
                  fontSize="15"
                  fontWeight="700"
                  fontFamily="sans-serif"
                >
                  Novalence
                </text>
              </motion.g>

              {/* ── Segment labels ── */}
              {CHART_SEGS.map((s, i) => {
                const pos = pt(LABEL_R, s.mid);
                const lineCount = s.lines.length;
                const lineH = 16;

                return (
                  <motion.g
                    key={`lbl-${s.key}`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                  >
                    <g transform={`rotate(${s.rot}, ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)})`}>
                      {s.lines.map((line, li) => {
                        const offset = (li - (lineCount - 1) / 2) * lineH;
                        return (
                          <text
                            key={li}
                            x={pos.x}
                            y={pos.y + offset}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="13"
                            fontWeight="700"
                            fontFamily="sans-serif"
                            letterSpacing="0.3"
                          >
                            {line}
                          </text>
                        );
                      })}
                    </g>
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* Right cards */}
          <CardColumn cards={right} align="right" />

        </div>
      </div>
    </section>
  );
}
