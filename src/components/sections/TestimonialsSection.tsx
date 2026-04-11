import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

// Honest "Why brokers pick Autyn" section. No fabricated customer quotes —
// these are paraphrased positioning statements grounded in the pitch deck.
const reasons = [
  {
    headline: "Broker-first, not lender-first",
    body: "Encompass, LendingPad, and Blend were designed for lenders. Friday Harbor and tidalwave are lender-centric AI. Autyn is the only end-to-end platform purpose-built for the independent broker channel.",
  },
  {
    headline: "End-to-end, not a point solution",
    body: "Ocrolus digitizes documents. Floify handles intake. Arrive handles the 1003. Autyn covers the entire file — from borrower intake through pre-approval, condition clearing, and underwriter-ready handoff.",
  },
  {
    headline: "Immediately positive unit economics",
    body: "Brokers were already paying $800–$1,200 per file to third-party processors. Autyn lands at $500 per file, so there is no new line item — only savings, pocketed immediately or passed to the borrower.",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-autyn"
      className="section-padding bg-muted"
      ref={ref}
      aria-labelledby="why-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 xl:mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-5">
            Why Autyn wins
          </p>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.08] text-balance"
          >
            The first AI loan processor{" "}
            <span className="serif font-normal text-primary">
              built for brokers.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 xl:gap-6">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 xl:p-9 border border-border shadow-sm"
            >
              <Quote className="w-5 h-5 text-primary mb-5" />
              <h3 className="text-lg xl:text-xl font-bold mb-4 leading-snug tracking-tight">
                {reason.headline}
              </h3>
              <p className="text-muted-foreground text-[14.5px] xl:text-[15px] leading-relaxed">
                {reason.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Advisor/partner strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-center text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-semibold mb-7">
            Built with operators from the broker channel
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-muted-foreground/70">
            <span className="text-lg font-semibold">Barrett Financial Group</span>
            <span className="text-lg font-semibold">Massif Mortgage</span>
            <span className="text-lg font-semibold">Adelo Mortgage</span>
            <span className="text-lg font-semibold">CoStar alumni</span>
            <span className="text-lg font-semibold">FIS alumni</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
