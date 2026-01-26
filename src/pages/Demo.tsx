import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Demo = () => {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/243826060.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Schedule Your <span className="gradient-text">Demo</span>
              </h1>
              <p className="text-lg text-muted-foreground">Close more loans with the same team.</p>
            </div>

            <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
              <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="bdff7894-b6ef-48d9-b3ab-0ef7a082a8d7"
                data-portal-id="243826060"
              />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
