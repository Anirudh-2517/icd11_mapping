import { MapPin, Phone, Mail } from "lucide-react";
export default function Footer() {
  const informationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Certificates", href: "/certificates" },
    { name: "Products Range", href: "/products" },
    { name: "Blogs", href: "/blog" },
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
  const Section = ({ title, items }) => (
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">{title}</h3>
      <div className="w-12 h-0.5 bg-gray-600 mb-4 md:mb-6"></div>
      <ul className="space-y-2 md:space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
            >
              <span className="mr-2">›</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Section title="Information" items={informationLinks} />
          <Section title="Products Range" items={productsRange} />
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Stay Connected</h3>
            <div className="w-12 h-0.5 bg-gray-600 mb-4 md:mb-6"></div>
            <div className="mb-4 md:mb-6 flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Office Address:</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  #2, Basement, Mannat Apartment,<br />
                  1st Cross, Mannat Colony,<br />
                  Mahantesh Nagar, Belgaum 590016 India
                </p>
              </div>
            </div>
            <div className="mb-4 md:mb-6 flex items-start">
              <Phone className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Phone Number:</p>
                <a href="tel:+919880204002" className="text-gray-300 block hover:text-white">+91 9880204002</a>
                <a href="tel:+917411041565" className="text-gray-300 block hover:text-white">7411041565</a>
              </div>
            </div>
            <div className="mb-6 md:mb-8 flex items-start">
              <Mail className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Email:</p>
                <a href="mailto:numaagriprime@gmail.com" className="text-gray-300 hover:text-white">
                  numaagriprime@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}