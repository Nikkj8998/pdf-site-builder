import { Globe } from "lucide-react";

const industries = [
  { number: "01", name: "Technology & SaaS", icon: "💻" },
  { number: "02", name: "Finance & Accounting", icon: "📊" },
  { number: "03", name: "Manufacturing", icon: "🏭" },
  { number: "04", name: "Retail & E-commerce", icon: "🛍️" },
  { number: "05", name: "Professional Services", icon: "💼" },
  { number: "06", name: "Healthcare", icon: "🏥" },
];

const regions = [
  { name: "India", detail: "Primary delivery hub" },
  { name: "Gulf Region", detail: "UAE · KSA · Qatar" },
  { name: "United Kingdom", detail: "European anchor" },
  { name: "Europe", detail: "Wider European coverage" },
  { name: "United States", detail: "North America" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Industries */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                Industries We Serve
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Trusted Across Industries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cybaem Tech serves diverse sectors with specialized IT and email support tailored to
              industry-specific requirements.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <div
                  key={industry.number}
                  className="bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="text-2xl mb-2">{industry.icon}</div>
                  <div className="text-xs font-bold text-muted-foreground/50 tracking-widest mb-0.5">
                    {industry.number}
                  </div>
                  <p className="font-semibold text-foreground text-sm leading-snug">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Delivery */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                Global Delivery
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Global Delivery Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We operate with a remote-first global delivery model, ensuring consistent service
              quality across all regions with fast response times, standardized processes, and
              centralized governance.
            </p>

            <div className="bg-navy rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 mb-5">
                <Globe size={18} className="text-primary-light" />
                <span className="font-semibold text-navy-foreground text-sm">Our Presence</span>
              </div>
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                >
                  <span className="font-semibold text-navy-foreground text-sm">{region.name}</span>
                  <span className="text-navy-foreground/50 text-xs">{region.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
