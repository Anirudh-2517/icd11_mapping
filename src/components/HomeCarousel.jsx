import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HomeCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <SwiperSlide>
          <img
            src="/images/image1.jpg"
            alt="Premium Pulses"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/image2.jpg"
            alt="Aromatic Spices"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/image3.jpg"
            alt="Fresh Agro Products"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeCarousel;
