import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FolderOpen,
  ShieldCheck,
  Calculator,
  Brain,
  Bell,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Document Recognition",
    description:
      "Instantly identifies W-2s, pay stubs, tax returns, bank statements, and 50+ document types. Every document sorted, labeled, and stacked for review.",
  },
  {
    icon: Calculator,
    title: "Income Calculated in Seconds",
    description:
      "Handle complex scenarios instantly — self-employed, commission, variable income, rental, and more. No more spreadsheets, no more guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "1003 Verification & Compliance",
    description:
      "Automated data verification catches discrepancies before underwriting. Built-in Fannie Mae & Freddie Mac rule checks keep you compliant.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Proactive notifications about missing documents, data discrepancies, and potential issues — before they become problems.",
  },
  {
    icon: Plug,
    title: "Works With Your Stack",
    description:
      "Native integrations with your existing LOS and CRM. MISMO XML export, API access, and zero disruption to your current workflow.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-xl"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Built for{" "}
            <span className="serif font-normal text-primary">
              mortgage professionals
            </span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-4 md:gap-8 py-8 border-b border-border last:border-0"
            >
              <div className="flex items-start gap-3">
                <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <h3 className="text-base font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-[15px] leading-relaxed md:max-w-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
