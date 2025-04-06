import { useParams } from "react-router-dom";
import { PageContent } from "../components/PageContent";
import { specializations } from "../constants/specialization";
import NotFound from "./NotFound";
import Container from "../components/Container";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Specialization = () => {
  const { slug } = useParams();
  const specialization = specializations.find((spec) => spec.slug === slug);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });
  const facilitiesOne = specialization?.facilities?.slice(0, 2);
  const facilitiesTwo = specialization?.facilities?.slice(2);
  if (!specialization) {
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
      <PageContent {...specialization.pageContentData} />
      <Container className="flex justify-center">
        <div className={"myContainer my-24 md:my-16 space-y-12 lg:space-y-20"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialization.whyUs.map((item, index) => (
              <div
                key={index}
                className={
                  "relative px-6 py-3 flex w-full justify-between max-w-2xl bg-white rounded-2xl border border-gray-200 shadow min-h-[160px]"
                }
              >
                {/* Blue bar should stick to the left edge of the parent */}
                <div className="absolute top-1/2 left-0 w-[6px] h-[70%] bg-primary-blue transform -translate-y-1/2" />

                <div className={"py-8 w-full"}>
                  <div
                    className={
                      "flex flex-col items-center xl:items-start xl:flex-row xl:space-x-7 space-y-6 xl:space-y-0"
                    }
                  >
                    <div className={"xl:max-w-[90%] space-y-2"}>
                      <p className={"text-center xl:text-left text-[#444]"}>
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    className={
                      "text-primary-blue font-serif text-2xl items-start text-center xl:text-left"
                    }
                  >
                    {`0${index + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={" overflow-hidden"}>
            <div
              className={`container mx-auto flex  flex-col w-full ${
                specialization.image
                  ? "justify-between lg:flex-row-reverse"
                  : "justify-start"
              } items-center lg:items-start space-y-12 lg:space-y-0`}
            >
              {specialization.image && (
                <div>
                  <img
                    src={specialization.image}
                    alt={"vision-img"}
                    className="rounded-2xl w-full max-w-[550px] h-auto object-cover"
                  />
                </div>
              )}
              <div className={" space-y-8"}>
                <p className="font-serif text-5xl text-black">
                  Our Rehab Process
                </p>
                <div>
                  <MarkdownRenderer>{specialization.process}</MarkdownRenderer>
                </div>
              </div>
            </div>
          </div>
          {specialization.facilities &&
            specialization.facilities.length > 0 && (
              <div
                className={`grid grid-cols-1 lg:grid-cols-${
                  specialization.facilities.length > 2 ? 2 : 1
                } gap-8`}
              >
                <div className="space-y-8">
                  {facilitiesOne.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 shadow rounded-3xl p-12 space-y-3"
                    >
                      <p className="font-serif text-5xl">{item.name}</p>
                      <div className="space-y-1">
                        <MarkdownRenderer>{item.content}</MarkdownRenderer>
                      </div>
                    </div>
                  ))}
                </div>
                {facilitiesTwo.length > 0 &&
                  facilitiesTwo.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 shadow rounded-3xl p-12 space-y-3"
                    >
                      <p className="font-serif text-5xl">{item.name}</p>
                      <div className="space-y-1">
                        <MarkdownRenderer>{item.content}</MarkdownRenderer>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          {specialization.conditions &&
            specialization.conditions.length > 0 && (
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
                  {specialization.conditions.map((item, index) => (
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
        </div>
      </Container>
    </>
  );
};

export default Specialization;
