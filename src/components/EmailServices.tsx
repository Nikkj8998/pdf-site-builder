import { Mail, ArrowRightLeft, Activity } from "lucide-react";

const EmailServices = () => {
  return (
    <section id="email-services" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Email Services</span>
            <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Professional Email Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cybaem Tech partners with organizations seeking reliable IT operations and secure email
            systems, ensuring uninterrupted business communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Managed Email Support */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">01</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mt-3 mb-3">
              Managed Email Support
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We provide ongoing managed email support to ensure uninterrupted business communication
              across Microsoft 365 (Exchange Online) and Google Workspace platforms.
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                "Mailbox creation, modification, and decommissioning",
                "Outlook, mobile, and webmail configuration",
                "Password reset and access resolution",
                "Mail flow and delivery troubleshooting",
                "Shared mailbox and distribution list management",
                "License and quota management",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Migration Services */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <ArrowRightLeft size={20} className="text-accent" />
              </div>
              <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">02</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mt-3 mb-3">
              Migration Services
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Complete email platform migrations with minimal disruption. We handle one-time
              transitions between all major email platforms with precision and care.
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                "On-premise Exchange to Microsoft 365",
                "Google Workspace to Microsoft 365",
                "Microsoft 365 to Google Workspace",
                "IMAP/POP to cloud platforms",
                "Tenant-to-tenant migrations",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proactive Monitoring */}
        <div className="bg-navy rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shrink-0">
            <Activity size={22} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-navy-foreground mb-3">
              Proactive Email Monitoring
            </h3>
            <p className="text-navy-foreground/60 leading-relaxed">
              Our monitoring services track mail flow, delivery performance, service availability,
              license usage, and security alerts — providing monthly health reports and early issue
              detection before users are impacted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailServices;
