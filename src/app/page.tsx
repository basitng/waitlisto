"use client";
import CTASection from "@/components/sections/cta";
import ModernFeatureShowcase from "@/components/sections/features";
import FooterSection from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import PricingTable from "@/components/sections/pricing";
import SiteHeader from "@/components/sections/site-header";
import ModernTestimonials from "@/components/sections/testimonial";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <IntroSection />
      <ModernFeatureShowcase />
      <PricingTable />
      <ModernTestimonials />
      <CTASection />
      <FooterSection />
    </>
  );
}
