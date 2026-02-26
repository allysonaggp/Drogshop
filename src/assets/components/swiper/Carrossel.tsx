import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carrossel() {
  return (
    <div className="w-[42]  lg:w-full max-w-6xl mx-auto mt-10 mb-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01kj7x4314ep2v8265en1bvg0b.png"
            alt="Banner 1"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyawc8reeyt3s6yxecradbw.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyawev1ezzafjfm8xqa49d9.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01kj54qr8af28s8cr7a2w9mnka.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyawcatfjjsawnc0sb4vm1g.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyawdcsfx6bm98f0yhkm5dp.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyaw1xqeyhs7v3qsxqtysf4.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyaw2ebfmptv7h9a7jwhhad.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://topsortassets.com/asset_01khyawp06e39988j89624q05f.png"
            alt="Banner 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carrossel;
