import { Award, SlidersHorizontal, Shield, DollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    desc: "Deep specialization in Managed IT and Email Services with globally accepted best practices and frameworks.",
  },
  {
    icon: SlidersHorizontal,
    title: "SLA-Driven Delivery",
    desc: "Clearly defined service level agreements with documented escalation procedures, response times, and resolution commitments.",
  },
  {
    icon: Shield,
    title: "Security-Focused Operations",
    desc: "Industry-standard security practices including secure access management, data protection, controlled change management, and compliance readiness.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Predictable fixed monthly models or project-based pricing with no hidden costs — scalable services that grow with your business.",
  },
  {
    icon: Users,
    title: "Single Point of Accountability",
    desc: "Dedicated account management, monthly service reporting, and centralized governance ensuring you always know who to call.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              Why Choose Us
            </span>
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Cybaem Tech
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need comprehensive managed IT services, specialized email support, or a
            complex migration project — we're here to deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${
                i === reasons.length - 1 && reasons.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-5 shadow-md">
                <reason.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
