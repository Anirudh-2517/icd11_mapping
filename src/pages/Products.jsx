import { Link } from "react-router-dom";
const categories = [
  {
    name: "Pulses",
    path: "/pages/products/pulses",
    img: "https://images.unsplash.com/photo-1606756790138-256c1f0e62d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oil Seeds",
    path: "/pages/products/oil-seeds",
    img: "https://images.unsplash.com/photo-1615484477795-eba2e3aa8b04?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spices",
    path: "/pages/products/spices",
    img: "https://images.unsplash.com/photo-1615485733445-54f6f98f7b3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cereals",
    path: "/pages/products/cereals",
    img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vegetables",
    path: "/pages/products/vegetables",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-teal-700 mb-10 text-center">
        Our Product Categories
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className="relative h-60">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                {cat.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}