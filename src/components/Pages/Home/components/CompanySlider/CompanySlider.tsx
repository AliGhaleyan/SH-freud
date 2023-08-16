import { Swiper, SwiperSlide } from "swiper/react";
import { COMPANY_LIST } from "@/components/Pages/Home/components/CompanySlider/consts";
import "swiper/css";
import { Psyche } from "@/components/Elements";
import classNames from "classnames";

const CompanySlider = () => {
  return (
    <div className="px-4">
      <div className="container mx-auto">
        <div className="w-full rounded-[3.5rem] bg-mindful-gray-80 py-14">
          <Swiper slidesPerView="auto" centeredSlides loop>
            {[...COMPANY_LIST, ...COMPANY_LIST].map((x, key) => (
              <SwiperSlide
                key={key}
                className={classNames(
                  "mx-8 !w-[14rem] text-mindful-gray-60 md:!w-[9.375rem]",
                  "hover:text-white",
                  "[&.swiper-slide-active]:text-white",
                  "[&.swiper-slide-active>svg:first-of-type]:block [&.swiper-slide-active>svg:first-of-type]:text-zen-yellow-40"
                )}
              >
                <Psyche
                  width={8}
                  height={8}
                  className="absolute left-0 right-0 mx-auto hidden"
                />
                {x}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
