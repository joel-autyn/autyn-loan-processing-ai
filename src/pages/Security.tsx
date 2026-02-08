import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Server, Database, Brain, Mail } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold text-secondary">Security</h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12">
              At Autyn, we use <strong className="text-secondary">enterprise-grade security</strong> to protect your data and ensure the highest standards of privacy and compliance.
            </p>

            <div className="space-y-8">
              {/* Infrastructure */}
              <section className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary mb-2">Cloud Infrastructure</h2>
                    <p className="text-muted-foreground">
                      We use <strong>AWS</strong> as our cloud provider and <strong>Auth0</strong> for our authentication infrastructure, ensuring reliable, scalable, and secure operations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Encryption */}
              <section className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary mb-2">Data Encryption</h2>
                    <p className="text-muted-foreground">
                      We encrypt all user data at rest using <strong>AES-256</strong> encryption and in transit using <strong>TLS 1.2+</strong>, ensuring your information is protected at every stage.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Segregation */}
              <section className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary mb-2">Data Segregation</h2>
                    <p className="text-muted-foreground">
                      Your data is kept completely segregated from the data of other customers, ensuring isolation and preventing any cross-contamination of sensitive information.
                    </p>
                  </div>
                </div>
              </section>

              {/* AI Privacy */}
              <section className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary mb-2">AI Privacy</h2>
                    <p className="text-muted-foreground">
                      We never send identifiable borrower data to AI systems. All personal information is anonymized within our secure infrastructure before processing.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary mb-2">Security Questions?</h2>
                    <p className="text-muted-foreground mb-3">
                      If you have any questions about our security practices, please reach out to our security team.
                    </p>
                    <a
                      href="mailto:security@autyn.ai"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      security@autyn.ai
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
