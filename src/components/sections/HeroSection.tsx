import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Subtle warm background */}
      <div className="absolute inset-0 bg-[hsl(35,30%,97%)] -z-10" />
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[hsl(18,60%,96%)] to-transparent -z-10" />

      <div className="container-narrow w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-8">
              AI Loan Processing
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] font-bold mb-8 tracking-tight"
          >
            More loans.
            <br />
            <span className="serif font-normal text-primary">Same team.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
          >
            Autyn handles intake, document review, and pre-underwriting —
            so your team can focus on originating and closing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/demo">
                Schedule a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 flex flex-wrap gap-12 sm:gap-16"
          >
            {[
              { value: "5×", label: "loan volume" },
              { value: "80%", label: "faster processing" },
              { value: "20×", label: "ROI year one" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
