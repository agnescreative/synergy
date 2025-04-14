import Container from "../Container.jsx";
import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutSynergy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  const Counter = ({ from, to, duration = 2 }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true });

    const count = useSpring(from, {
      stiffness: 100,
      damping: 30,
      duration,
    });

    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      if (isInView) {
        count.set(to);
      }
    }, [isInView, to, count]);

    return (
      <motion.span ref={nodeRef}>
        {isInView && <motion.span>{rounded}</motion.span>}
      </motion.span>
    );
  };

  return (
    <Container className={"my-24 md:my-32 flex justify-center"}>
      <div className={"myContainer overflow-hidden"} ref={ref}>
        <div
          // className={
          //   "container mx-auto flex  flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
          // }
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 justify-items-center lg:justify-items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Initial state
            animate={{
              opacity: isInView ? 1 : 0, // Fade in when in view
              x: isInView ? 0 : -50, // Slide up when in view
            }}
            transition={{ duration: 1.1 }} // Smooth transition
            className={"h-full lg:col-span-2"}
          >
            <img
              src={"/assets/aboutsection.png"}
              alt={"about-img"}
              className="h-full w-auto object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Initial state
            animate={{
              opacity: isInView ? 1 : 0, // Fade in when in view
              x: isInView ? 0 : 50, // Slide up when in view
            }}
            transition={{ duration: 1.1 }} // Smooth transition
            className={"w-full justify-items-start lg:col-span-3"}
          >
            <div className={"flex flex-col items-start space-y-6"}>
              <p className={"font-serif text-5xl  tracking-wider"}>About Us</p>
              <div className="space-y-2 text-justify">
                <p className={"text-base"}>
                  Synergy Physiotherapy Hospital and Rehabilitation Care is more
                  than just a treatment center—we are a hub of healing,
                  innovation, and compassionate care. As a leading center of
                  excellence in physiotherapy, pain relief, and movement
                  restoration, we take a patient-first approach to recovery.
                </p>
                <p>
                  Our expert team combines cutting-edge robotic-assisted therapy
                  with advanced physiotherapy techniques and personalized
                  rehabilitation plans to help you regain mobility, relieve
                  pain, and achieve independence. We focus not just on physical
                  recovery but also on your emotional well-being, ensuring
                  holistic healing experience.
                </p>
                <p>
                  At Synergy Physiotherapy, we are committed to providing
                  world-class care that enhances your health, quality of life,
                  and overall well-being. Let us help you move better, feel
                  better, and live better.
                </p>
              </div>
            </div>

            <div className={"flex flex-col py-8 lg:py-10 space-y-4"}>
              <p className="font-serif text-3xl lg:text-4xl font-medium">
                Why Choose Synergy?
              </p>
              <ul className="list-disc space-y-2 pl-4 lg:pl-8 text-base lg:text-lg text-justify">
                <li>
                  <span className="font-semibold">
                    Trusted Experts in Physiotherapy
                  </span>{" "}
                  : Our team of highly skilled professionals brings years of
                  experience in{" "}
                  <span className="font-semibold">
                    orthopedic, neurological, and sports rehabilitation.
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Technology Meets Compassion
                  </span>{" "}
                  :{" "}
                  <span className="font-semibold">
                    We combine state-of-the-art robotic technology
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold">human-centered care</span>,
                  ensuring each patient receives the best treatment possible.
                </li>
                <li>
                  <span className="font-semibold">
                    Personalized Recovery Plans
                  </span>{" "}
                  : No two patients are the same. That&apos;s why we create
                  <span className="font-semibold">
                    tailored rehabilitation programs
                  </span>{" "}
                  that align with your unique needs and recovery goals.
                </li>
                <li>
                  <span className="font-semibold">
                    Proven Results, Faster Healing
                  </span>{" "}
                  : Our{" "}
                  <span className="font-semibold">
                    science-backed, robotics-assisted therapies
                  </span>{" "}
                  optimize movement, speed up recovery, and improve long-term
                  outcomes{" "}
                </li>
              </ul>
            </div>

            <div className={"flex justify-center lg:justify-start"}>
              <Link to={"/about-us"}>
                <button
                  className={
                    "bg-primary-blue hover:opacity-90 transition-opacity rounded-full text-white py-3 px-9 uppercase"
                  }
                >
                  Learn More about Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div
          className={
            "flex flex-col md:flex-row justify-around items-center pt-20 pb-8 xl:pb-8 xl:py-20 space-y-10 md:space-y-0 "
          }
        >
          <div className={"flex flex-col items-center space-y-2"}>
            <p className={"text-primary-blue font-serif text-5xl md:text-7xl"}>
              {" "}
              <Counter from={0} to={40} />
            </p>
            <p className={"text-xl md:text-3xl"}>Incredible experts</p>
          </div>

          <div className="hidden xl:flex absolute left-1/3 h-36 border-l-2 border-dashed border-primary-blue" />

          <div className={"flex flex-col items-center space-y-2"}>
            <p className={"text-primary-blue font-serif text-5xl md:text-7xl"}>
              <Counter from={0} to={12} />+
            </p>
            <p className={"text-xl md:text-3xl"}>total years of experience</p>
          </div>

          <div className="hidden xl:flex absolute right-1/3 h-36 border-l-2 border-dashed border-primary-blue" />

          <div className={"flex flex-col items-center space-y-2"}>
            <p className={"text-primary-blue font-serif text-5xl md:text-7xl"}>
              <Counter from={0} to={2000} />+
            </p>
            <p className={"text-xl md:text-3xl"}>patients helped</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
