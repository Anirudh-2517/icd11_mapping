export default function About() {
  return (
    <div className="bg-gray-50">
      <section className="relative text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
            alt="Shipping Cargo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center py-28">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-200">
            Numa Agri Prime – Delivering trust, quality, and excellence in every grain.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1598515213691-3f3b76f79df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Farmers India"
            className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are <span className="font-semibold text-green-700">NUMA AGRI PRIME</span>, 
            a trusted name in the agricultural trade industry with over two decades of domestic experience across India. 
            Our expertise lies in the export and import of vegetables, grains, pulses, and fruits, 
            ensuring that only the freshest and highest-quality produce reaches our customers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Built on values of <strong>trust, sustainability, and excellence</strong>. 
            We are more than just traders — we are connectors between farmers, markets, and communities. 
            With our expansion into global markets, 
            we continue our journey of delivering nourishment and building lasting relationships worldwide.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From procurement to packaging and logistics, we ensure consistency, 
            reliability, and excellence in every delivery.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1524594154903-edd33856627d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Mission"
              className="w-full h-52 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver premium quality agro products worldwide while supporting 
              farmers, promoting sustainability, and maintaining global food security.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/247933/pexels-photo-247933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Vision"
              className="w-full h-52 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a global leader in agro exports by consistently 
              providing value, quality, and trust to our customers and partners.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-6">Why the Indian Market?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              India is one of the world’s largest producers of grains, pulses, and spices. 
              With its diverse climate and fertile lands, the Indian market ensures year-round 
              supply of high-quality agricultural products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Partnering with India means accessing a hub of agricultural excellence 
              with unmatched diversity, quality, and competitive advantages.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Indian Market"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Quality Assurance", icon: "✅" },
              { title: "Global Trust", icon: "🌍" },
              { title: "Sustainability", icon: "🌱" },
              { title: "Customer First", icon: "🤝" },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join hands with Numa Agri Prime and experience the best of Indian agriculture. 
          Let’s grow together with trust, quality, and commitment.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}