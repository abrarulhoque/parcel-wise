import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DashboardPreview from '@/components/DashboardPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <HowItWorksSection />
      <DashboardPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
