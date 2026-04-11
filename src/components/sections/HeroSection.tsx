import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[hsl(35,30%,97%)] -z-20" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 15% 85% / 0.35) 1px, transparent 1px), linear-gradient(to right, hsl(220 15% 85% / 0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)",
        }}
      />
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-gradient-to-br from-[hsl(18,90%,88%)]/60 to-transparent blur-3xl -z-10" />

      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 xl:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] tracking-[0.14em] uppercase text-primary font-semibold">
                The AI Loan Processor for Independent Brokers
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(2.75rem,5.4vw,5.75rem)] leading-[1.02] font-bold mb-7 tracking-tight text-balance"
            >
              Pre-approve in 10&nbsp;minutes.
              <br />
              <span className="serif font-normal text-primary">
                Process files for $500.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              Autyn is the AI-native loan processing platform built for independent
              mortgage brokers. Extract documents, calculate FNMA-eligible income,
              clear conditions, and send approvals — without the $1,200 third-party
              processing fee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/demo">
                  Book a 15-minute demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/demo">Start free pre-approvals</Link>
              </Button>
            </motion.div>

            {/* Metrics strip — real numbers from the Autyn playbook */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 xl:mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl"
            >
              {[
                { value: "10 min", label: "Pre-approval (from 2–4 hrs)" },
                { value: "$500", label: "Per file vs. $800–$1,200" },
                { value: "$300–700", label: "Saved per loan" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl sm:text-3xl xl:text-4xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </dd>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Product preview — the Autyn workflow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-[hsl(220,15%,8%)] rounded-2xl shadow-2xl p-6 xl:p-7 border border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-[10px] tracking-[0.16em] uppercase text-white/40 font-semibold">
                    autyn · loan #24-0918
                  </span>
                </div>

                <div className="mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] uppercase tracking-wider text-white/40">
                      AI Analysis
                    </span>
                    <span className="text-[11px] text-green-400 font-medium">
                      Complete · 00:09:42
                    </span>
                  </div>
                  <div className="text-white font-bold text-lg">
                    Pre-approval ready
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">
                    Income verified · Conditions cleared · 1 click to send
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      title: "Documents extracted",
                      sub: "W-2 · Pay stubs · Tax returns · Bank statements",
                      status: "24 of 24",
                      tone: "green",
                    },
                    {
                      title: "FNMA-eligible income",
                      sub: "Salaried + variable commission reconciled",
                      status: "$9,870/mo",
                      tone: "primary",
                    },
                    {
                      title: "Conditions identified",
                      sub: "Updated LOE · Gift letter · VOE refresh",
                      status: "3 flagged",
                      tone: "yellow",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-3 bg-white/[0.03] hover:bg-white/[0.05] rounded-lg border border-white/5"
                    >
                      <div className="min-w-0">
                        <div className="font-medium text-[13px] text-white truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-white/40 truncate">
                          {item.sub}
                        </div>
                      </div>
                      <div
                        className={`text-[11px] font-semibold px-2 py-1 rounded-md flex-shrink-0 ml-3 ${
                          item.tone === "green"
                            ? "bg-green-500/10 text-green-400"
                            : item.tone === "primary"
                            ? "bg-primary/15 text-primary"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all">
                  Approve & send to borrower →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 xl:mt-20 pt-10 border-t border-foreground/5"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-semibold mb-5">
            Backed by operators from the broker channel
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-muted-foreground/80">
            <span className="text-base font-semibold">Barrett Financial Group</span>
            <span className="text-base font-semibold">Massif Mortgage</span>
            <span className="text-base font-semibold">Adelo Mortgage</span>
            <span className="text-base font-semibold">CoStar alumni</span>
            <span className="text-base font-semibold">FIS alumni</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
