import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="IT infrastructure background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(hsl(214 84% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(214 84% 60% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Globe size={14} className="text-primary-light" />
          <span className="text-sm font-medium text-navy-foreground/90 tracking-wide">
            Global Presence · India · UAE · UK · Europe
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          Global Managed IT &{" "}
          <span className="text-gradient bg-gradient-brand">Email Services</span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-foreground/80">
            Provider
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-navy-foreground/70 font-medium mb-4 animate-fade-in-up delay-100">
          Enterprise-Grade IT Support Without the Enterprise Cost
        </p>

        {/* Intro paragraph */}
        <p className="text-base md:text-lg text-navy-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200">
          Cybaem Tech delivers reliable, secure, and scalable IT operations across India, the Gulf,
          United Kingdom, Europe, and the United States — helping organizations simplify IT
          management and maintain business continuity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-brand text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
          <a
            href="#who-we-are"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up delay-400">
          {[
            { num: "4+", label: "Global Regions" },
            { num: "10–100+", label: "Employees Served" },
            { num: "24×7", label: "Monitoring & Support" },
            { num: "SLA", label: "Driven Delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 text-center"
            >
              <div className="font-display font-bold text-2xl text-primary-light mb-1">
                {stat.num}
              </div>
              <div className="text-xs text-navy-foreground/60 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
