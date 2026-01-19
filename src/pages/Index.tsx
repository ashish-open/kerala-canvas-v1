import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import StorySection from "@/components/StorySection";
import FeaturedEventsSection from "@/components/FeaturedEventsSection";
import ImpactSection from "@/components/ImpactSection";
import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <WhatWeDoSection />
          <StorySection />
          <FeaturedEventsSection />
          <ImpactSection />
          <DonationCTA />
        </main>
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default Index;
