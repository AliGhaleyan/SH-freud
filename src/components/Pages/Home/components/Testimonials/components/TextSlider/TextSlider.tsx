import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "@/components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TEXTS } from "./consts";
import TextSliderItem from "./components/TextSliderItem";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { ButtonIcon } from "@/components/Elements";

const TextSlider = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handleOnNext = () => {
    if (!swiper) return;
    swiper.slideNext();
  };

  const handleOnPrev = () => {
    if (!swiper) return;
    swiper.slidePrev();
  };

  return (
    <div className="order-0 m-auto grid gap-y-12 xl:order-1 xl:w-[28.5rem]">
      <div className="flex justify-center xl:justify-start">
        <div className="rounded-2xl bg-mindful-gray-30 p-4 text-mindful-gray-60">
          <QuoteIcon width={48} height={48} />
        </div>
      </div>
      <div className="flex min-w-full justify-center text-center xl:justify-start xl:text-left">
        <Swiper loop slidesPerView={1} onSwiper={setSwiper}>
          {TEXTS.map((text, key) => (
            <SwiperSlide key={key}>
              <TextSliderItem>{text}</TextSliderItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center gap-x-4 xl:justify-start">
        <ButtonIcon
          icon={<ArrowLeftIcon width={24} height={24} />}
          onClick={handleOnPrev}
        />
        <ButtonIcon
          icon={<ArrowRightIcon width={24} height={24} />}
          onClick={handleOnNext}
        />
      </div>
    </div>
  );
};

export default TextSlider;
