import { motion } from "framer-motion";
export default function Spices() {
  const spiceVarieties = [
    { title: "Turmeric", image: "/images/spices/turmeric.jpg", desc: "Indian turmeric with high curcumin content, widely used for culinary and medicinal purposes.", specifications: "Curcumin: 3-5% | Moisture: <10%" },
    { title: "Cumin Seeds", image: "/images/spices/cumin.jpg", desc: "Premium cumin seeds exported globally for their strong aroma and taste.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Coriander Seeds", image: "/images/spices/coriander.jpg", desc: "High-quality coriander seeds rich in flavor, used in spice blends worldwide.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Fenugreek Seeds", image: "/images/spices/fenugreek.webp", desc: "Bitter-sweet fenugreek seeds used in global cuisines and herbal medicines.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Fennel Seeds", image: "/images/spices/fennel.jpg", desc: "Green fennel seeds with refreshing aroma, widely used in culinary dishes.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Mustard Seeds", image: "/images/spices/mustard.jpg", desc: "Premium mustard seeds used for oil extraction and culinary applications.", specifications: "Oil content: 38-42% | Moisture: <10%" },
    { title: "Chili Powder", image: "/images/spices/chili.jpg", desc: "Bright red chili powder with strong pungency and color value.", specifications: "ASTA Color: 40-160 | Moisture: <10%" },
    { title: "Black Pepper", image: "/images/spices/blackpepper.jpg", desc: "Indian black pepper known as ‘Black Gold’, widely demanded worldwide.", specifications: "Piperine: 4-6% | Moisture: <10%" },
    { title: "Star Anise", image: "/images/spices/startanise.jpg", desc: "Aromatic star anise used in spice blends and traditional medicines.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Cinnamon", image: "/images/spices/cinnamon.jpg", desc: "Sweet aromatic cinnamon bark used in cuisines and bakery worldwide.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Nutmeg", image: "/images/spices/nutmeg.jpg", desc: "Nutmeg with rich aroma used in sweet and savory dishes.", specifications: "Purity: 99% | Moisture: <10%" },
    { title: "Asafoetida", image: "/images/spices/asafotida.jpg", desc: "Highly aromatic asafoetida used in Indian cooking and seasoning.", specifications: "Resin Content: 60-70% | Moisture: <10%" },
    { title: "Ginger", image: "/images/spices/ginger.jpg", desc: "Premium dried ginger with strong pungency and aroma.", specifications: "Moisture: <10% | Purity: 99%" }
  ];
  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img src="/images/spices/herospices.jpg" alt="Premium Indian Spices" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Premium Indian Spices</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">Numa Agri Prime – Your trusted partner for high-quality spice exports from India</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Spice Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">India is a major exporter of spices. Numa Agri Prime ensures premium quality products reach destinations fresh and on time.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spiceVarieties.map((spice, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-48">
                  <img src={spice.image} alt={spice.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{spice.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{spice.desc}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">{spice.specifications}</p>
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