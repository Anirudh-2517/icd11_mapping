import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const products = [
  { name: "Chickpeas", image: "/images/products/chickpeas.jpg" },
  { name: "Green Gram", image: "/images/products/green-gram.jpg" },
  { name: "Red Lentils", image: "/images/products/red-lentils.jpg" },
  { name: "Pigeon Peas", image: "/images/products/pigeon-peas.jpg" },
  { name: "Kidney Beans", image: "/images/products/kidney-beans.jpg" },
  { name: "Black Eyed Beans", image: "/images/products/black-eyed-beans.jpg" },
  { name: "Coriander Seeds", image: "/images/products/coriander.jpg" },
  { name: "Cumin Seeds", image: "/images/products/cumin.jpg" }
];
function PopularProducts() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          Popular Products
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          className="pb-10">
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default PopularProducts;