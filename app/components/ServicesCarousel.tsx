"use client";
import { useState, useEffect, useCallback } from "react";
import {
  FileText, Tag, Database, PenLine, Scale, GraduationCap, Compass,
  type LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  FileText, Tag, Database, PenLine, Scale, GraduationCap, Compass,
};

type Service = {
  icon: string;
  title: string;
  bullets: string[];
};

export default function ServicesCarousel({ services }: { services: Service[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % services.length), [services.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + services.length) % services.length), [services.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="relative flex flex-col h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card track */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {services.map((svc) => (
            <div key={svc.title} className="min-w-full h-full px-8 pt-10 pb-4 flex flex-col">
              {/* card */}
              <div className="flex-1 bg-white/5 border border-teal-700/40 rounded-2xl p-8 flex flex-col justify-center hover:border-teal-500/60 transition-colors">
                {/* header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-teal-400/15 border border-teal-400/20 flex items-center justify-center shrink-0">
                    {(() => { const Icon = ICON_MAP[svc.icon]; return Icon ? <Icon size={28} className="text-teal-300" /> : null; })()}
                  </div>
                  <h3 className="text-white font-bold text-2xl leading-tight">{svc.title}</h3>
                </div>
                {/* divider */}
                <div className="h-px bg-gradient-to-r from-teal-500/40 to-transparent mb-6" />
                {/* bullets */}
                <ul className="space-y-3">
                  {svc.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-teal-100/75 text-base leading-relaxed">
                      <span className="text-teal-400 shrink-0 mt-0.5">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between px-8 py-6">
        {/* dot indicators */}
        <div className="flex items-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-teal-400"
                  : "w-2 h-2 bg-teal-700 hover:bg-teal-500"
              }`}
            />
          ))}
        </div>

        {/* counter + arrows */}
        <div className="flex items-center gap-3">
          <span className="text-teal-500 text-xs tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            aria-label="Previous service"
            className="w-10 h-10 rounded-full border border-teal-700 hover:border-teal-400 text-teal-300 hover:text-white flex items-center justify-center transition-all hover:bg-teal-800/60 text-lg"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 hover:bg-teal-500/40 hover:border-teal-400 text-teal-300 hover:text-white flex items-center justify-center transition-all text-lg"
          >
            →
          </button>
        </div>
      </div>

      {/* auto-progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-teal-900/60">
          <div
            key={current}
            className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
            style={{ animation: "progress 4s linear forwards" }}
          />
        </div>
      )}

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
