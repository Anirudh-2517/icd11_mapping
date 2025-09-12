import { motion } from "framer-motion";
export default function Fruits() {
  const fruitVarieties = [
    {
      title: "Mango",
      image: "/images/fruits/mango.jpg",
      desc: "Premium Indian mangoes (Alphonso, Kesar, Totapuri) famous worldwide for sweetness and aroma.",
      specifications: "Varieties: Alphonso, Kesar, Totapuri | Packaging: 3kg/5kg cartons",
    },{
      title: "Banana",
      image: "/images/fruits/banana.jpg",
      desc: "Fresh Indian Cavendish bananas with high demand in global markets due to their taste and quality.",
      specifications: "Length: 18-22cm | Packaging: 7kg/13kg cartons",
    },{
      title: "Grapes",
      image: "/images/fruits/grapes.webp",
      desc: "Seedless green and black grapes from India, exported to Europe, Middle East, and Asia.",
      specifications: "Varieties: Thompson Seedless, Black Seedless | Packaging: 4.5kg cartons",
    },{
      title: "Pomegranate",
      image: "/images/fruits/pomegranate.jpg",
      desc: "High-quality Bhagwa pomegranates with bright red arils, rich in antioxidants and flavor.",
      specifications: "Variety: Bhagwa | Size: 250-350g | Packaging: 3.5kg cartons",
    },
    {
      title: "Orange",
      image: "/images/fruits/orange.jpg",
      desc: "Juicy Nagpur oranges, famous for their sweetness, taste, and long shelf life.",
      specifications: "Size: 60-80mm | Packaging: 10kg cartons",
    },
    {
      title: "Apple",
      image: "/images/fruits/apple.webp",
      desc: "Crisp and sweet Indian apples (Shimla & Kashmir) exported across Asia and Middle East.",
      specifications: "Size: 70-90mm | Packaging: 18kg cartons",
    },
    {
      title: "Guava",
      image: "/images/fruits/guava.webp",
      desc: "Fresh Indian guavas rich in Vitamin C, with high demand in Gulf and Asian countries.",
      specifications: "Varieties: White & Pink Guava | Packaging: 5kg cartons",
    },
    {
      title: "Papaya",
      image: "/images/fruits/papaya.jpg",
      desc: "Fresh Indian papayas, sweet and nutritious, ideal for direct consumption and processing.",
      specifications: "Variety: Red Lady | Size: 800g-1.5kg | Packaging: 10kg cartons",
    },
  ];
  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/fruits/herofruits.jpg"
          alt="Fresh Indian Fruits Export"
          className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fresh Indian Fruits
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Exporting sweetness and nutrition from India’s orchards to the world
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Fruit Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              India is one of the largest fruit producers in the world. At Numa Agri Prime, 
              we bring premium quality fruits directly from farms to global markets.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fruitVarieties.map((fruit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={fruit.image}
                    alt={fruit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {fruit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {fruit.desc}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">
                      {fruit.specifications}
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