import Banner1 from "@/components/banner1";
import Testimonials from "@/components/testimonials";
import FeaturedProducts from "@/components/featuredproducts";
import CategorySection from "@/components/categorysection";

export default function Home() {
  return (
    <>
      <Banner1 />
      <CategorySection />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
