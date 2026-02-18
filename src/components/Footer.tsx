import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center shadow-md">
              <span className="font-display font-bold text-sm text-primary-foreground">CT</span>
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-base text-navy-foreground block leading-none">Cybaem Tech</span>
              <span className="text-xs text-primary-light tracking-widest uppercase font-medium">Global Managed IT</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 items-center text-sm text-navy-foreground/50">
            <a href="mailto:info@cybaemtech.com" className="flex items-center gap-1.5 hover:text-primary-light transition-colors">
              <Mail size={13} />
              info@cybaemtech.com
            </a>
            <span className="hidden sm:block">·</span>
            <a href="tel:+912069010200" className="flex items-center gap-1.5 hover:text-primary-light transition-colors">
              <Phone size={13} />
              +91 20 6901 0200
            </a>
            <span className="hidden sm:block">·</span>
            <span className="flex items-center gap-1.5">
              <Globe size={13} />
              India · UAE · UK · Europe
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-navy-foreground/30">
            © {currentYear} Cybaem Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
