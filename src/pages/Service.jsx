import { useParams } from "react-router-dom";
import { allServices } from "../constants/services";
import { PageContent } from "../components/PageContent";
import Container from "../components/Container";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import MarkdownRenderer from "../components/MarkdownRenderer";
import NotFound from "./NotFound";

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });
  const { slug } = useParams();
  const service = allServices.find((service) => service.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <PageContent {...service.pageContentData} />
      <Container>
        <div className="flex justify-center">
          <div
            className={
              "myContainer my-24 md:my-16 flex flex-col space-y-36 justify-center"
            }
          >
            <div>
              <div
                className={
                  "container mx-auto flex flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0 h-full"
                }
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }}
                  className="h-full"
                >
                  {service.image && <div className="sticky top-20 self-start">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full max-w-[600px] h-auto object-cover rounded-2xl" // Added some styling
                    />
                  </div>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial state
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }} // Smooth transition
                  className={`${service.image && "lg:w-1/2"}  mx-auto`}
                >
                  <div
                    className={
                      "flex flex-col items-start space-y-3 lg:space-y-3"
                    }
                  >
                    <MarkdownRenderer>{service.content}</MarkdownRenderer>
                  </div>
                </motion.div>
              </div>
            </div>
            {service.conditions && service.conditions.length > 0 && (
              <motion.div
                ref={ref}
                className="space-y-9"
                initial="hidden"
                animate={"visible"}
              >
                <motion.p
                  className="font-serif-light text-3xl md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Conditions we Treat
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-y-1 md:gap-y-0 md:gap-x-8"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {service.conditions.map((item, index) => (
                    <motion.p
                      key={index}
                      className="font-serif-light text-lg md:text-2xl border-b-2 border-b-gray-300 py-4"
                      variants={staggerVariants}
                      custom={index}
                    >
                      {item}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            )}
            <div className="space-y-8">
              <p className="font-serif-light text-3xl md:text-4xl  lg:text-5xl">
                Frequently Asked Questions
              </p>
              <div>
                {service.FAQs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={` overflow-hidden transition-all duration-300`}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full p-6 border-b border-gray-400 text-left flex justify-between items-center font-medium text-lg transition-colors duration-300 ${
                        activeIndex === index ? "bg-[#F6F6F6]" : "bg-white"
                      }`}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="font-serif-light font-semibold text-lg">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </motion.span>
                    </button>

                    {/* Answer Content */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          key={`content-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={
                            activeIndex === index ? "bg-[#F6F6F6]" : ""
                          }
                        >
                          <div className="p-6 text-gray-600 font-sans whitespace-pre-wrap">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Service;
