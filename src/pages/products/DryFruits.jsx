import { motion } from "framer-motion";

export default function DryFruits() {
  const dryFruitVarieties = [
    {
      title: "Cashew Nuts",
      image: "/images/dryfruits/cashewnuts.webp",
      desc: "Premium quality cashews, rich in flavor and nutrients, exported worldwide.",
      specifications: "Size: W180 | Moisture: <5% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Walnuts",
      image: "/images/dryfruits/walnut.jpg",
      desc: "Fresh walnuts with a crisp texture and rich taste, perfect for snacking and baking.",
      specifications: "Size: 32mm+ | Moisture: <5% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Almonds",
      image: "/images/dryfruits/almond.jpg",
      desc: "High-quality almonds, perfect for healthy snacking and culinary use.",
      specifications: "Size: 23/25 | Moisture: <5% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Apricots",
      image: "/images/dryfruits/apricot.jpg",
      desc: "Sweet and tangy apricots, dried to preserve natural flavor and nutrients.",
      specifications: "Size: 35mm+ | Moisture: <5% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Betel Nut",
      image: "/images/dryfruits/betelnut.jpg",
      desc: "Quality betel nuts sourced from the best farms, used widely in Asian markets.",
      specifications: "Moisture: <10% | Packaging: 10kg/20kg bags",
    },
    {
      title: "Dates",
      image: "/images/dryfruits/dates.jpg",
      desc: "Naturally sweet dates, rich in energy and nutrients, enjoyed worldwide.",
      specifications: "Size: 3-7cm | Moisture: <20% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Dry Figs",
      image: "/images/dryfruits/fig.jpg",
      desc: "Sweet and chewy dry figs, packed with fiber and minerals.",
      specifications: "Size: 45mm+ | Moisture: <15% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Hazelnuts",
      image: "/images/dryfruits/hazelnut.webp",
      desc: "Crunchy hazelnuts, widely used in confectionery and baking industries.",
      specifications: "Size: 13/15 | Moisture: <5% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Pistachios",
      image: "/images/dryfruits/pistachio.jpg",
      desc: "Delicious pistachios, rich in antioxidants and healthy fats.",
      specifications: "Size: 21/25 | Moisture: <5% | Packaging: 10kg/20kg cartons",
    },
    {
      title: "Raisins",
      image: "/images/dryfruits/raisin.jpg",
      desc: "Plump and juicy raisins, ideal for snacking, cooking, and baking.",
      specifications: "Size: 300-350 | Moisture: <15% | Packaging: 10kg/20kg cartons",
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/dryfruits/herodryfruits.jpg"
          alt="Premium Dry Fruits Export"
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
              Premium Dry Fruits
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Numa Agri Prime – Delivering the finest dry fruits sourced from trusted farms to global markets
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Dry Fruit Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our wide range of premium dry fruits, carefully selected for their quality, taste, and health benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dryFruitVarieties.map((fruit, idx) => (
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
                    src={fruit.image}
                    alt={fruit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {fruit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{fruit.desc}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">{fruit.specifications}</p>
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