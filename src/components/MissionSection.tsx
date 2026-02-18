import { Lightbulb } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, hsl(214 84% 60%) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(200 100% 46%) 0%, transparent 50%)",
        }}
      />
      <div className="container-narrow relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
          <span className="text-sm font-semibold text-primary-light tracking-widest uppercase">Our Mission</span>
          <div className="h-0.5 w-8 bg-gradient-brand rounded-full" />
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-lg animate-float">
            <Lightbulb size={28} className="text-primary-foreground" />
          </div>
        </div>

        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground leading-tight mb-6 max-w-3xl mx-auto">
          To enable businesses worldwide with reliable, secure, and cost-effective IT services that
          support{" "}
          <span className="text-gradient">growth, productivity, and operational resilience.</span>
        </h2>

        <p className="text-navy-foreground/60 text-lg leading-relaxed max-w-2xl mx-auto">
          We believe that every organization deserves access to world-class IT operations. Our
          mission drives us to deliver consistent service quality, proactive support, and strategic
          guidance that empowers our clients to focus on their core business while we handle the
          complexity of modern IT infrastructure.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
