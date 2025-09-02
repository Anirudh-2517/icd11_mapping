import React from 'react';
import { ChevronRight, Award, Globe, Leaf, Users, CheckCircle, Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
            alt="Agricultural Export"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-700/80"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <nav className="text-white/80 text-sm mb-6">
            <span>HOME</span> 
            <ChevronRight className="inline w-4 h-4 mx-2" />
            <span className="text-white font-medium">ABOUT US</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Numa Agri Prime</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Numa Agri Prime – Delivering trust, quality, and excellence in every grain. 
              A trusted name in the agricultural trade industry with over two decades of domestic experience across India.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                GLOBAL EXPANSION • CONNECTING FARMS TO WORLD
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Numa Agri Prime</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                <span className="font-semibold text-green-700">NUMA AGRI PRIME</span>, established with a vision to connect farms to global markets, is a trusted exporter and importer of vegetables, grains, pulses, and fruits. With over 20 years of domestic experience delivering across India, we have built a strong foundation of reliability and excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Building on this expertise, we are expanding our presence to international markets, bringing the same commitment to quality, sustainability, and trust to customers around the world. Through strong partnerships and efficient supply chains, we aim to become a dependable global name in agricultural trade.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Export Import Containers"
                className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">Global Reach</div>
                <div className="text-blue-100">Worldwide Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                EST. 2000s • INDIAN AGRICULTURAL EXPERTISE
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                We are <span className="font-semibold text-green-700">NUMA AGRI PRIME</span>, 
                a trusted name in the agricultural trade industry with over two decades of domestic experience across India. 
                Our expertise lies in the export and import of vegetables, grains, pulses, and fruits, 
                ensuring that only the freshest and highest-quality produce reaches our customers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Built on values of <strong>trust, sustainability, and excellence</strong>. 
                We are more than just traders — we are connectors between farmers, markets, and communities. 
                With our expansion into global markets, 
                we continue our journey of delivering nourishment and building lasting relationships worldwide.
              </p>
              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">30+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Indian Farmers"
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">Premium Quality</div>
                <div className="text-green-100">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us the Ideal Choice</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From procurement to packaging and logistics, we ensure consistency, 
              reliability, and excellence in every delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality Assurance",
                desc: "Highest quality products with rigorous testing and quality control processes."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                desc: "Serving customers worldwide with reliable international shipping and logistics."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainability",
                desc: "Committed to sustainable farming practices and environmental responsibility."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                desc: "Experienced professionals dedicated to delivering exceptional service."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-teal-700 to-green-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <Target className="w-12 h-12 mb-4 text-green-200" />
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-green-100 leading-relaxed">
                  To connect farms with markets across the globe by exporting and importing high-quality vegetables, grains, pulses, and fruits. We are committed
                  to sustainable practices , reliable logistics, and building long-term partnerships that ensure growth for our farmers , satisfaction for our customers, and nourishment
                  for the world.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-teal-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <Eye className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To be a global leader in agricultural trade, delivering nature's best produce while fostering sustainability, trust, and prosperity for farmers and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Indian Market */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Indian Vegetable Market"
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                AGRICULTURAL POWERHOUSE
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why the Indian Market?</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                India is one of the world's largest producers of grains, pulses, and spices. 
                With its diverse climate and fertile lands, the Indian market ensures year-round 
                supply of high-quality agricultural products.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Partnering with India means accessing a hub of agricultural excellence 
                with unmatched diversity, quality, and competitive advantages.
              </p>
              
              <div className="space-y-4">
                {[
                  "World's largest spice producer and exporter",
                  "Diverse climate zones for year-round production",
                  "Rich agricultural heritage and expertise",
                  "Competitive pricing with premium quality"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Fresh Vegetables Storage"
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            <div>
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                SPECIALIZED SERVICES • FARM TO MARKET
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">🚜 What We Do</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                At <span className="font-semibold text-green-700">NUMA AGRI PRIME</span>, we specialize in the export and import of agricultural products, including vegetables, grains, pulses, and fruits. With 20+ years of experience in the Indian market, we have built efficient supply chains that ensure freshness, quality, and reliability from farm to market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We work closely with farmers, suppliers, and global partners to deliver products that meet international standards, while maintaining a strong focus on sustainability, transparency, and trust. Whether it is serving domestic needs or reaching international destinations, we are committed to making agriculture accessible and reliable for all.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-700 mb-2">Farm to Global Markets</div>
                <div className="text-green-600">Efficient Supply Chain Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🌟 Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These values guide every decision we make and every relationship we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { 
                title: "Quality First", 
                icon: <Award className="w-8 h-8" />,
                color: "bg-green-100 text-green-700",
                description: "We ensure that every grain, pulse, fruit, and vegetable we trade meets the highest standards of freshness, safety, and nutrition."
              },
              { 
                title: "Sustainability", 
                icon: <Leaf className="w-8 h-8" />,
                color: "bg-emerald-100 text-emerald-700",
                description: "We are committed to eco-friendly practices, promoting responsible farming and reducing our environmental footprint."
              },
              { 
                title: "Farmer Empowerment", 
                icon: <Users className="w-8 h-8" />,
                color: "bg-orange-100 text-orange-700",
                description: "Our foundation is built on strong farmer relationships — we support and uplift farmers by connecting them to global opportunities."
              }
            ].map((value, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              >
                <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: "Integrity & Trust", 
                icon: <Heart className="w-8 h-8" />,
                color: "bg-rose-100 text-rose-700",
                description: "Transparency and honesty guide every step of our process, making us a dependable partner in domestic and international markets."
              },
              { 
                title: "Global Outlook", 
                icon: <Globe className="w-8 h-8" />,
                color: "bg-blue-100 text-blue-700",
                description: "With 20+ years of domestic expertise, we are expanding globally, delivering Indian agricultural excellence to the world with reliability and care."
              }
            ].map((value, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              >
                <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join hands with Numa Agri Prime and experience the best of Indian agriculture. 
            Let's grow together with trust, quality, and commitment.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-green-50 transition-colors"
            >
              Contact Us Today
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}