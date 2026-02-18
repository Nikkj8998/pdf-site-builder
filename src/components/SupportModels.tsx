import { Clock, MonitorCheck, ShieldCheck } from "lucide-react";

const models = [
  {
    id: "01",
    icon: Clock,
    title: "Business Hours Support",
    tag: "8×5 Coverage",
    desc: "8×5 coverage for organizations with standard operating schedules. Perfect for businesses that operate during regular business hours and need reliable IT support without round-the-clock requirements.",
    features: [
      "Monday–Friday business hours coverage",
      "Helpdesk and incident management",
      "Proactive monitoring during hours",
      "Monthly reporting",
    ],
    highlighted: false,
  },
  {
    id: "02",
    icon: MonitorCheck,
    title: "24×7 Managed IT",
    tag: "Always-On",
    desc: "Around-the-clock monitoring and support for continuous operations. Ideal for businesses that cannot afford downtime and require constant vigilance over their IT infrastructure.",
    features: [
      "Round-the-clock monitoring",
      "24×7 incident response",
      "Proactive issue detection",
      "Priority escalation paths",
    ],
    highlighted: true,
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Premium Plus Services",
    tag: "Advanced Security",
    desc: "24×7 support with advanced security monitoring and threat response. Our most comprehensive offering for organizations with critical security requirements.",
    features: [
      "24×7 support + security monitoring",
      "Threat detection & response",
      "Advanced compliance tooling",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

const SupportModels = () => {
  return (
    <section id="support-models" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              Support Models
            </span>
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Flexible Support Models Tailored to Your Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We understand that different businesses have different needs. That's why we offer three
            distinct support models designed to match your operational requirements, budget, and risk
            profile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group ${
                model.highlighted
                  ? "bg-navy shadow-xl"
                  : "bg-card border border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              {model.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand" />
              )}
              {model.highlighted && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-brand text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    model.highlighted
                      ? "bg-gradient-brand"
                      : "bg-primary/10"
                  }`}
                >
                  <model.icon
                    size={22}
                    className={model.highlighted ? "text-primary-foreground" : "text-primary"}
                  />
                </div>

                <div className="mb-1">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${
                      model.highlighted ? "text-primary-light" : "text-primary"
                    }`}
                  >
                    {model.tag}
                  </span>
                </div>
                <h3
                  className={`font-display font-bold text-xl mb-3 ${
                    model.highlighted ? "text-navy-foreground" : "text-foreground"
                  }`}
                >
                  {model.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    model.highlighted ? "text-navy-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {model.desc}
                </p>

                <ul className="space-y-2.5">
                  {model.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          model.highlighted ? "bg-primary-light/20" : "bg-primary/10"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            model.highlighted ? "bg-primary-light" : "bg-primary"
                          }`}
                        />
                      </div>
                      <span className={model.highlighted ? "text-navy-foreground/80" : "text-foreground/80"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-200 ${
                    model.highlighted
                      ? "bg-gradient-brand text-primary-foreground hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportModels;
