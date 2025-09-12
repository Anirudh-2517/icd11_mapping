import { Sprout, IndianRupee, Star, Flame, Globe2, Lightbulb } from "lucide-react";

export default function WhyIndianMarket() {
  const points = [
    {
      title: "AGRICULTURE BASE",
      desc: "With over 50% of India's workforce in agriculture, the country is one of the leading global exporters.",
      icon: <Sprout className="w-8 h-8" />,
    },
    {
      title: "AFFORDABLE RATES",
      desc: "Cheap labour and raw materials allow India to produce food products at great affordable rates (₹).",
      icon: <IndianRupee className="w-8 h-8" />,
    },
    {
      title: "BEST QUALITY FOOD PRODUCTS",
      desc: "Food products manufactured in India go through strict quality assurance tests and certifications.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "VARIETY OF SPICES AND TASTES",
      desc: "Being the land of spices, India produces a wide range of spices offering rich flavour diversity.",
      icon: <Flame className="w-8 h-8" />,
    },
    {
      title: "DIVERSITY OF INDIA AND INDIAN CULTURE",
      desc: "Unique cultural diversity brings unmatched blends and flavours across different regions.",
      icon: <Globe2 className="w-8 h-8" />,
    },
    {
      title: "TECHNOLOGY AND INNOVATION",
      desc: "India’s technological advancements make global trade simpler and more efficient.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-100 via-green-200 to-green-300 min-h-screen relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex w-16 h-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent mb-4">
            Why the Indian Market is Best?
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-200 hover:border-green-700 hover:bg-green-50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-600 animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-green-700 animate-bounce delay-100"></div>
          <div className="w-3 h-3 rounded-full bg-green-800 animate-bounce delay-200"></div>
        </div>
      </div>
    </section>
  );
}
