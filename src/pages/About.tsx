import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import myraPhoto from "@/assets/myra.png";
import joelPhoto from "@/assets/joel.png";

const founders = [
  {
    name: "Myra D'Souza",
    role: "Co-founder & CEO",
    photo: myraPhoto,
    bio: "Myra brings a decade of experience building applied AI systems in regulated industries, including her time at FIS. She holds a patent pending in Agentic AI workflow automation for banks and lenders, and has led and scaled AI teams and client products for Fortune 500 companies. She holds a BS and MS in Data Analytics Engineering.",
  },
  {
    name: "Joel D'Souza",
    role: "Co-founder & COO",
    photo: joelPhoto,
    bio: "Joel scaled operations and automation at CoStar Group in commercial real estate and brings over 15 years of experience as a real estate investor. He is a licensed Mortgage Loan Officer with deep knowledge of broker workflows and pain points. He holds a BS and MS in Software Engineering from Rutgers University.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Company Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 xl:pt-44 xl:pb-32 bg-[hsl(35,30%,97%)]">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl xl:max-w-3xl"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold mb-6">
                About Autyn
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.08] mb-7 text-balance">
                We're building the operating system for{" "}
                <span className="serif font-normal text-primary">
                  independent mortgage brokers.
                </span>
              </h1>
              <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed mb-5">
                Autyn is an AI-native loan processing platform purpose-built
                for independent mortgage brokers. We automate the manual
                workflows that eat hours off every loan file — document
                classification, FNMA-eligible income calculation, 1003
                verification, condition detection, and compliance checks — so
                loan officers can focus on originating loans and building
                relationships.
              </p>
              <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed">
                The broker channel moves roughly a quarter of the $2 trillion
                U.S. mortgage market. It still runs on spreadsheets, legacy
                LOS software, and $800–$1,200 third-party processors. Autyn
                replaces all of that with a single broker-first platform that
                turns a 2–4 hour pre-approval workflow into 10 minutes, at
                $500 per closed file.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 md:py-28 xl:py-36 bg-background">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16 xl:mb-20"
            >
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-4">
                Meet the Team
              </p>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight max-w-lg">
                Founded by operators who{" "}
                <span className="serif font-normal text-primary">
                  know the industry
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-6 max-w-[320px]">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground text-[15px] xl:text-base leading-relaxed">
                    {founder.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
