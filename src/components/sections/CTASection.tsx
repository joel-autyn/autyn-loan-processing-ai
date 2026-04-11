import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 md:py-36 xl:py-44 bg-[hsl(220,15%,8%)] relative overflow-hidden"
      ref={ref}
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] -z-0" />
      <div
        className="absolute inset-0 opacity-[0.08] -z-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(35 100% 60% / 0.5) 1px, transparent 1px), linear-gradient(to right, hsl(35 100% 60% / 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.05] mb-7 text-balance"
          >
            More loans.
            <br />
            <span className="serif font-normal text-primary">Same team.</span>
          </h2>
          <p className="text-white/55 text-lg xl:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Start free AI pre-approvals today. See Autyn running on your real
            loan files in a 15-minute demo — no rip-and-replace, no new seats,
            no long contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/demo">
                Book a 15-minute demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:text-white"
              asChild
            >
              <Link to="/demo">Start free pre-approvals</Link>
            </Button>
          </div>

          <p className="mt-10 text-[13px] text-white/40">
            Questions? Email{" "}
            <a href="mailto:info@autyn.ai" className="underline hover:text-primary">
              info@autyn.ai
            </a>
            . Founders read every message.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
