import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container.jsx";

export const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  return (
    <Container
      className={
        "bg-white w-full flex justify-center items-center py-10 sm:py-14 md:py-20 lg:py-24"
      }
    >
      <div ref={ref} className={"myContainer space-y-4"}>
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{
            opacity: isInView ? 1 : 0, // Fade in when in view
            y: isInView ? 0 : 50, // Slide up when in view
          }}
          transition={{ duration: 1 }} // Smooth transition
          className="font-serif-light text-2xl md:text-3xl lg:text-5xl text-black leading-tight lg:leading-snug text-justify"
        >
          When it comes to Physiotherapy & Rehabilitation Synergy stands
          unmatched where{" "}
          <span className="bg-primary-blue text-white py-1 px-2">
            world class care & innovative revolutionary therapies
          </span>{" "}
          unlocks your optimum potential.
        </motion.p>
      </div>
    </Container>
  );
};
