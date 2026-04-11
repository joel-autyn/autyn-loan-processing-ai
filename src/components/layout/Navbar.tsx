import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import autynLogo from "@/assets/autyn-logo.png";

const navLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Platform", href: "#platform" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/40"
      aria-label="Primary"
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link to="/" className="flex items-center" aria-label="Autyn home">
            <img src={autynLogo} alt="Autyn" className="h-14 w-auto py-1" />
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/demo">Start free</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/demo">Book a demo</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-background border-t border-border/40"
          >
            <div className="container-narrow py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground font-medium py-3 text-[15px]"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-foreground font-medium py-3 text-[15px]"
              >
                About
              </Link>
              <div className="pt-4 mt-2 border-t border-border/40 flex flex-col gap-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/demo" onClick={() => setIsOpen(false)}>
                    Start free
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/demo" onClick={() => setIsOpen(false)}>
                    Book a demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
