import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import StatsSection from '@/components/home/StatsSection';
import ProjectHighlights from '@/components/home/ProjectHighlights';
import Testimonials from '@/components/home/Testimonials';
import FeaturedClients from '@/components/home/FeaturedClients';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsSection />
      <ProjectHighlights />
      <Testimonials />
      <FeaturedClients />
      <CTASection />
    </>
  );
}
