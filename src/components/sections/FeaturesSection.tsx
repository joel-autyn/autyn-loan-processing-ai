import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Calculator,
  ShieldCheck,
  Users,
  Plug,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "End-to-end platform",
    description:
      "Pre-approval and full loan processing in a single workflow. Not a point solution bolted onto your LOS — a broker-first operating system that takes you from borrower intake to underwriter handoff.",
  },
  {
    icon: Calculator,
    title: "FNMA-grade income engine",
    description:
      "Handles W-2, self-employed, commission, variable, and rental income. Tuned to GSE guidelines plus the specific overlays of your wholesale lenders.",
  },
  {
    icon: ShieldCheck,
    title: "Explainable AI with a full audit trail",
    description:
      "Every decision Autyn makes is traceable. See why a document was flagged, how income was calculated, and why a condition was added — on the record, every time.",
  },
  {
    icon: Users,
    title: "Broker-first workflows",
    description:
      "Built around how independent brokers actually work — orchestrating borrower, realtor, title, appraisal, and underwriter in a single view. Not a lender tool with a broker skin.",
  },
  {
    icon: Plug,
    title: "Works with your existing stack",
    description:
      "Integrates with leading LOS and CRM platforms, supports MISMO XML export, and offers an API for custom workflows. No rip-and-replace, no retraining your team.",
  },
  {
    icon: LineChart,
    title: "Smarter with every loan",
    description:
      "Autyn learns from every file it touches. Pre-approvals get faster, condition detection gets sharper, and income calculations stay in lockstep with evolving guidelines.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="platform"
      className="section-padding bg-muted"
      ref={ref}
      aria-labelledby="features-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 xl:mb-20"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-5">
            The platform
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.08] text-balance"
          >
            Everything a broker needs{" "}
            <span className="serif font-normal text-primary">
              in one platform.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.07 }}
              className="p-7 xl:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-[14.5px] leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
