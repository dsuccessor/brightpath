import HeroSection from '@/sections/home/HeroSection';
import TrustSection from '@/sections/home/TrustSection';
import ServicesOverview from '@/sections/home/ServicesOverview';
import WhyBrightPath from '@/sections/home/WhyBrightPath';
import ProcessSection from '@/sections/home/ProcessSection';
import TestimonialsSection from '@/sections/home/TestimonialsSection';
import FinalCTA from '@/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ServicesOverview />
      <WhyBrightPath />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
    </main>
  );
}
