"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import Image from "next/image";
import ApiURL from "../api/Api";
import "./sliders.scss";
import Link from "next/link";

const Slider = () => {
  const { sliders } = useSelector((state) => state.sliders);
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <Swiper
          className="dark:bg-[#1a123a] bg-[#fff]"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={1}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 250,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000, // 5s
            disableOnInteraction: true,
          }}
          speed={2500} // 2.5s
          loop={true}
          pagination={{
            clickable: true,
          }}
        >
          {sliders?.map((slider, index) => (
            <SwiperSlide className="relative overflow-hidden" key={index}>
              <Image
                src={`${ApiURL}/public/images/sliders/${slider?.slider_photo}`}
                alt={slider?.title}
                width={610}
                height={420}
                priority={true}
                className="h-full relative w-full  brightness-75 "
                loading="eager"
                placeholder="blur"
                blurDataURL={`${ApiURL}/public/images/sliders/${slider?.slider_photo}`}
              />
              <div className="top-0 left-0 absolute h-full flex justify-center flex-col gap-6 mx-auto w-full items-center">
                <p className="backdrop-blur-[2px] text-white sm:text-2xl lg:text-4xl text-[17px] inline-block   px-16 md:px-0 md:w-2/3 right-0 mx-auto text-center ">
                  {slider?.title}
                </p>
                <Link
                  href={slider?.url}
                  className="px-3 py-2 md:p-3 text-sm bg-[#8a5cf5d3] md:text-xl font-semibold rounded-md items-center flex gap-2 text-white z-10"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width={"20"}
                    height={"20"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>

                  {slider?.link}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
