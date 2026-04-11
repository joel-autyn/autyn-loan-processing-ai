import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "AI Pre-Approval",
    price: "Free",
    priceSub: "No credit card",
    tagline: "Run unlimited pre-approvals on real loan files.",
    features: [
      "Unlimited AI pre-approvals",
      "Document extraction & classification",
      "FNMA-eligible income calculation",
      "Condition detection",
      "One-click approval letters",
      "Human-in-the-loop review",
    ],
    cta: "Start free",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Full Processing",
    price: "$500",
    priceSub: "per closed file",
    tagline:
      "Replace your third-party loan processor. Pocket the difference.",
    features: [
      "Everything in AI Pre-Approval",
      "End-to-end processing to UW handoff",
      "Underwriter-ready file packaging",
      "Borrower, title, realtor, appraisal orchestration",
      "MISMO XML export & LOS integrations",
      "Full explainability & audit trail",
      "Broker network pricing available",
    ],
    cta: "Book a demo",
    variant: "hero" as const,
    highlight: true,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="section-padding bg-background"
      ref={ref}
      aria-labelledby="pricing-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 xl:mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-5">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.08] mb-6 text-balance"
          >
            $500 per file.{" "}
            <span className="serif font-normal text-primary">Not $1,200.</span>
          </h2>
          <p className="text-muted-foreground text-lg xl:text-xl leading-relaxed">
            Most brokers pay $800–$1,200 per loan to a third-party processor,
            plus $200–$350 per file for a loan assistant. Autyn replaces both —
            and keeps you in control of every file.
          </p>
        </motion.div>

        {/* Savings visualization */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14 xl:mb-16 p-6 xl:p-8 rounded-2xl bg-[hsl(35,30%,97%)] border border-border"
        >
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Third-party processor
              </div>
              <div className="text-2xl xl:text-3xl font-bold text-muted-foreground line-through decoration-muted-foreground/40">
                $800–$1,200
              </div>
            </div>
            <div className="text-2xl text-muted-foreground/40">→</div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary mb-1">
                With Autyn
              </div>
              <div className="text-2xl xl:text-3xl font-bold text-primary">
                $500
              </div>
            </div>
            <div className="text-2xl text-muted-foreground/40 hidden md:block">
              =
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Your savings per loan
              </div>
              <div className="text-2xl xl:text-3xl font-bold text-foreground">
                $300–$700
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-5 xl:gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative p-8 xl:p-10 rounded-2xl border transition-all ${
                tier.highlight
                  ? "bg-[hsl(220,15%,10%)] text-white border-primary/30 shadow-xl"
                  : "bg-card border-border"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 right-6 inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide uppercase">
                  Revenue tier
                </span>
              )}
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  tier.highlight ? "text-primary" : "text-primary"
                }`}
              >
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl xl:text-6xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlight ? "text-white/50" : "text-muted-foreground"
                  }`}
                >
                  {tier.priceSub}
                </span>
              </div>
              <p
                className={`text-[15px] leading-relaxed mb-8 ${
                  tier.highlight ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {tier.tagline}
              </p>

              <Button
                variant={tier.variant}
                size="lg"
                className="w-full mb-8 group"
                asChild
              >
                <Link to="/demo">
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-[14.5px] ${
                      tier.highlight ? "text-white/75" : "text-foreground/80"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-primary" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
