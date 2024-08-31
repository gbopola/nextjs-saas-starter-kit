import SocialProof from '@/components/SocialProof';
import CTA from '@/components/ui/CTA';
import FAQ from '@/components/ui/FAQ';
import { FeatureOne, FeatureThree, FeatureTwo } from '@/components/ui/Features';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import PricingTest from '@/components/ui/Pricing/PricingTest';
import Testimonials from '@/components/ui/Testimonials';

export default function Example() {
  return (
    <div>
      <Header />
      <Hero />
      <SocialProof />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <Testimonials />
      <PricingTest />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
