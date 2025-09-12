import HomeCarousel from "../components/HomeCarousel";
import ProductHighlights from "../components/PopularProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import WhyIndianMarket from "../components/WhyIndianMarket"
function Home() {
  return (
    <div className="flex flex-col">
      <section className="mt-6">
        <HomeCarousel />
      </section>
      <section className="p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-700">
          NUMA AGRI PRIME - Global Agricultural Importers & Exporters.
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          India has long been known as an agricultural powerhouse, producing a wide variety of vegetables, grains, pulses, and fruits that are valued worldwide.
          At NUMA AGRI PRIME, we build on this rich legacy by offering reliable export and import services that connect Indian farmers and global markets.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          With over 20 years of domestic expertise across India, we are now expanding internationally to ensure that our agricultural products reach customers around the 
        </p>
      </section>
      <section className="py-12">
        <ProductHighlights />
      </section>
      <section className="py-12 bg-gray-50">
        <WhyChooseUs />
      </section>
      <section className="py-12 bg-gray-50">
        <WhyIndianMarket />
      </section>
      <CallToAction />
    </div>
  );
}
export default Home;