import { motion } from "framer-motion";

export default function DryFruits() {
  const dryFruitVarieties = [
    {
      title: "Cashew Nuts",
      image: "https://example.com/cashew.jpg",
      desc: "Premium quality cashews, rich in flavor and nutrients.",
      specifications: "Size: W180, Moisture: <5%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Walnuts",
      image: "https://example.com/walnut.jpg",
      desc: "Fresh walnuts with a crisp texture and rich taste.",
      specifications: "Size: 32mm+, Moisture: <5%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Almonds",
      image: "https://example.com/almond.jpg",
      desc: "High-quality almonds, perfect for snacking and culinary use.",
      specifications: "Size: 23/25, Moisture: <5%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Apricots",
      image: "https://example.com/apricot.jpg",
      desc: "Sweet and tangy apricots, dried to preserve flavor.",
      specifications: "Size: 35mm+, Moisture: <5%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Dates",
      image: "https://example.com/dates.jpg",
      desc: "Naturally sweet dates, rich in nutrients.",
      specifications: "Size: 3-7cm, Moisture: <20%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Raisins",
      image: "https://example.com/raisin.jpg",
      desc: "Plump and juicy raisins, ideal for baking and snacking.",
      specifications: "Size: 300-350, Moisture: <15%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Dry Figs",
      image: "https://example.com/dry-fig.jpg",
      desc: "Sweet and chewy dry figs, a healthy snack option.",
      specifications: "Size: 45mm+, Moisture: <15%, Packaging: 10kg/20kg cartons",
    },
    {
      title: "Hazelnuts",
      image: "https://example.com/hazelnut.jpg",
      desc: "Crunchy hazelnuts, perfect for confectionery products.",
      specifications: "Size: 13/15, Moisture: <5%, Packaging: 10kg/20kg cartons",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">Dry Fruits</h1>
      <p className="text-lg text-gray-700 mb-12">
        Discover our premium selection of dry fruits, sourced from the finest farms and exported worldwide.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dryFruitVarieties.map((fruit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={fruit.image}
              alt={fruit.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700">{fruit.title}</h3>
              <p className="text-gray-600 mt-2">{fruit.desc}</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-800">Specifications:</p>
                <p className="text-sm text-gray-600">{fruit.specifications}</p>
              </div>
              <button className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300">
                Get Quote
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
