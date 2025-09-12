import { motion } from "framer-motion";
export default function Herbs() {
  const herbVarieties = [
    {
      title: "Neem",
      image: "/images/herbs/neem.jpg",
      desc: "Neem leaves and extracts widely used for medicinal and cosmetic purposes.",
      specifications: "Form: Dried / Powder | Packaging: 25kg bags",
    },
    {
      title: "Ashwagandha",
      image: "/images/herbs/ashwagandha.webp",
      desc: "Traditional adaptogenic herb known for boosting immunity and reducing stress.",
      specifications: "Form: Roots / Powder | Packaging: 25kg bags",
    },
    {
      title: "Aloe Vera",
      image: "/images/herbs/aloevera.jpg",
      desc: "Aloe vera leaves and gel used in cosmetics, health drinks, and herbal remedies.",
      specifications: "Form: Leaves / Extract | Packaging: Customized",
    },
    {
      title: "Sage",
      image: "/images/herbs/sage.webp",
      desc: "Aromatic herb used in culinary seasoning and herbal medicines.",
      specifications: "Form: Dried Leaves | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Fenugreek",
      image: "/images/herbs/fenugreek.webp",
      desc: "Rich in medicinal properties and widely used as a spice and health supplement.",
      specifications: "Form: Seeds / Powder | Packaging: 25kg bags",
    },
    {
      title: "Giloy",
      image: "/images/herbs/giloy.jpg",
      desc: "Traditional herb valued for boosting immunity and detoxifying properties.",
      specifications: "Form: Stems / Powder | Packaging: 25kg bags",
    },
    {
      title: "Curry Leaves",
      image: "/images/herbs/curryleaves.jpg",
      desc: "Fragrant leaves widely used in Indian cooking and known for medicinal value.",
      specifications: "Form: Fresh / Dried | Packaging: 5kg/10kg cartons",
    },
    {
      title: "Tulsi",
      image: "/images/herbs/tulsi.jpg",
      desc: "Holy basil with strong medicinal properties, widely used in Ayurveda.",
      specifications: "Form: Fresh / Powder | Packaging: 25kg bags",
    },
    {
      title: "Carom",
      image: "/images/herbs/carom.jpg",
      desc: "Also known as Ajwain, used as a spice and digestive aid.",
      specifications: "Form: Seeds / Powder | Packaging: 25kg bags",
    },
    {
      title: "Spearmint",
      image: "/images/herbs/spearmint.webp",
      desc: "Refreshing aromatic herb used in teas, medicines, and flavoring.",
      specifications: "Form: Fresh / Dried | Packaging: Customized",
    },
    {
      title: "Khus",
      image: "/images/herbs/khus.webp",
      desc: "Cooling herb used in traditional drinks, perfumes, and Ayurvedic medicines.",
      specifications: "Form: Roots | Packaging: 25kg bundles",
    },
  ];
  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/herbs/heroherbs.jpg"
          alt="Premium Herbs Export"
          className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Indian Herbs
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Numa Agri Prime – Supplying traditional and medicinal herbs from India to the world
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Herb Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our wide range of herbs with culinary, medicinal, and cosmetic applications – sourced from trusted farms.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {herbVarieties.map((herb, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={herb.image}
                    alt={herb.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {herb.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{herb.desc}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">{herb.specifications}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}