import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload the Loan File",
    description: "Simply upload your loan documents. Any format, any order—Autyn handles the chaos.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Autyn Analyzes Instantly",
    description: "AI classifies documents, extracts data, verifies 1003, calculates income, and flags issues in seconds.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Review and Close Faster",
    description: "Your team gets a clean, organized file with insights. Focus on decisions, not data entry.",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Three Steps to{" "}
            <span className="gradient-text">5x Productivity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No complicated setup. No training required. Just upload and let Autyn do the heavy lifting.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm card-hover h-full">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-orange">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <span className="text-6xl font-bold text-muted/50 absolute top-6 right-6">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
