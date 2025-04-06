import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "../Container.jsx";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { CarouselCard } from "./CarouselCard.jsx";
import { motion, useInView } from "framer-motion";


const cardsData = [
  {
    title: "Obesity",
    description:
      "We offer tailored obesity management to enhance mobility and health, blending expert care with effective weight-loss strategies. Read more...",
    imageUrl: "/assets/carousel/obesity.png",
  },
  {
    title: "Knee Pain",
    description:
      "We offer tailored obesity management to enhance mobility and health, blending expert care with effective weight-loss strategies. Read more...",
    imageUrl: "/assets/carousel/kneepain.png",
    href: "/services/ligament-injury",
  },
  {
    title: "Back Pain",
    description:
      "The spine is a vital part of the body that enables movement and provides essential support. Comprising 33 individual vertebrae, it’s designed to balance strength with flexibility. Read more...",
    imageUrl: "/assets/carousel/backpain.png",
  },
  {
    title: "Urine Leakage",
    description:
      "Regain control and confidence with our advanced urine leakage management solutions. Our tailored approach focuses on effective treatments to improve bladder function and overall well-being. Read more....",
    imageUrl: "/assets/carousel/urineleakage.png",
    href: "/services/urinary-incontinence",
  },
  {
    title: "Shoulder Pain",
    description:
      "Experience targeted relief from shoulder pain with our specialized treatments. We address the underlying causes to restore strength, flexibility, and pain-free movement. Read more...",
    imageUrl: "/assets/carousel/shoulderpain.png",
    href: "/services/frozen-shoulder",
  },
  {
    title: "Paralysis",
    description:
      "Our expert rehabilitation programs for paralysis are designed to enhance motor function and promote recovery. We focus on personalized therapies to help regain independence and improve quality of life. Read more...",
    imageUrl: "/assets/carousel/paralysis.png",
    href: "/services/paralysis",
  },
];

export const TreatmentsWeOffer = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: "some",
  });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className={"py-6"}
    >
      <Container className={"flex justify-center"}>
        <div className={"myContainer"}>
          <div className={"flex justify-between items-center"}>
            <p
              className={
                "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              }
            >
              Treatments We Offer
            </p>
            <div className={"flex space-x-2"}>
              <CircleChevronLeft
                strokeWidth={1}
                className={
                  "size-10 md:size-12 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:text-primary-blue"
                }
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <CircleChevronRight
                strokeWidth={1}
                className={
                  "size-10 md:size-12 text-primary-blue cursor-pointer transition-all duration-300 transform hover:scale-110 hover:text-primary-blue"
                }
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>

          <motion.div
            className={"mt-9"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={1.3} // Default for small screens
              spaceBetween={20}
              navigation={false} // Disable default navigation
              speed={500} // Smooth transition speed
              loop={true}
              autoplay={false}
              breakpoints={{
                768: {
                  slidesPerView: 2, // 2 items for medium screens
                },
                1024: {
                  slidesPerView: 3, // 3 items for large screens
                },
              }}
              className="mySwiper"
            >
              {cardsData.map((card, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CarouselCard {...card} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};
