import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5×", label: "More loans per processor" },
  { value: "20×", label: "First-year ROI" },
  { value: "80%", label: "Faster processing" },
  { value: "70%", label: "Less manual overhead" },
];

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="results" className="py-20 md:py-24 bg-background border-y border-border" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="lg:border-l lg:first:border-l-0 border-border lg:px-8 lg:first:pl-0 text-center lg:text-left"
            >
              <div className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
