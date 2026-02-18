import { Server, Mail, ArrowRightLeft, Shield } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Server,
    title: "Managed IT Services",
    subtitle: "Ongoing IT operations and support",
    description:
      "End-to-end managed IT services acting as an extension of your internal IT function, delivering enterprise-grade support across your entire technology ecosystem.",
    details: [
      "End-user support (L1, L2, L3)",
      "Desktop and server management",
      "Cloud and on-premise infrastructure",
      "Proactive monitoring & patch management",
      "Backup oversight",
    ],
    color: "from-primary to-primary-dark",
  },
  {
    number: "02",
    icon: Mail,
    title: "Managed Email Services",
    subtitle: "Daily email administration and support",
    description:
      "Ongoing managed email support ensuring uninterrupted business communication across Microsoft 365 (Exchange Online) and Google Workspace platforms.",
    details: [
      "Mailbox creation & management",
      "Outlook, mobile & webmail config",
      "Mail flow troubleshooting",
      "License & quota management",
      "Distribution list management",
    ],
    color: "from-accent to-primary-light",
  },
  {
    number: "03",
    icon: ArrowRightLeft,
    title: "Email Migration Projects",
    subtitle: "One-time platform transitions",
    description:
      "Seamless email migrations with minimal disruption. Each phase is carefully executed with clear milestones, validation checkpoints, and rollback procedures.",
    details: [
      "On-premise Exchange to Microsoft 365",
      "Google Workspace to Microsoft 365",
      "Microsoft 365 to Google Workspace",
      "IMAP/POP to cloud platforms",
      "Tenant-to-tenant migrations",
    ],
    color: "from-primary-dark to-primary",
  },
  {
    number: "04",
    icon: Shield,
    title: "Monitoring & Security",
    subtitle: "Proactive oversight and threat management",
    description:
      "IT security monitoring, compliance readiness, controlled change management, and data protection protocols aligned with industry standards.",
    details: [
      "IT security monitoring",
      "Compliance readiness",
      "Controlled change management",
      "Data protection protocols",
      "SLA-based incident management",
    ],
    color: "from-primary to-accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Core Services</span>
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Comprehensive Managed IT Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cybaem Tech provides end-to-end Managed IT Services that act as an extension of your
            internal IT function, delivering enterprise-grade support across your entire technology
            ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
              <div className="p-7">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md shrink-0`}>
                    <service.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground/50 tracking-widest mb-0.5">
                      {service.number}
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.color} rounded-full shrink-0`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance/Reporting bar */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Complete IT Operations",
              desc: "End-user support (L1, L2, L3), desktop and server management, cloud and on-premise infrastructure.",
            },
            {
              title: "Security & Compliance",
              desc: "IT security monitoring, compliance readiness, controlled change management, and data protection protocols.",
            },
            {
              title: "Reporting",
              desc: "SLA-based incident management, monthly reporting, and dedicated account management for full transparency.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-navy rounded-xl p-5 text-center"
            >
              <p className="font-semibold text-navy-foreground text-sm mb-2">{item.title}</p>
              <p className="text-navy-foreground/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
