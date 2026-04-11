import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 xl:py-44 bg-[hsl(220,15%,12%)] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -z-0" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-tight mb-6">
            Ready to close
            <br />
            <span className="serif font-normal text-primary">more loans?</span>
          </h2>
          <p className="text-white/50 text-lg xl:text-xl mb-10 max-w-md mx-auto leading-relaxed">
            See how Autyn can transform your team's output in a
            15-minute live demo.
          </p>

          <Button variant="hero" size="lg" className="group" asChild>
            <Link to="/demo">
              Schedule Your Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

        </motion.div>
      </div>
    </section>
  );
};
