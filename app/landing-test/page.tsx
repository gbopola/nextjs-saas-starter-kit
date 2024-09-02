import SocialProof from '@/components/ui/SocialProof';
import CTA from '@/components/ui/MarketingSections/CTA';
import FAQ from '@/components/ui/MarketingSections/FAQ';
import {
  FeatureOne,
  FeatureThree,
  FeatureTwo
} from '@/components/ui/MarketingSections/Features';
import Footer from '@/components/ui/MarketingSections/Footer';
import Header from '@/components/ui/MarketingSections/Header';
import Hero from '@/components/ui/MarketingSections/Hero';
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
