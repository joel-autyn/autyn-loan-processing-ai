import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Bell, BarChart3, Plug } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Document Recognition",
    description: "AI that understands mortgage documents. Instantly identifies W-2s, pay stubs, tax returns, bank statements, and 50+ document types.",
  },
  {
    icon: Bell,
    title: "Smart Alerts & Insights",
    description: "Proactive notifications about missing documents, data discrepancies, and potential issues before they become problems.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Loan Tracking",
    description: "Beautiful dashboards that show exactly where every loan stands. Pipeline visibility for the entire team.",
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    description: "Works with your existing LOS and CRM. MISMO XML export, API access, and native integrations with popular platforms.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Built for Mortgage Professionals
            </h2>
            <p className="text-lg text-secondary-foreground/70 mb-8">
              Every feature designed with one goal: help your team close more loans with less effort.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-foreground/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-secondary-foreground/5 rounded-2xl p-8 border border-secondary-foreground/10">
              {/* Dashboard mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-secondary-foreground/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-xs text-secondary-foreground/60">Active Loans</div>
                  </div>
                  <div className="bg-secondary-foreground/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">12</div>
                    <div className="text-xs text-secondary-foreground/60">Ready to Close</div>
                  </div>
                  <div className="bg-secondary-foreground/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">5</div>
                    <div className="text-xs text-secondary-foreground/60">Needs Review</div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 bg-secondary-foreground/5 rounded-lg flex items-end justify-between p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-primary/60 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Activity */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary-foreground/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-secondary-foreground">Johnson file verified</div>
                      <div className="text-xs text-secondary-foreground/50">2 min ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary-foreground/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs">⚡</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-secondary-foreground">Income calculated: Smith</div>
                      <div className="text-xs text-secondary-foreground/50">5 min ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
