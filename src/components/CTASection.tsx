import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

const EngagementOptions = [
  { num: "01", title: "Managed IT Services", desc: "Ongoing IT operations and support" },
  { num: "02", title: "Managed Email Services", desc: "Daily email administration and support" },
  { num: "03", title: "Email Migration Projects", desc: "One-time platform transitions" },
  { num: "04", title: "Monitoring & Security", desc: "Proactive oversight and threat management" },
];

const CTASection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, hsl(214 84% 60%) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(200 100% 46%) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(214 84% 60% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(214 84% 60% / 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
            <span className="text-sm font-semibold text-primary-light tracking-widest uppercase">
              Get Started
            </span>
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-foreground mb-4 leading-tight">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-navy-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Cybaem Tech partners with organizations seeking reliable IT operations and secure email
            systems. Contact us to schedule a consultation and discover how we can simplify your IT
            operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: engagement options */}
          <div>
            <h3 className="font-display font-semibold text-lg text-navy-foreground mb-5">
              Engagement Options
            </h3>
            <div className="space-y-3">
              {EngagementOptions.map((opt) => (
                <div
                  key={opt.num}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shrink-0">
                    <span className="font-bold text-xs text-primary-foreground">{opt.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-foreground text-sm">{opt.title}</p>
                    <p className="text-navy-foreground/50 text-xs">{opt.desc}</p>
                  </div>
                  <ArrowRight size={16} className="text-navy-foreground/30 ml-auto shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact details + CTA */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
              <h3 className="font-display font-semibold text-lg text-navy-foreground mb-6">
                Contact Us
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:info@cybaemtech.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-foreground/50 mb-0.5">Email</p>
                    <p className="font-semibold text-navy-foreground text-sm group-hover:text-primary-light transition-colors">
                      info@cybaemtech.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+912069010200"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-foreground/50 mb-0.5">Phone</p>
                    <p className="font-semibold text-navy-foreground text-sm group-hover:text-primary-light transition-colors">
                      +91 20 6901 0200
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shrink-0">
                    <Globe size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-foreground/50 mb-0.5">Global Presence</p>
                    <p className="font-semibold text-navy-foreground text-sm">
                      India · UAE · UK · Europe · USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@cybaemtech.com"
                  className="flex-1 text-center bg-gradient-brand text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Send Us an Email
                </a>
                <a
                  href="tel:+912069010200"
                  className="flex-1 text-center border border-white/20 text-navy-foreground font-semibold py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
