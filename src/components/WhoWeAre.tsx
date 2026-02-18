import { Users, Target, Globe } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Enterprise-Grade IT Support{" "}
              <span className="text-gradient">Without the Enterprise Cost</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cybaem Tech is a global Managed IT Services provider delivering reliable, secure, and
              scalable IT operations across India, the Gulf, United Kingdom, Europe, and the United
              States.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We help organizations simplify IT management, reduce operational risk, and maintain
              business continuity through structured Managed IT Support and professional Email
              Services. Our services are built on globally accepted best practices and SLA-driven
              processes, designed for businesses that want enterprise-grade IT support without the
              cost and complexity of building large in-house IT teams.
            </p>

            {/* Focus card */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Target size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Our Focus</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Small and mid-sized businesses with 10–100+ employees seeking reliable, secure,
                    and scalable IT operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — visual cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Globe,
                label: "Global Reach",
                desc: "India · UAE · UK · Europe · USA",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Users,
                label: "Dedicated Teams",
                desc: "Extension of your internal IT function",
                color: "bg-accent/10 text-accent",
              },
              {
                icon: Target,
                label: "SLA-Driven",
                desc: "Globally accepted best practices",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Globe,
                label: "Remote-First",
                desc: "Centralized governance, global delivery",
                color: "bg-accent/10 text-accent",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
                  <card.icon size={18} />
                </div>
                <p className="font-semibold text-foreground text-sm mb-1">{card.label}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
