export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Get Buyers for Your Food Products",
      desc: "No matter the type of food or spice you plan on exporting, we will ensure that you get genuine buyers for your products who meet your expectations.",
    },
    {
      number: "02", 
      title: "Best quality food trading services",
      desc: "Our stringent policies make sure that food handling and trading is in accordance with international quality standards.",
    },
    {
      number: "03",
      title: "Global Presence",
      desc: "Even if you are planning to export across multiple countries, we ensure that you get the best of our services."
    },
    {
      number: "04",
      title: "Market Analysis & Up-to-date Market Information",
      desc: "Our thorough and regular analysis and research let us update our database with up to date information on the market and allows us to stay on top of every update.",
    },
    {
      number: "05",
      title: "Reliable & Trusted Services",
      desc: "Trust is a pillar of our services. Our transparent and reliable operations ensure that you feel at ease with our services.",
    },
    {
      number: "06",
      title: "Save your time & cost for searching markets",
      desc: "Understanding and researching the market by yourself takes a lot of time and effort. We make sure that you don't have to go through this trouble."
    }
  ];

  return (
    <section className="py-20 bg-green-50 relative">
      {/* Background text */}
      <div className="absolute inset-0 flex items-start justify-center pt-12">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-200 opacity-40 select-none tracking-wider">
          WHY CHOOSE US?
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            WHY CHOOSE US?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Circular Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-lime-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {feature.number}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}