import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Autyn transformed our processing department. We're closing 3x more loans with the same team size.",
    author: "Sarah Mitchell",
    role: "VP of Operations",
    company: "Premier Mortgage Group",
  },
  {
    quote: "The income calculation feature alone saves us 5+ hours per complex file. Game changer for self-employed borrowers.",
    author: "James Rodriguez",
    role: "Senior Loan Processor",
    company: "HomeTrust Lending",
  },
  {
    quote: "Finally, a tool that understands mortgage documents. Our error rate dropped by 85% in the first month.",
    author: "Emily Chen",
    role: "Compliance Director",
    company: "Pacific Coast Mortgage",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by Mortgage Professionals
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-lg text-secondary mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading mortgage companies nationwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <div className="text-xl font-bold text-secondary">Premier Mortgage</div>
            <div className="text-xl font-bold text-secondary">HomeTrust</div>
            <div className="text-xl font-bold text-secondary">Pacific Coast</div>
            <div className="text-xl font-bold text-secondary">LendRight</div>
            <div className="text-xl font-bold text-secondary">First Choice</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
