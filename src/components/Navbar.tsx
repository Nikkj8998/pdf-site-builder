import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Services", href: "#services" },
  { label: "Support Models", href: "#support-models" },
  { label: "Email Services", href: "#email-services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-nav backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center shadow-md">
            <span className="font-display font-bold text-sm text-primary-foreground">CT</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-lg text-primary-foreground block leading-none">Cybaem</span>
            <span className="text-xs text-primary-light tracking-widest uppercase font-medium">Tech</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-foreground/80 hover:text-primary-light transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-semibold text-primary-light hover:text-primary-foreground transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-navy-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-navy-foreground/80 hover:text-primary-light py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-3 text-center text-sm font-semibold bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
