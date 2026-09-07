import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Capabilities } from "@/components/site/Capabilities";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { ImageCta } from "@/components/site/ImageCta";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Capabilities />
        <WhyChooseUs />
        <Process />
        <ImageCta />
        <Testimonials />
        <ServiceAreas />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
