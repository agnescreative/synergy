import { Swiper, SwiperSlide } from "swiper/react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useRef } from "react";
import Container from "../Container.jsx";

const images = [

  "/assets/infrastructure/6.jpg",
  "/assets/infrastructure/7.jpg",
  "/assets/infrastructure/8.jpg",
  "/assets/infrastructure/9.png",
  "/assets/infrastructure/18.jpg",
  "/assets/infrastructure/10.jpg",
  "/assets/infrastructure/12.jpg",
  "/assets/infrastructure/16.jpg",
  "/assets/infrastructure/17.jpg",
  "/assets/infrastructure/19.jpg",
  
];

export const OurInfrastructure = () => {
  const swiperRef = useRef(null);

  return (
    <Container>
      <div className={"flex justify-center py-20"}>
        <div className={"myContainer"} id={"our-infrastructure"}>
          <p className={"font-serif-light font-semibold text-3xl xl:text-5xl"}>
            Our Infrastructure
          </p>
          <div className={"mt-12"}>
            {/* Relative container to ensure button positioning */}
            <div className="relative">
              <CircleChevronLeft
                strokeWidth={1}
                onClick={() => swiperRef.current.swiper.slidePrev()}
                className="size-8 absolute top-1/2 left-4 transform -translate-y-1/2 lg:size-14 md:size-12 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-primary-blue z-10"
              />
              <CircleChevronRight
                strokeWidth={1}
                onClick={() => swiperRef.current.swiper.slideNext()}
                className="size-8 absolute top-1/2 right-4 transform -translate-y-1/2 lg:size-14 md:size-12 cursor-pointer transition-all duration-300 hover:scale-110 text-primary-blue hover:text-primary-blue z-10"
              />
              <Swiper
                ref={swiperRef}
                spaceBetween={20} // Space between slides
                slidesPerView={1} // Number of slides shown at once
                pagination={{ clickable: true }} // Enable clickable pagination
                loop // Enable loop for continuous sliding
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="w-full h-[350px] xl:h-[650px] rounded-3xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
