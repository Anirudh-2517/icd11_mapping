import { Link } from "react-router-dom";

const categories = [
  {
    name: "Pulses",
    path: "/products/pulses",
    img: "/images/pulses/heropulses.jpeg",
    desc: "Rich in protein and nutrition, sourced from the best farms in India.",
  },
  {
    name: "Spices",
    path: "/products/spices",
    img: "/images/spices/herospices.jpg",
    desc: "Authentic Indian spices with strong aroma and flavor.",
  },
  {
    name: "Cereals & Grains",
    path: "/products/cereals",
    img: "/images/cereals/herocereals.webp",
    desc: "Wholesome cereals and grains, essential for global diets.",
  },
  {
    name: "Vegetables",
    path: "/products/vegetables",
    img: "/images/vegetables/herovegetables.jpg",
    desc: "Fresh Indian vegetables exported with global quality standards.",
  },
  {
    name: "Fruits",
    path: "/products/fruits",
    img: "/images/fruits/herofruits.jpg",
    desc: "Fresh seasonal fruits — mangoes, bananas, apples and more — carefully sorted and packed for export.",
  },
  {
    name: "Dry Fruits",
    path: "/products/dry-fruits",
    img: "/images/dryfruits/herodryfruits.jpg",
    desc: "Premium dry fruits known for their taste, nutrition, and quality.",
  },
  {
    name: "Herbs",
    path: "/products/herbs",
    img: "/images/herbs/heroherbs.jpg",
    desc: "Traditional Indian herbs with medicinal and culinary applications.",
  },
];

export default function Products() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-green-700 mb-10 sm:mb-12 text-center">
          Our Product Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              aria-label={`View ${cat.name}`}
              className="group flex flex-col h-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white"
            >
              <div className="relative h-48 sm:h-60 md:h-72 lg:h-80">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <h2 className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white text-xl sm:text-2xl font-semibold drop-shadow-lg">
                  {cat.name}
                </h2>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex items-center">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}