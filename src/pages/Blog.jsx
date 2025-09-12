import React from 'react';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Agricultural Products Classification in India",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "In India, Agricultural products are mainly classified in various cultures based on the commodity & further classified based on factors such as season, perishability, & uses.",
    date: "March 15, 2024",
    author: "Numa Team",
    category: "Agriculture",
    excerpt: "The word 'agriculture' comes from the Latin words 'Agri' means field, and 'culture' means cultivation (or) a way of life. Agriculture is all about producing food, feed, fiber, and many other byproducts by the process of cultivating certain plants and domesticating animals."
  },
  {
    id: 2,
    title: "Export of Indian Spices in Global Market",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "India is known as the Land of Spices. Get to know the Export history of Indian Spices in the global market, where and how much it is exported from India.",
    date: "March 10, 2024",
    author: "Numa Team",
    category: "Spices Export",
    excerpt: "India has been the world's largest producer, consumer, and exporter of spices for centuries. Our country produces about 75 of the 109 varieties listed by the International Organization for Standardization (ISO)."
  },
  {
    id: 3,
    title: "Most Popular Gourd Vegetables in India",
    img: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Gourd vegetables of India are loaded with nutrition, vitamins, carbohydrates, minerals. Learn about some of the most popular gourd vegetables and their benefits.",
    date: "March 5, 2024",
    author: "Numa Team",
    category: "Vegetables",
    excerpt: "Gourd means the crop plants in the family Cucurbitaceae. These include pumpkins, cucumbers, squash, luffa and melons. The gourd vegetables of India are loaded with nutrition, vitamins, carbohydrates, minerals."
  },
  {
    id: 4,
    title: "Chillies in India - Varieties, Uses & Benefits",
    img: "/images/blogs/chillies.jpg", // top-left
    desc: "Chillies are the core of a hearty Indian meal & have various benefits to our health. Read the complete article to know various details about Indian chillies.",
    date: "February 28, 2024",
    author: "Numa Team",
    category: "Spices",
    excerpt: "India is the largest producer and consumer of chillies in the world. Chillies not only add flavor and heat to our food but also provide numerous health benefits including vitamin C, antioxidants, and metabolism boosters."
  },
  {
    id: 5,
    title: "Barley Details & Benefits - King of Cereals",
    img: "/images/blogs/barley.jpg", // barley close-up from Unsplash via search
    desc: "Barley is considered to be king of cereals. Read the blog to know details and benefits of Barley including its nutritional value and uses.",
    date: "February 20, 2024",
    author: "Numa Team",
    category: "Cereals",
    excerpt: "Barley is one of the oldest cultivated grains and is considered the king of cereals due to its exceptional nutritional profile and versatility. It's rich in fiber, vitamins, and minerals."
  },
  {
    id: 6,
    title: "Sustainable Agriculture Practices in Modern India",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Due to climate change being recognized as a problem, we as humans have started preserving the Planet by using sustainable agriculture practices and organic farming methods.",
    date: "February 15, 2024",
    author: "Numa Team",
    category: "Sustainability",
    excerpt: "Sustainable agriculture is farming that meets the needs of the present without compromising the ability of future generations to meet their own needs. Learn about modern sustainable practices in Indian agriculture."
  }
];

function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-teal-400 to-green-600 py-16 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <nav className="text-white/80 text-sm mb-4">
            <span>HOME</span> 
            <ChevronRight className="inline w-4 h-4 mx-2" />
            <span className="text-white font-medium">BLOG</span>
          </nav>
          <h1 className="text-5xl font-bold text-black mb-4">Food Export and Import Blogs</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover insights about agriculture, food exports, spices, and sustainable farming practices from industry experts.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8">
          {blogs.map((blog, index) => (
            <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-1/3">
                  <img 
                    src={blog.img} 
                    alt={blog.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors cursor-pointer">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="text-sm text-gray-400">
                      3 min read
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;