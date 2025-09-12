import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
function HomeCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={20}
        centeredSlides
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <SwiperSlide>
          <img src="/images/image1.jpg" alt="Premium Pulses" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image2.jpg" alt="Aromatic Spices" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image3.jpg" alt="Fresh Agro Products" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default HomeCarousel;