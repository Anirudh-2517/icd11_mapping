export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Strong Farmer Network",
      desc: "With over 20 years of domestic presence across India, we are deeply connected with farmers, ensuring authenticity and consistency in supply."
    },
    {
      number: "02",
      title: "Assured Quality",
      desc: "Every product undergoes strict quality checks to meet international food safety and freshness standards."
    },
    {
      number: "03",
      title: "Expanding Global Reach",
      desc: "We are building strong international partnerships to deliver Indian agriculture to markets across the world."
    },
    {
      number: "04",
      title: "Market Expertise",
      desc: "Our knowledge and insights help buyers and partners access the right products at the right time."
    },
    {
      number: "05",
      title: "Trusted & Transparent",
      desc: "Integrity drives our operations — we maintain clear, reliable, and ethical practices at every stage."
    },
    {
      number: "06",
      title: "Cost & Time Efficiency",
      desc: "Our streamlined supply chains and strong market network help partners save time, reduce costs, and maximize value."
    }
  ];
  return (
    <section className="py-20 bg-green-50 relative overflow-hidden">
      <div className="absolute inset-0 flex items-start justify-center pt-12">
        <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-bold text-gray-400 opacity-30 select-none tracking-wider text-center px-4">
          WHY CHOOSE US?
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-green-700">
            WHY CHOOSE US?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-lime-400 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white">
                    {feature.number}
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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