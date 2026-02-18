import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import SupportModels from "@/components/SupportModels";
import EmailServices from "@/components/EmailServices";
import MigrationMethodology from "@/components/MigrationMethodology";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAre />
        <MissionSection />
        <ServicesSection />
        <SupportModels />
        <EmailServices />
        <MigrationMethodology />
        <IndustriesSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
