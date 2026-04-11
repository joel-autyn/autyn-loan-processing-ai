import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Canonical FAQ content. This is also serialized as FAQPage JSON-LD in
// index.html for answer-engine optimization — keep the two in sync.
export const faqItems = [
  {
    q: "What is Autyn?",
    a: "Autyn is an AI-native loan processing platform built specifically for independent mortgage brokers. It extracts documents, calculates FNMA-eligible income, identifies conditions, and packages underwriter-ready loan files — reducing a 2–4 hour pre-approval workflow to roughly 10 minutes per loan.",
  },
  {
    q: "Who is Autyn built for?",
    a: "Autyn is built for independent mortgage brokers, broker networks, and small-to-mid-sized non-bank lenders in the U.S. broker channel. If you originate loans and currently pay a third-party loan processor, Autyn is designed for you. It is not a lender-side underwriting tool.",
  },
  {
    q: "How much does Autyn cost?",
    a: "AI pre-approvals are free and unlimited. Full end-to-end processing is $500 per closed file, which replaces the $800–$1,200 most brokers pay third-party processors. There are no seat fees, no FTE costs, and pricing scales linearly with volume. Broker network pricing is available for multi-firm deployments.",
  },
  {
    q: "How is Autyn different from Encompass, LendingPad, Blend, or Friday Harbor?",
    a: "Encompass, LendingPad, and Blend are legacy lender-first LOS/POS platforms with manual workflows. Friday Harbor and tidalwave build AI for the lender underwriter side. Ocrolus and Floify solve single points (OCR, intake). Autyn is the only end-to-end AI-native platform built for the broker channel, combining pre-approval and full processing in one broker-first workflow with full explainability.",
  },
  {
    q: "How does Autyn calculate borrower income?",
    a: "Autyn extracts pay stubs, W-2s, tax returns, bank statements, and other source documents, then calculates eligible income against Fannie Mae and Freddie Mac guidelines plus your wholesale lender’s overlays. It handles salaried, self-employed, commission, variable, and rental income, and surfaces every number with its source for audit.",
  },
  {
    q: "Is Autyn compliant with FNMA and Freddie Mac guidelines?",
    a: "Yes. Autyn’s income and eligibility logic is built around current Fannie Mae Selling Guide and Freddie Mac Seller/Servicer Guide requirements, and it supports lender-specific overlays. Every decision is logged with a full audit trail, and Autyn supports RESPA, TILA, and MISMO-standard outputs for downstream systems.",
  },
  {
    q: "Does Autyn replace my LOS or CRM?",
    a: "No. Autyn is designed to work alongside your existing LOS and CRM. It integrates with leading broker LOS platforms, supports MISMO XML export, and offers an API. There is no rip-and-replace — Autyn sits between your intake and your underwriter handoff.",
  },
  {
    q: "How does Autyn protect borrower data?",
    a: "Autyn treats borrower data with the standards expected of a regulated-industry platform: encryption in transit and at rest, strict access controls, principle of least privilege, and detailed audit logging. Full security details are available at autyn.ai/security.",
  },
  {
    q: "How long does implementation take?",
    a: "Most design-partner firms start running free AI pre-approvals on day one. A typical pilot runs 5–10 loan files to prove roughly 40% faster processing and $300 per loan in savings before expanding to the broader firm. Broker network rollouts usually follow a land-and-expand playbook across 30–60 days.",
  },
  {
    q: "How do I get started with Autyn?",
    a: "You can start free AI pre-approvals immediately, or book a 15-minute demo at autyn.ai/demo. Autyn’s founding team — including a licensed Mortgage Loan Officer — onboards every design partner personally.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="section-padding bg-background"
      ref={ref}
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 xl:mb-14"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-5">
            Frequently asked
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.08] text-balance"
          >
            Questions from{" "}
            <span className="serif font-normal text-primary">
              broker owners
            </span>{" "}
            and loan officers.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-base xl:text-lg font-semibold py-6 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] xl:text-base leading-relaxed pb-6 max-w-3xl">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
