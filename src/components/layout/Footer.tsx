import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import autynLogo from "@/assets/autyn-logo.png";

const footerLinks = {
  product: [
    { name: "How It Works", href: "#solution" },
    { name: "Features", href: "#features" },
    { name: "Results", href: "#results" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { name: "Terms of Service", href: "/terms-of-service", isRoute: true },
    { name: "Security", href: "/security", isRoute: true },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/autyn/",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/autynai",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/autynai",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/autynai/",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const EqualHousingLogo = () => (
  <svg className="w-6 h-6 text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* House outline */}
    <path d="M12 3L2 10h3v10h14V10h3L12 3z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    {/* Equals sign */}
    <rect x="8" y="12" width="8" height="1.5" rx="0.25" fill="hsl(220,15%,8%)" />
    <rect x="8" y="15" width="8" height="1.5" rx="0.25" fill="hsl(220,15%,8%)" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-[hsl(220,15%,8%)] text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
          {/* Column 1: Brand */}
          <div>
            <img src={autynLogo} alt="Autyn" className="h-4 w-auto brightness-0 invert opacity-80 mb-3" />
            <p className="text-sm text-white/35 mb-2">AI-powered loan processing for mortgage professionals.</p>
            <p className="text-sm text-white/35">NMLS #: 2818898</p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/25 font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/45 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/25 font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {"isRoute" in link && link.isRoute ? (
                    <Link to={link.href} className="text-sm text-white/45 hover:text-primary transition-colors duration-300">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-white/45 hover:text-primary transition-colors duration-300">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/25 font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/45 hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@autyn.ai" className="text-sm text-white/45 hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-primary transition-colors duration-300"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
            <a href="mailto:info@autyn.ai" className="text-white/20 hover:text-primary transition-colors duration-300">
              <span className="sr-only">Email</span>
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <EqualHousingLogo />
              <span className="text-[11px] text-white/20">Equal Housing Opportunity</span>
            </div>
            <p className="text-[11px] text-white/20">
              Licensing info at{" "}
              <a
                href="https://nmlsconsumeraccess.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                nmlsconsumeraccess.org
              </a>
            </p>
            <p className="text-[11px] text-white/20">© {new Date().getFullYear()} Autyn. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
