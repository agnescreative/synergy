import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container.jsx";

export const OurVisionAndMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Container>
      <div className={" flex justify-center"} id={"vision-mission"}>
        <div className={"myContainer my-24 md:my-16 flex justify-center"}>
          <div className={" overflow-hidden"} ref={ref}>
            <div
              className={
                "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Initial state
                animate={{
                  opacity: isInView ? 1 : 0, // Fade in when in view
                  x: isInView ? 0 : -50, // Slide up when in view
                }}
                transition={{ duration: 1.1 }} // Smooth transition
              >
                <img
                  src={"/assets/our_vision.png"}
                  className="w-full max-w-[550px] rounded-2xl h-auto object-cover"
                  alt={"vision-img"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }} // Initial state
                animate={{
                  opacity: isInView ? 1 : 0, // Fade in when in view
                  x: isInView ? 0 : 50, // Slide up when in view
                }}
                transition={{ duration: 1.1 }} // Smooth transition
                className={"lg:w-1/2 mx-auto space-y-8"}
              >
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Our Vision
                  </p>
                  <p className={"text-base text-justify"}>
                    To give a nobel place to physiotherapy in the form of
                    scientific excercise medicine and innovation.
                  </p>
                  <p className="text-base text-justify">
                    We want people to enjoy their recovery journey. Conventional
                    physiotherapy combined with advanced technology that will
                    result in extraordinary results.
                  </p>
                  <p className="text-base text-justify">
                    Our aim is to reach every landing place to provide grand
                    infrastructure where patients feel fresh air, quality food,
                    motivational surrounding. Where patients feel mentally so
                    relaxed and free that only one task is left for them is to
                    achieve their recovery and become independent.
                  </p>
                </div>

                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Our Mission
                  </p>
                  <p className={"text-base text-justify"}>
                    Synergy Physiotherapy Hospital & Rehabilitaion care is most
                    trusted carter in the field of excercises, fitness, pain
                    relief and rehabilitation across Vadodara, India and world
                    wide.
                  </p>
                  <p className="text-base text-justify">
                    Our mission is to become everyone&apos;s first choice for
                    the physiotherapy treatment. Along with various
                    physiotherapy treatment, we provide optimum services related
                    to nursing care, caretaker services, cultural & live food,
                    weekly physician&apos;s visit to make recovery obstacle free
                    with minimal health issues.
                  </p>
                  <p className="text-base text-justify">
                    Our 3 layer monitoring system makes our treatment execution
                    accurate.
                  </p>
                  <p className="text-base text-justify">
                    In period of very short time, Synergy became everyone&apos;s
                    first choice for physiotherapy and rehabilitation.
                  </p>
                  <p className="text-base text-justify">
                    We keep upgrading at fixed intervals to make progression
                    visual and dramatic.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
