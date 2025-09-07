export default function Footer() {
  const informationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Certificates", href: "/certificates" },
    { name: "Products Range", href: "/products" },
    { name: "Blogs", href: "/blog" },  // fixed path (was /blogs)
    { name: "Contact Us", href: "/contact" }
  ];
  const productsRange = [
    { name: "Grains and Cereals", href: "/products/cereals" },
    { name: "Pulses", href: "/products/pulses" },
    { name: "Spices", href: "/products/spices" },
    { name: "Fruits", href: "/products/fruits" },
    { name: "Vegetables", href: "/products/vegetables" },
    { name: "Herbs", href: "/products/herbs" },
    { name: "Dry Fruits", href: "/products/dry-fruits" }
  ];
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Information</h3>
            <div className="w-12 h-0.5 bg-gray-600 mb-6"></div>
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Range */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Products Range</h3>
            <div className="w-12 h-0.5 bg-gray-600 mb-6"></div>
            <ul className="space-y-3">
              {productsRange.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href} 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-2">›</span>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Connected</h3>
            <div className="w-12 h-0.5 bg-gray-600 mb-6"></div>
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-white font-medium">Office Address :</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    #2, Basement, Mannat Apartment ,<br/>
                    1st cross, Mannat Colony,<br/>
                    Mahantesh Nagar, Belgaum 590016 India
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div>
                  <p className="text-white font-medium">Phone Number:</p>
                  <p className="text-gray-300">+91 9880204002 / 7411041565</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="text-white font-medium">Email:</p>
                  <p className="text-gray-300">numaagriprime@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uncomment to show social icons */}
        {/* <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex justify-center space-x-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#" className={`${social.color} transition-colors duration-200 hover:scale-110 transform transition-transform`}
                aria-label={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </footer>
  );
}
