import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FolderOpen, ShieldCheck, Calculator, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: FolderOpen,
    title: "Documents Organized in Minutes",
    description: "AI-powered classification and stacking. Every document sorted, labeled, and ready for review.",
    color: "bg-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Catch Errors Before Underwriting",
    description: "Automated 1003 data verification catches discrepancies before they become problems.",
    color: "bg-green-500",
  },
  {
    icon: Calculator,
    title: "Income Calculated in Seconds",
    description: "Handle complex scenarios instantly—self-employed, commission, variable income, and more.",
    color: "bg-purple-500",
  },
  {
    icon: Sparkles,
    title: "Stay Compliant with Confidence",
    description: "Built-in Fannie Mae & Freddie Mac rule checks ensure you never miss a requirement.",
    color: "bg-primary",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Team Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Autyn isn't just faster—it's smarter. Built specifically for mortgage professionals who demand accuracy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border shadow-sm card-hover"
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
