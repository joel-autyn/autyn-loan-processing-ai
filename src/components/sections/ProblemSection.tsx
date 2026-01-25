import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileX, Clock, Calculator, AlertTriangle, Search } from "lucide-react";

const painPoints = [
  {
    icon: FileX,
    title: "Manual Document Sorting",
    description: "Hours spent organizing and categorizing loan documents by hand.",
  },
  {
    icon: Search,
    title: "Chasing Missing Docs",
    description: "Endless back-and-forth with borrowers for incomplete files.",
  },
  {
    icon: Clock,
    title: "Tedious 1003 Verification",
    description: "Manually cross-checking every field takes forever.",
  },
  {
    icon: Calculator,
    title: "Complex Income Calculations",
    description: "Self-employed, commission, rental—each scenario is a puzzle.",
  },
  {
    icon: AlertTriangle,
    title: "Compliance Anxiety",
    description: "Fear of missing regulatory requirements and audit findings.",
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Your Team Is Drowning <br className="hidden sm:block" />
            in Paperwork
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Every loan file brings the same frustrating bottlenecks. Your processors 
            are talented—but they're buried in tasks that shouldn't be manual.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
