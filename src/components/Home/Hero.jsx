import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const banner1 = "/assets/hero/3.jpg";
const banner2 = "/assets/hero/2.jpg";
const banner3 = "/assets/hero/1.jpg";
// const banner1 = "/assets/banner1.jpg";
// const banner2 = "/assets/banner2.jpg";
// const banner3 = "/assets/banner3.jpg";
import { motion } from "framer-motion";

const banners = [banner1, banner2, banner3];
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section className="flex justify-center overflow-hidden bg-primary-blue relative">
      <div className="bg-primary-blue/70 pt-32 w-full space-y-12 relative flex flex-col justify-center items-center">
        <div className="max-w-5xl px-4 md:px-0">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-6xl lg:text-[72px] font-bold text-white tracking-wide mb-4 sm:mb-6 text-center"
          >
            Synergy
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.3 }}
            className="text-2xl lg:text-[68px] text-center text-white font-light font-serif-light leading-snug"
          >
            Rediscover your potential with guidance of our Experts
          </motion.h2>
        </div>
        <div className="w-full h-[90vh] relative overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={900}
            className="w-full h-full"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="w-full h-full [clip-path:ellipse(200%_100%_at_50%_100%)] md:[clip-path:ellipse(140%_100%_at_50%_100%)] lg:[clip-path:ellipse(110%_100%_at_50%_100%)] xl:[clip-path:ellipse(95%_100%_at_50%_100%)]">
                  <img
                    src={banner}
                    alt={`banner-${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
