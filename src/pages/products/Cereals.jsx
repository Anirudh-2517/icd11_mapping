import { motion } from "framer-motion";

export default function GrainsCereals() {
  const grainVarieties = [
    {
      title: "Basmati Rice",
      image: "/images/cereals/basmati.jpg",
      desc: "Premium quality Indian Basmati rice with long grains and rich aroma, highly demanded worldwide.",
      specifications: "Length: 7.5mm+ | Moisture: <12% | Packaging: 25kg bags",
    },
    {
      title: "Non-Basmati Rice",
      image: "/images/cereals/nonbasmati.jpg",
      desc: "High-quality non-basmati rice varieties suitable for global cuisines and bulk supply.",
      specifications: "Length: 6mm+ | Moisture: <12% | Packaging: 25kg bags",
    },
    {
      title: "Maize (Corn)",
      image: "/images/cereals/maize.webp",
      desc: "Premium Indian maize widely used for human consumption and as livestock feed.",
      specifications: "Moisture: <13% | Purity: 99% | Packaging: 25kg bags",
    },
    {
      title: "Wheat",
      image: "/images/cereals/wheat.jpg",
      desc: "High-protein Indian wheat exported globally for bread, pasta, and bakery products.",
      specifications: "Protein: 12%+ | Moisture: <12% | Packaging: 50kg bags",
    },
    {
      title: "Barley",
      image: "/images/cereals/barley.jpg",
      desc: "Premium barley grains used in brewing, health foods, and animal feed.",
      specifications: "Purity: 99% | Moisture: <12% | Packaging: 25kg bags",
    },
    {
      title: "Millets",
      image: "/images/cereals/millets.jpg",
      desc: "Nutrient-rich millets like Bajra, Ragi, and Jowar, popular in health-conscious markets.",
      specifications: "Protein: 9-11% | Fiber: High | Packaging: 25kg bags",
    },
    {
      title: "Sorghum (Jowar)",
      image: "/images/cereals/jowar.jpg",
      desc: "Gluten-free sorghum widely used in traditional foods and as animal feed.",
      specifications: "Protein: 10%+ | Moisture: <12% | Packaging: 25kg bags",
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/cereals/herocereals.webp"
          alt="Premium Indian Grains & Cereals Export"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Indian Grains & Cereals
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Numa Agri Prime - Trusted supplier of premium grains and cereals for global markets
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Grain & Cereal Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              India is one of the largest producers of grains and cereals. Numa Agri Prime ensures global supply of high-quality crops with timely delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {grainVarieties.map((grain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={grain.image}
                    alt={grain.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {grain.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {grain.desc}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">
                      {grain.specifications}
                    </p>
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
