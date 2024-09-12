import {
  CTA,
  FAQ,
  FeatureOne,
  FeatureThree,
  FeatureTwo,
  Footer,
  Hero,
  PricingTest,
  SocialProof,
  Testimonials
} from '@/components/ui/MarketingSections';

export default function Example() {
  return (
    <div>
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
