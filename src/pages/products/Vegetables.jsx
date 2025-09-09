import { motion } from "framer-motion";

export default function Vegetables() {
  const vegetableVarieties = [
    {
      title: "Onion",
      image: "/images/vegetables/onion.jpg",
      desc: "Fresh red and white onions with high shelf life and strong pungency, widely exported across the globe.",
      specifications: "Size: 40-70mm | Moisture: <14% | Packaging: 25kg/50kg mesh bags",
    },
    {
      title: "Garlic",
      image: "/images/vegetables/garlic.jpg",
      desc: "Premium Indian garlic with high flavor and medicinal properties, popular in Middle East, Asia & Europe.",
      specifications: "Clove Size: 4.5cm+ | Moisture: <13% | Packaging: 25kg/50kg bags",
    },
    {
      title: "Potato",
      image: "/images/vegetables/potato.jpg",
      desc: "Fresh Indian potatoes rich in starch, suitable for export in bulk quantities.",
      specifications: "Size: 45mm+ | Moisture: <12% | Packaging: 25kg/50kg bags",
    },
    {
      title: "Okra (Ladyfinger)",
      image: "/images/vegetables/okra.jpg",
      desc: "Tender and fresh okra with bright green pods, exported mainly to Middle East and Europe.",
      specifications: "Length: 7-12cm | Color: Deep Green | Packaging: 4kg/5kg boxes",
    },
    {
      title: "Tomato",
      image: "/images/vegetables/tomato.jpg",
      desc: "Juicy red tomatoes grown in fertile Indian soil, shipped fresh for salads, sauces, and culinary use.",
      specifications: "Size: 55mm+ | Color: Deep Red | Packaging: 5kg/10kg cartons",
    },
    {
      title: "Green Chilli",
      image: "/images/vegetables/greenchili.jpg",
      desc: "Hot and spicy green chillies, freshly harvested and packed to retain pungency.",
      specifications: "Length: 6-10cm | Color: Dark Green | Packaging: 3kg/5kg cartons",
    },
    {
      title: "Bitter Gourd",
      image: "/images/vegetables/bittergourd.jpg",
      desc: "Nutrient-rich bitter gourds exported for culinary and medicinal purposes.",
      specifications: "Length: 8-15cm | Color: Dark Green | Packaging: 5kg cartons",
    },
    {
      title: "Bottle Gourd",
      image: "/images/vegetables/bottlegourd.jpg",
      desc: "Fresh and tender bottle gourds with excellent quality, exported to global markets.",
      specifications: "Length: 20-40cm | Color: Light Green | Packaging: 5kg cartons",
    },
    {
      title: "Drumsticks (Moringa)",
      image: "/images/vegetables/drumstick.jpg",
      desc: "Highly nutritious drumsticks, rich in iron and vitamins, exported to Middle East and Europe.",
      specifications: "Length: 30-45cm | Color: Green | Packaging: 5kg/10kg cartons",
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/vegetables/herovegetables.jpg"
          alt="Indian Fresh Vegetables Export"
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
              Fresh Indian Vegetables
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Exporting freshness and nutrition from Indian farms to the world
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vegetable Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              India is a global hub for fresh vegetable exports. At Numa Agri Prime, we deliver 
              high-quality and fresh vegetables to international markets, maintaining global standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vegetableVarieties.map((veg, idx) => (
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
                    src={veg.image}
                    alt={veg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {veg.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {veg.desc}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">
                      {veg.specifications}
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