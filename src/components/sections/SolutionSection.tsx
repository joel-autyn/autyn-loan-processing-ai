import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Drop your loan documents in any format, any order. Autyn takes it from there.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "AI classifies documents, extracts data, verifies the 1003, calculates income, and flags issues — in seconds.",
  },
  {
    number: "03",
    title: "Close",
    description:
      "Your team gets a clean, organized file with actionable insights. Focus on decisions, not data entry.",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solution" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
            Three steps to{" "}
            <span className="serif font-normal text-primary">
              5× productivity
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              className="relative py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-l first:md:border-l-0 border-border last:border-b-0"
            >
              <span className="text-[4.5rem] leading-none font-bold <span className="text-[4.5rem] leading-none font-bold text-muted-foreground/40 block mb-4"> block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
