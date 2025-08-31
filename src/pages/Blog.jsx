const blogs = [
  {
    title: "Top 5 Agro Products Exported from India",
    img: "https://source.unsplash.com/400x300/?agriculture",
    desc: "India is a leading exporter of rice, pulses, and spices. Learn more about the top products driving global demand.",
  },
  {
    title: "Why Choose Indian Spices?",
    img: "https://source.unsplash.com/400x300/?spices",
    desc: "Indian spices are world-famous for their aroma and flavor. Here’s why they dominate the global spice market.",
  },
];

function Blog() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Our Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((b, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={b.img} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{b.title}</h2>
              <p className="text-gray-600 mt-2">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blog;
