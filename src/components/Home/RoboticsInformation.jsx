import Container from "../Container.jsx";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const RoboticsInformation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  return (
    <Container
      className={
        "py-4 bg-gradient-to-b from-[#F3F6FD]/20 to-[#EAEAFF] flex justify-center"
      }
    >
      <div
        ref={ref}
        className={
          " myContainer overflow-hidden flex flex-col  lg:flex-row-reverse w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
        }
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Initial state
          animate={{
            opacity: isInView ? 1 : 0, // Fade in when in view
            x: isInView ? 0 : 50, // Slide up when in view
          }}
          transition={{ duration: 1.1 }} // Smooth transition
          className={"w-full flex justify-end"}
        >
          <img
            src={"/assets/robotics.jpg"}
            className={"w-auto h-full rounded-2xl"}
            alt={"about-img"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial state
          animate={{
            opacity: isInView ? 1 : 0, // Fade in when in view
            x: isInView ? 0 : -50, // Slide up when in view
          }}
          transition={{ duration: 1.1 }} // Smooth transition
          className={" "}
        >
          <div className={"flex flex-col items-start space-y-6 lg:space-y-9"}>
            <p className={"font-serif text-[42px] leading-none tracking-wider"}>
              Transforming Recovery with Cutting-Edge Robotic Technology
            </p>
            <div className="lg:w-[90%] text-justify">
              <p>
                At <span className="font-semibold">Synergy Physiotherapy</span>,
                we are pioneering the future of{" "}
                <span className="font-semibold">
                  neurological rehabilitation and orthopedic
                </span>{" "}
                with cutting-edge{" "}
                <span className="font-semibold">robotic-assisted therapy.</span>{" "}
                Our state-of-the-art robotic systems provide{" "}
                <span className="font-semibold">
                  precision-guided treatments
                </span>{" "}
                that enhance recovery, restore mobility, and improve strength
                with greater accuracy and efficiency than traditional therapy.
              </p>
            </div>
          </div>

          <div className={"flex flex-col py-8 lg:py-10 space-y-3 lg:space-y-4"}>
            <p className="font-serif font-medium text-3xl lg:text-4xl">
              Ideal for Patients With:
            </p>
            <div className={"flex space-x-2"}>
              <span className={"size-3 bg-primary-blue rounded-full mt-2"} />
              <div className={"w-[90%] text-justify"}>
                <p className={"text-lg"}>
                  <span className="font-semibold">
                    Neurological Conditions (Stroke, Parkinson&apos;s, Spinal
                    Cord Injuries)
                  </span>{" "}
                  - Restoring lost motor function through targeted therapy.
                </p>
              </div>
            </div>

            <div className={"flex space-x-2"}>
              <span className={"size-3 bg-primary-blue rounded-full mt-2"} />
              <div className={"w-[90%]"}>
                <p className={"text-lg"}>
                  <span className="font-semibold">
                    Orthopedic Rehabilitation (Post-Surgery, Joint Replacement,
                    Sports Injuries)
                  </span>{" "}
                  - Faster healing with advanced motion control.
                </p>
              </div>
            </div>

            <div className={"flex space-x-2"}>
              <span className={"size-3 bg-primary-blue rounded-full mt-2"} />
              <div className={"w-[90%]"}>
                <p className={"text-lg"}>
                  <span className="font-semibold">
                    Chronic Pain & Mobility Issues (Arthritis, Musculoskeletal
                    Disorders)
                  </span>{" "}
                  - Regain strength with low-impact, high-efficiency treatments.
                </p>
              </div>
            </div>
            <div className="space-y-1 text-justify">
              <p className="text-lg">
                Experience the Next generation of Robotic Assisted physiotherapy
                and Rehabilitation at Synergy, which offers faster, safer, and
                more effective recovery.
              </p>
              <p className="text-lg">
                Discover how Synergy Physiotherapy Hospital and Rehabilitation
                care can help you move better, feel stronger and live pain free
              </p>
            </div>
          </div>

          <div className={"flex justify-center lg:justify-start"}>
            <Link to="/robotics">
              <button
                className={
                  "bg-primary-blue hover:opacity-90 transition-opacity rounded-full text-white py-3 px-9 uppercase"
                }
              >
                Learn More about Robotics
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
