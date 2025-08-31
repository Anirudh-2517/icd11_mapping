export default function WhyIndianMarket() {
  const points = [
    {
      title: "AGRICULTURE BASE",
      desc: "With over 50 per cent of India's workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
    },
    {
      title: "AFFORDABLE RATES",
      desc: "Cheap labour and raw materials allow India to produce spices, oils, and other food products at great affordable rates.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
        </svg>
      ),
    },
    {
      title: "BEST QUALITY FOOD PRODUCTS",
      desc: "Any food product manufactured in India goes through quality assurance tests and certifications to ensure that they are of high quality.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
        </svg>
      ),
    },
    {
      title: "VARIETY OF SPICES AND TASTES",
      desc: "Being known as the land of spices, the country is the leading producer of spices. The country boasts of a huge variety of spices providing a great range of flavour.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,1C7.89,1 7,1.89 7,3A2,2 0 0,0 9,5C10.11,5 11,4.11 11,3C11,1.89 10.11,1 9,1M15,1C13.89,1 13,1.89 13,3A2,2 0 0,0 15,5C16.11,5 17,4.11 17,3C17,1.89 16.11,1 15,1M9,7C7.89,7 7,7.89 7,9A2,2 0 0,0 9,11C10.11,11 11,10.11 11,9C11,7.89 10.11,7 9,7M15,7C13.89,7 13,7.89 13,9A2,2 0 0,0 15,11C16.11,11 17,10.11 17,9C17,7.89 16.11,7 15,7M12,13C10.89,13 10,13.89 10,15A2,2 0 0,0 12,17C13.11,17 14,16.11 14,15C14,13.89 13.11,13 12,13M9,19C7.89,19 7,19.89 7,21A2,2 0 0,0 9,23C10.11,23 11,22.11 11,21C11,19.89 10.11,19 9,19M15,19C13.89,19 13,19.89 13,21A2,2 0 0,0 15,23C16.11,23 17,22.11 17,21C17,19.89 16.11,19 15,19Z"/>
        </svg>
      ),
    },
    {
      title: "DIVERSITY OF INDIA AND INDIAN CULTURE",
      desc: "The diverse Indian cultures are the reason behind the diversified food products available. With each region of the country possessing its own blend and flavour, no country does this better.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H9V3H15V9H21M3,4V14H5V12H19V14H21V4C21,2.89 20.1,2 19,2H5C3.89,2 3,2.89 3,4M5,4H19V10H5V4M12,13.5A1.5,1.5 0 0,1 13.5,15A1.5,1.5 0 0,1 12,16.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 12,13.5M6,22A2,2 0 0,1 8,20A2,2 0 0,1 6,18A2,2 0 0,1 4,20A2,2 0 0,1 6,22M18,22A2,2 0 0,1 20,20A2,2 0 0,1 18,18A2,2 0 0,1 16,20A2,2 0 0,1 18,22Z"/>
        </svg>
      ),
    },
    {
      title: "TECHNOLOGY AND INNOVATION",
      desc: "In a land blessed with great scientific minds, India's technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16L1,18V20H9C10.11,20 11,19.11 11,18V16H13V18C13,19.11 13.89,20 15,20H23V18L21,16V13C21,11.89 20.11,11 19,11H13V8H15V2H9M19,13V15H15V13H19M9,13V15H5V13H9M9,4V6H13V4H9Z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-4">
            Why the Indian market is Best?
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50 hover:border-green-200"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              <div className="absolute inset-[1px] bg-white rounded-3xl -z-10"></div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800 tracking-wide leading-tight group-hover:text-green-700 transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {point.desc}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-bounce delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}