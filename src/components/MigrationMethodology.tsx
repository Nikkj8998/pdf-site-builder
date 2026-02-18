import { ClipboardList, FlaskConical, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Assessment",
    subtitle: "Pre-migration planning and environment analysis",
    desc: "Thorough analysis of your current email environment, identifying dependencies, user groups, and potential risks before migration begins.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Pilot Testing",
    subtitle: "Pilot migration and validation with key users",
    desc: "Small-scale pilot migration with select users to validate the process, identify issues, and confirm everything works as expected before full rollout.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    subtitle: "Phased or cutover migration with DNS configuration",
    desc: "Carefully executed full migration using your preferred approach — phased rollout or cutover — with complete DNS configuration and zero-data-loss protocols.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Validation",
    subtitle: "Post-migration testing and stabilization",
    desc: "Comprehensive post-migration validation to ensure mail flow, access, and functionality are working perfectly, with a stabilization period and rollback readiness.",
  },
];

const MigrationMethodology = () => {
  return (
    <section id="migration" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              Migration Methodology
            </span>
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Proven Migration Methodology
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our structured approach ensures secure, seamless email migrations with minimal disruption
            to your business operations. Each phase is carefully executed with clear milestones,
            validation checkpoints, and rollback procedures.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+28px)] right-0 h-0.5 bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <step.icon size={26} className="text-primary-foreground" />
                </div>
                <div className="text-xs font-bold text-muted-foreground/50 tracking-widest mb-1">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-primary font-semibold mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: icon + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-md shrink-0">
                  <step.icon size={20} className="text-primary-foreground" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-primary/20 my-2" />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-4">
                <span className="text-xs font-bold text-muted-foreground/50 tracking-widest">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground mt-0.5 mb-0.5">
                  {step.title}
                </h3>
                <p className="text-xs text-primary font-semibold mb-2">{step.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationMethodology;
