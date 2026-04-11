import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// "Traction" — replaces the old fabricated stats with numbers grounded in
// Autyn's real design-partner data.
const stats = [
  {
    value: "12",
    label: "Design-partner broker firms using Autyn weekly",
  },
  {
    value: "70%",
    label: "of brokers convert to active use within 30 days",
  },
  {
    value: "1,900+",
    label: "loan officers reachable through anchor partnerships",
  },
  {
    value: "3×/week",
    label: "average usage among active design partners",
  },
];

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="traction"
      className="py-20 md:py-24 xl:py-28 bg-background border-y border-border"
      ref={ref}
      aria-labelledby="traction-heading"
    >
      <div className="container-narrow">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          id="traction-heading"
          className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-10 text-center"
        >
          Early traction
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="lg:border-l lg:first:border-l-0 border-border lg:px-8 xl:px-10 lg:first:pl-0 text-center lg:text-left"
            >
              <div className="text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm xl:text-[15px] text-muted-foreground leading-snug max-w-[14rem] mx-auto lg:mx-0">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
