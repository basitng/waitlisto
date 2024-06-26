import Hero from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import SiteHeader from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <IntroSection />
    </>
  );
}
