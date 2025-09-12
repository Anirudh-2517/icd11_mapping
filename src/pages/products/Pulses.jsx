import { motion } from "framer-motion";
export default function Pulses() {
  const pulseVarieties = [
    {
      title: "Chickpeas / Garbanzo Beans (Kabuli Chana)",
      image: "/images/pulses/Chickpeas.webp",
      desc: "Premium quality chickpeas with excellent protein content. Widely exported for international cuisine and health food markets.",
      specifications: "Protein: 19g | Fiber: 17g | Moisture: <12%",
    },
    {
      title: "Peas",
      image: "/images/pulses/peas.webp",
      desc: "High-quality peas suitable for multiple culinary uses. Excellent protein source for soups, stews, and curries.",
      specifications: "Protein: 25g | Fiber: 26g | Moisture: <12%",
    },
    {
      title: "Kidney Beans (Rajma)",
      image: "/images/pulses/kidneybeans.webp",
      desc: "Rich and flavorful kidney beans, perfect for international curry dishes, salads, and stews.",
      specifications: "Protein: 23g | Fiber: 25g | Moisture: <12%",
    },
    {
      title: "Soybeans",
      image: "/images/pulses/soyabean.webp",
      desc: "Premium soybeans essential for plant-based products. High protein content makes them ideal for health food industry.",
      specifications: "Protein: 36g | Fiber: 9g | Moisture: <12%",
    },
    {
      title: "Pigeon Pea (Arhar / Toor Dal)",
      image: "/images/pulses/pigeonpeas.webp",
      desc: "Premium tropical legume with high nutritional value. Essential ingredient in South Asian and Caribbean cuisines.",
      specifications: "Protein: 22g | Fiber: 15g | Moisture: <12%",
    },
    {
      title: "Black-Eyed Beans (Cowpea)",
      image: "/images/pulses/blackeyed.webp",
      desc: "Nutritious cowpeas with versatile use in salads, stews, and curries. Popular in African and Asian cuisines.",
      specifications: "Protein: 24g | Fiber: 11g | Moisture: <12%",
    },
    {
      title: "Horse Gram",
      image: "/images/pulses/horsegram.webp",
      desc: "Protein-rich horse gram widely used in Indian traditional diets. Excellent for soups and health-focused products.",
      specifications: "Protein: 22g | Fiber: 16g | Moisture: <12%",
    },
    {
      title: "Masoor Dal (Red Lentil)",
      image: "/images/pulses/redlentil.webp",
      desc: "Highly nutritious red lentils with quick cooking properties. Popular across Asian and Middle Eastern cuisines.",
      specifications: "Protein: 25g | Fiber: 15g | Moisture: <12%",
    },
    {
      title: "Green Gram (Mung Bean)",
      image: "/images/pulses/greengram.webp",
      desc: "Nutritious mung beans with excellent digestibility. Popular in health-conscious markets worldwide.",
      specifications: "Protein: 24g | Fiber: 16g | Moisture: <12%",
    },
    {
      title: "Black Gram (Urad Dal)",
      image: "/images/pulses/blackurad.webp",
      desc: "High-quality black gram extensively used in Indian cuisine. Rich in protein and minerals, perfect for international markets.",
      specifications: "Protein: 25g | Fiber: 18g | Moisture: <12%",
    },
    {
      title: "Chana Dal (Split Chickpeas)",
      image: "/images/pulses/chanadal.jpg",
      desc: "Premium split chickpeas with consistent quality. Widely used in traditional Indian cooking and exported globally.",
      specifications: "Protein: 19g | Fiber: 17g | Moisture: <12%",
    },
    {
      title: "Beaten Rice (Poha)",
      image: "/images/pulses/poha.jpg",
      desc: "Light and nutritious beaten rice, easy to cook and consumed as a healthy breakfast option worldwide.",
      specifications: "Carbs: 75g | Fiber: 6g | Moisture: <12%",
    },
    {
      title: "Field Beans",
      image: "/images/pulses/fieldbeans.jpg",
      desc: "High-quality field beans suitable for soups and stews. Excellent protein source for health-conscious consumers.",
      specifications: "Protein: 25g | Fiber: 26g | Moisture: <12%",
    },
    {
      title: "Turkish Gram (Moth Bean)",
      image: "/images/pulses/turkishgram.jpg",
      desc: "Nutritious moth beans, highly drought-resistant. Staple legume in Indian and African cuisines.",
      specifications: "Protein: 23g | Fiber: 10g | Moisture: <12%",
    },
    {
      title: "Urad Dal (Split & Gota)",
      image: "/images/pulses/uraddal.jpg",
      desc: "Premium urad dal (whole & split) used in a wide variety of traditional dishes across India.",
      specifications: "Protein: 24g | Fiber: 15g | Moisture: <12%",
    },
    {
      title: "Whole Masoor",
      image: "/images/pulses/wholemasoor.webp",
      desc: "Whole red lentils with excellent cooking quality and nutrition. Popular in soups, curries, and global cuisines.",
      specifications: "Protein: 25g | Fiber: 15g | Moisture: <12%",
    },
  ];
  return (
    <div className="bg-white">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/pulses/heropulses.jpeg"
          alt="Premium Indian Pulses Export"
          className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Indian Pulses
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Numa Agri Prime – Your trusted partner for high-quality pulse exports from India
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Pulse Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              India is a major exporter of various pulses with exponential growth in recent years. 
              Numa Agri Prime ensures premium quality products reach destinations fresh and on time.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pulseVarieties.map((pulse, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={pulse.image}
                    alt={pulse.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {pulse.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {pulse.desc}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 font-medium">
                      {pulse.specifications}
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