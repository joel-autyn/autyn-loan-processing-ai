import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(35,30%,97%)] -z-10" />
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[hsl(18,60%,96%)] to-transparent -z-10" />

      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Content */}
          <div>
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
              className="text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] font-bold mb-8 tracking-tight"
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
              className="mt-16 xl:mt-20 flex flex-wrap gap-10 sm:gap-14 xl:gap-20"
            >
              {[
                { value: "5×", label: "loan volume" },
                { value: "80%", label: "faster processing" },
                { value: "20×", label: "ROI year one" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — dashboard preview on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="bg-card rounded-2xl shadow-xl p-6 xl:p-8 border border-border">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>

              <div className="space-y-3">
                {[
                  { icon: "📄", title: "W-2 Form 2024", sub: "Verified • Complete", badge: "✓ Verified", badgeClass: "bg-green-100 text-green-700" },
                  { icon: "📊", title: "Income Calculation", sub: "$8,450/month avg.", badge: "Auto-calculated", badgeClass: "bg-primary/10 text-primary" },
                  { icon: "🏠", title: "1003 Application", sub: "98% complete", badge: "2 items pending", badgeClass: "bg-yellow-100 text-yellow-700" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between p-3.5 xl:p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-sm">{item.icon}</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.sub}</div>
                      </div>
                    </div>
                    <div className={`px-2.5 py-1 ${item.badgeClass} rounded-full text-xs font-medium`}>
                      {item.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
