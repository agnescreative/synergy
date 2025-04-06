import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container.jsx";

export const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  return (
    <Container
      className={
        "bg-white w-full flex justify-center items-center py-10 sm:py-14 md:py-20 xl:py-28"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{
          opacity: isInView ? 1 : 0, // Fade in when in view
          y: isInView ? 0 : 50, // Slide up when in view
        }}
        transition={{ duration: 1 }} // Smooth transition
        className={"myContainer space-y-4"}
      >
        <h3
          ref={ref} // Set the ref for useInView
          className={
            "font-serif font-medium text-2xl sm:text-5xl md:text-6xl lg:text-6xl text-primary-blue md:leading-snug"
          }
        >
          When it comes to Physiotherapy & Rehabilitation
        </h3>
        <p className="font-serif-light text-2xl md:text-3xl lg:text-5xl text-black md:leading-snug">
          Synergy stands unmatched where{" "}
          <span className="bg-primary-blue text-white py-1 px-2">
            world class care & innovative
          </span>{" "}
          revolutionary therapies unlocks your optimum potential.
        </p>
      </motion.div>
    </Container>
  );
};
