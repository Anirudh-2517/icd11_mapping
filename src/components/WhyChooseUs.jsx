export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Strong Farmer Network",
      desc: "With over 20 years of domestic presence across India, we are deeply connected with farmers, ensuring authencity and consistency in supply.",
    },
    {
      number: "02", 
      title: "Assured Quality",
      desc: "Every product undergoes strict quality checks to meet international food safety and freshness standards.",
    },
    {
      number: "03",
      title: "Expanding Global Reach",
      desc: "We are building strong international partnershios to deliver Indian agriculture to markets across the world."
    },
    {
      number: "04",
      title: "Market Expertise",
      desc: "Our knowlegde and insights help buyers and partners access the right products at the right time.",
    },
    {
      number: "05",
      title: "Trusted & Transparent ",
      desc: "Integrity drives our operations - we maintain clear, reliable, and ethical practices at every stage .",
    },
    {
      number: "06",
      title: "Cost & Time Efficiency",
      desc: "Our streamlined supply chains and strong market network help partners save time, reduce costs, and maximize value."
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