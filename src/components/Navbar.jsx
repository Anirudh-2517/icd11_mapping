import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Package, Award, FileText, Phone, ChevronDown } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // ✅ dropdown state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Products", path: "/products", icon: Package, dropdown: true }, // ✅ dropdown trigger
    { name: "Certificates", path: "/certificates", icon: Award },
    { name: "Blogs", path: "/blog", icon: FileText },
    { name: "Contact Us", path: "/contact", icon: Phone },
  ];

  // ✅ Subcategories under Products
  const productCategories = [
  { name: "Pulses", path: "/products/pulses" },
  { name: "Spices", path: "/products/spices" },
  { name: "Grains & Cereals", path: "/products/cereals" },
  { name: "Vegetables", path: "/products/vegetables" },
  { name: "Fruits", path: "/products/fruits" },
  { name: "Dry Fruits", path: "/products/dry-fruits" },
  { name: "Herbs", path: "/products/herbs" },
];

  const NavLink = ({ to, children, icon: Icon, dropdown }) => {
    const isActive = location.pathname === to;
    return (
      <div className="relative group">
        <Link
          to={to}
          className={`relative px-3 py-2 text-base transition-all duration-300 group flex items-center gap-2 
            ${isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
          onClick={(e) => {
            if (dropdown) {
              e.preventDefault(); // prevent navigation
              setProductsOpen((prev) => !prev);
            }
          }}
        >
          {Icon && <Icon size={20} className={isActive ? "text-white" : "text-white/80"} />}
          {children}
          {dropdown && <ChevronDown size={16} className="ml-1" />}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 
            ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
          />
        </Link>

        {/* ✅ Desktop Dropdown */}
        {dropdown && (
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-48 z-50">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-teal-600/95 to-blue-500/95 backdrop-blur-md shadow-xl"
            : "bg-gradient-to-r from-teal-600 to-blue-500"
        }`}
      >
        <div className="w-full px-4 sm:px-6">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-white/20 
             transform transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <img
                src="/images/logo.jpeg"
                alt="Numa Agri Prime Logo"
                className="w-14 h-14 object-contain"
              />
              <h1 className="text-gray-800 text-xl sm:text-2xl font-bold tracking-wide">
                NUMA AGRI PRIME
              </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  icon={item.icon}
                  dropdown={item.dropdown}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors duration-300 
                         focus:outline-none focus:ring-2 focus:ring-white/20 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-gradient-to-r from-teal-700 to-blue-600 border-t border-white/10`}
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    if (item.dropdown) {
                      setProductsOpen((prev) => !prev);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "bg-white/20 text-white font-semibold"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon size={18} />
                    {item.name}
                  </div>
                  {item.dropdown && <ChevronDown size={16} />}
                </Link>

                {/* Mobile dropdown list */}
                {item.dropdown && productsOpen && (
                  <div className="ml-8 mt-2 space-y-1">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-white/90 hover:bg-white/20 rounded-lg"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="pt-24 sm:pt-28"></div>
    </>
  );
}

export default Navbar;
