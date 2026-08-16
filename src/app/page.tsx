import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { HowToOrder } from "@/components/home/HowToOrder";
import { LocationSection } from "@/components/home/LocationSection";
import { QuoteBanner } from "@/components/home/QuoteBanner";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <WhyChoose />
      <ServicesPreview />
      <HowToOrder />
      <QuoteBanner />
      <LocationSection />
    </>
  );
}
