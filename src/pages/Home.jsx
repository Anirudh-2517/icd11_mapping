import HomeCarousel from "../components/HomeCarousel";
import ProductHighlights from "../components/PopularProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import WhyIndianMarket from "../components/WhyIndianMarket"

function Home() {
  return (
    <div className="flex flex-col">
      {/* Carousel Section */}
      <section className="mt-6">
        <HomeCarousel />
      </section>
      {/* Welcome Text */}
      <section className="p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-700">
          Welcome to NUMA AGRI PRIME 
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          NUMA AGRI PRIME, established with a vision to connect farms to global markets, is a trusted exporter and importer of vegetables, grains, pulses, and fruits.
           With over 20 years of domestic experience delivering across India, we have built a strong foundation of reliability and excellence. Building on this expertise, 
           we are expanding our presence to international markets, bringing the same commitment to quality, sustainability, and trust to customers around the world. 
           Through strong partnerships and efficient supply chains, we aim to become a dependable global name in agricultural trade.
        </p>
      </section>

      {/* Product Highlights */}
      <section className="py-12">
        <ProductHighlights />
      </section>

      {/* Why Choose Us */}
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
