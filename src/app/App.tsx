import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { GallerySection } from "./components/GallerySection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingContacts } from "./components/FloatingContacts";
import { SEO } from "./components/SEO";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased pb-16 lg:pb-0">
      <SEO />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ComparisonSection />
        <GallerySection />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  );
}