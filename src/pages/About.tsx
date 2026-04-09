import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder photos until actual headshots are added
const myraPhoto = "/placeholder.svg";
const joelPhoto = "/placeholder.svg";

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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[hsl(35,30%,97%)]">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-6">About Autyn</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Building the future of <span className="serif font-normal text-primary">mortgage processing</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Autyn is an AI-native loan processing platform purpose-built for mortgage brokers. We automate the
                manual workflows that consume hours of every loan file — document classification, income calculation,
                1003 verification, and compliance checks — so loan officers can focus on what they do best: originating
                loans and building relationships.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a $2 trillion mortgage market where 25% of brokers still lack AI-powered automation, we're replacing
                outdated spreadsheets and $800–$1,200 third-party processing fees with an intelligent platform that
                handles pre-approval in minutes, not hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-4">Meet the Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
                Founded by operators who <span className="serif font-normal text-primary">know the industry</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                    <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{founder.role}</p>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{founder.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted border-t border-border">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to see Autyn in action?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Book a 15-minute demo and see how we can help your team close more loans.
              </p>
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/demo">
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
