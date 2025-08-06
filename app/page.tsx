import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { Services } from '@/components/marketing/Services';
import { Testimonials } from '@/components/marketing/Testimonials';
import { CTA } from '@/components/marketing/CTA';
import { Footer } from '@/components/marketing/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}