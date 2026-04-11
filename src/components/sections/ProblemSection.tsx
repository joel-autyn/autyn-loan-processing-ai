import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    stat: "5–9 hrs",
    label: "of manual workflows on every loan file",
  },
  {
    stat: "$800–$1,200",
    label: "per file paid to third-party loan processors",
  },
  {
    stat: "$200–$350",
    label: "per file for loan assistants on top of that",
  },
  {
    stat: "60%",
    label: "of a broker's day lost to data entry and admin",
  },
  {
    stat: "27,600+",
    label: "loan officers still running this manually",
  },
  {
    stat: "0",
    label: "end-to-end AI platforms built for broker workflows",
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      className="py-24 md:py-32 xl:py-40 bg-[hsl(220,15%,8%)] relative overflow-hidden"
      ref={ref}
      aria-labelledby="problem-heading"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px]" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 xl:mb-20"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-5">
            The broker problem
          </p>
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-7 text-balance"
          >
            A $2&nbsp;trillion market{" "}
            <span className="serif font-normal text-white/55">
              still runs on spreadsheets.
            </span>
          </h2>
          <p className="text-white/60 text-lg xl:text-xl leading-relaxed max-w-2xl">
            Independent mortgage brokers originate nearly a quarter of U.S. home
            loans — and almost none of them have access to real AI. Every loan
            file bounces through manual intake, legacy LOS software, and
            expensive third-party processors before it reaches an underwriter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
              className="bg-[hsl(220,15%,8%)] p-7 xl:p-9"
            >
              <div className="text-3xl xl:text-4xl font-bold text-primary tracking-tight mb-2">
                {point.stat}
              </div>
              <p className="text-white/55 text-sm xl:text-[15px] leading-relaxed">
                {point.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center text-white/45 text-sm xl:text-base max-w-2xl mx-auto"
        >
          Tools like Encompass, LendingPad, and Blend were built for lenders.
          Brokers have been left with manual workflows, incomplete files, and
          margin pressure. Autyn is the first platform built for them.
        </motion.p>
      </div>
    </section>
  );
};
