import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  "Sorting documents by hand for every file",
  "Chasing borrowers for missing paperwork",
  "Cross-checking 1003 fields line by line",
  "Manually calculating self-employed income",
  "Worrying about compliance gaps",
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 xl:py-36 bg-[hsl(220,15%,12%)]" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Your processors are talented.
              <br />
              <span className="serif font-normal text-white/50">
                They're just buried.
              </span>
            </h2>
            <p className="text-white/50 text-lg xl:text-xl leading-relaxed">
              Every loan file brings the same bottlenecks. The work is
              repetitive, error-prone, and draining — and it's keeping your
              team from the work that actually matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ul className="space-y-0">
              {painPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="flex items-center gap-4 py-5 xl:py-6 border-b border-white/8 last:border-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-white/70 text-[15px] xl:text-base">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
