import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UploadSection from "@/components/UploadSection";
import AnalysisDashboard from "@/components/AnalysisDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UploadSection />
        <AnalysisDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
