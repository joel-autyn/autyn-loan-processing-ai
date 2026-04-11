import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileSearch, Brain, CheckCircle2, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Intake any loan file",
    description:
      "Drop documents in any format and any order. Autyn classifies W-2s, pay stubs, tax returns, bank statements, 1003s, and 50+ document types automatically.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Calculate FNMA-eligible income",
    description:
      "Handles salaried, self-employed, commission, variable, and rental income against Fannie Mae and Freddie Mac guidelines. Surfaces every number with its source.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Identify conditions before pre-approval",
    description:
      "Autyn flags missing documents, discrepancies, and required conditions before the file ever reaches an underwriter. No more back-and-forth.",
  },
  {
    number: "04",
    icon: Send,
    title: "One-click approval to the borrower",
    description:
      "Your loan officer reviews the AI’s work, approves in a single click, and Autyn sends the pre-approval letter — with a full audit trail attached.",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="section-padding bg-background"
      ref={ref}
      aria-labelledby="solution-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 xl:mb-20"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-5">
            How Autyn works
          </p>
          <h2
            id="solution-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.08] mb-6 text-balance"
          >
            From raw documents to{" "}
            <span className="serif font-normal text-primary">
              one-click approval
            </span>{" "}
            — in 10 minutes.
          </h2>
          <p className="text-muted-foreground text-lg xl:text-xl leading-relaxed">
            Autyn compresses 2–4 hours of pre-approval work into a ten-minute
            workflow that a single loan officer can run end-to-end. Human in
            the loop. Full explainability. Zero rip-and-replace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-7 xl:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono text-muted-foreground/50">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg xl:text-xl font-bold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-[14px] xl:text-[15px] leading-relaxed">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
