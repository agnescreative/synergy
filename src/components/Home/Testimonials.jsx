import Container from "../Container.jsx";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard.jsx";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
const testimonials = [
  {
    review:
      "I had a wonderful experience at Synergy Physiotherapy Hospital. From the moment I walked in, the staff was warm, welcoming, and extremely professional. The physiotherapists here are highly skilled and knowledgeable.The hospital is well-equipped with modern facilities, ensuring top-notch treatment. Cleanliness and hygiene were well-maintained, creating a comfortable healing environment.I highly recommend Synergy Physiotherapy Hospital for anyone seeking quality physiotherapy care.",
    name: "Maya Patel",
  },
  {
    review:
      "My mother was admitted for paralysis. We consulted Dr hardik. The recovery of my mother is marvelleous. I am glad that we took right decision and came here for advanced physiotherapy and robotic treatment. The staff is well trained and well spoken. Advance physiotherapy treatment and robotics.my mother is able to walk by her own. I genuinely thank Dr Hardik and his whole team of synergy physiotherapy hospital and rehabilitation care.",
    name: "Dhrumil Limbachiya",
  },
  {
    review:
      "My name is Anil Bhaliya I live in Gutal village of Waghodia taluka, my mom Kamlaben Bhaliya was having a lot of pain in her knee so we came to Synergy Physiotherapy hospital and rehabilitation care and got checked by Dr. Mr. Hardik Radadia sir, he told me that it is wear and tear of knee cap and then he started the treatment so today After 40 days my mom is feeling almost 60 percent relief, treated here with very advanced equipment. So that the patients can recover quickly, the staff working here also cooperates with everyone in a very simple manner, which has been a unique experience here. Thanks to Dr. Hardik Radadia sir and all the team of Synergy Physiotherapy hospital.",
    name: "Manubhai Bhaliya",
  },
  {
    review:
      "Me & my wife Sangita are on 2 months visit from Canada to Vadodara India. With one small accident I got my shoulder frozen & she have severe pain in her right thigh. One of my friends recommended me this hospital. Thank You to him. Hospital is very nice, tidy with ISO level. Staff is also nice, attentive to details, nice listeners. Particularly Dr Hiral, Dr Hirwa, Dr Vaibhavi are real gem 💎 of this hospital.",
    name: "Sanjivkumar Shah",
  },
  {
    review:
      "Synergy is a very good place for nuro patient. I am very happy with treatment. All therapist is very intelligent and caring. All staff including care taker and mangment staff is also very good.Dr Dhruvisha is very good physiotherapist . I am very happy to treated with her.",
    name: "Shraddha Joshi",
  },
  {
    review:
      "I had been struggling with neck pain for months, and after just one month of treatment at Synergy Physiotherapy Hospital and Rehabilitation Care, I felt a huge difference. Their professional approach, personalized care, and advanced techniques worked wonders for me. The staff is friendly, and the environment is very welcoming. Highly recommended for anyone looking for effective physiotherapy solutions in Vadodara.",
    name: "Bhadresh Patel",
  },
  {
    review:
      "Very nice and effective recovery with latest equipment and trophy for peralisis patients near Tarsali area.Thnx to synergy staff for helping to my mother in treatment time.",
    name: "Kavivarsha",
  },
  {
    review:
      "I came to synergy physiotherapy hospital and rehabilitation care with my back pain. I consulted Dr. Hardik and Dr. Vaibhavi for the same. And I started treatment here. In 4-5 days, I felt 50% relief from my pain. But I still continue treatment for 20 days. And I recovered fully from my long lasting pain. All staff are so friendly and co-operative. Environment of the hospital is too good. I highly recommend this hospital with any kind of pain and all condition. Please visit this hospital for best recovery. Thank you.",
    name: "Jyosna Chauhan",
  },
  {
    review:
      "I highly recommend Synergy Physiotherapy. After months of struggling with debilitating back pain, I finally found relief thanks to expert care at centre. Their thorough examination, accurate diagnosis, and personalized treatment plan were instrumental in my recovery.",
    name: "Narendra Panchal",
  },
  {
    review:
      "My experiance at synergy physiotherapy was just too good Dr Hardik is an excellent doctor He explained to me about the treatment i needed so well that i was convinced that I shoud take the treatment and I am so glad that i did so Dr Yashvi my treating therapist is just too good she gave me all the treatment with such love care and pations The machines used hete are the latest vertion like the lasor tense thread mill and many more ate just excellent I am very happy that itook the treatment The support staff also are very good Thankyou team synergy",
    name: "Mehjabeen Ali",
  },
];

export const Testimonials = () => {
  const swiperRef = useRef(null);
  const isInView = useInView(swiperRef, { once: true, amount: 0.2 });
  return (
    <Container className="pt-20 pb-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{
          opacity: isInView ? 1 : 0, // Fade in when in view
          y: isInView ? 0 : 50, // Slide up when in view
        }}
        transition={{ duration: 1.1 }} // Smooth transition
        className="myContainer h-full  w-full"
      >
        <div className="space-y-1 text-center">
          <p className="font-serif-light text-3xl md:text-[46px] leading-none mb-3">
            {"Real People. Real Results"}
          </p>
          <p>{"More than 100 five-star reviews on Google"}</p>
          <p className="font-semibold">{"4.9 Average Rating"}</p>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div>
            <CircleChevronLeft
              strokeWidth={1}
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="size-8 lg:size-14 md:size-12 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:text-primary-blue"
            />
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            navigation={false}
            autoplay={false}
            loop={true}
            effect={"fade"}
            speed={500}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div>
            <CircleChevronRight
              strokeWidth={1}
              onClick={() => swiperRef.current.swiper.slideNext()}
              className=" size-8 lg:size-14 md:size-12 text-primary-blue cursor-pointer transition-all duration-300 transform hover:scale-110 hover:text-primary-blue"
            />
          </div>
        </div>
      </motion.div>
      <div className="mt-12">
        <a
          target="_blank"
          href={
            "https://www.google.com/search?sca_esv=ccffd9c45e00e758&sxsrf=AHTn8zpLTKXNbMbBt94LRaguFdFGZZ_HxA:1743675253844&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzUn6ibY-OLGoKz7Zjfdd9Oqw4utWTSTM5cML9kn4dISOqiros3nJEguw_nI312AvWIP2GBwtj7DDQ4HU2mCmdtiio_Ad9O5VRW-dnvmazPAPZilnEacAFrWwempBBYurohD4-amzIFJN8vZIuHc37Sq3BoSA&q=Synergy+Physiotherapy+Hospital+and+Rehabilitation+Care+Vadodara+Reviews&sa=X&ved=2ahUKEwiZq-_A0LuMAxXld_UHHduLK2sQ0bkNegQIKRAD&cshid=1743675264191333&biw=1912&bih=920&dpr=1"
          }
          className="text-primary-blue border border-primary-blue py-3 px-6 hover:bg-primary-blue hover:text-white transition-colors duration-200 ease-in-out rounded-full"
        >
          View All Reviews
        </a>
      </div>
    </Container>
  );
};
