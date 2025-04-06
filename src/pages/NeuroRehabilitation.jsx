import { useRef } from "react";
import Container from "../components/Container";
import { PageContent } from "../components/PageContent";
import { motion, useInView } from "framer-motion";
const NeuroRehabilitation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });

  const pageContentData = {
    name: "Neuro Rehabilitation",
    title: "World's Leading, Robotic Neuro Rehabilitation Treatment",
    imagePath: "/assets/specializations/neuro-rehabilitation.png",
  };
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
  const content = [
    {
      heading:
        "Neurological Challenges : Unleashing the Power of Neuroplasticity",
      content:
        "Neurological diseases or injuries can impact various parts of the brain and nervous system, resulting in diverse movement changes and functional challenges. This can include paralysis, reduced control of movements, tonal abnormalities, issues with cognition, speech difficulties, and more.",
    },
    {
      heading: "Global Impact of Neurological Diseases",
      content:
        "Neurological diseases are a leading cause of Disability Adjusted Life Years (DALYs) worldwide, affecting people of all ages. Common causes include Stroke, Traumatic Brain Injury, and Spinal Cord Injury, with Stroke being a major contributor.",
    },
    {
      heading: "Hope through Neuroplasticity",
      content:
        "Recovery remains possible at any stage after neurological injury or disease, thanks to the miraculous property of Neuroplasticity. This refers to the ability of the nervous system to reorganize itself in response to stimuli, aiding in recovery from injuries such as stroke or traumatic brain injury.",
    },
    {
      heading: "Synergy's Approach: Harnessing Neuroplasticity for Recovery",
      content:
        "At Synergy Physiotherapy, our Neuro Rehabilitation focuses on maximizing Neuroplasticity. Through a combination of Robotics and Hands-on Rehab, we aim to rewire the nervous system, facilitating the re-learning of movements and enhancing the recovery process.",
    },
    {
      heading: "Individualized Neurological Rehabilitation",
      content:
        "Our Neurological Rehabilitation program is personalized and supervised by physiotherapists. It is designed for individuals with nervous system disorders or injuries, aiming to retrain movements, improve function, and enhance overall well-being.",
    },
    {
      heading: "World-Class Neuro Rehabilitation Setup",
      content:
        "Synergy Physiotherapy boasts being the world's finest and Asia's largest advanced Neuro Rehabilitation setup. Our Ability Clinic, a pioneer in India, utilizes cutting-edge technologies like robotics to accelerate recovery in patients with neurological conditions.",
    },
    {
      heading: "Critical Early Phase for Recovery",
      content:
        "The first 3-6 months post neurological insult are crucial for recovery and determine the extent of improvement. Unfortunately, many patients globally choose to go home without further rehabilitation, slowing down recovery. Opting for intensive neurorehabilitation can significantly speed up recovery, reducing overall recovery time and extent of disability.",
    },
  ];
  return (
    <>
      <PageContent {...pageContentData} />
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
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial state
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }} // Smooth transition
                  className={"space-y-12"}
                >
                  <div className="space-y-4">
                    {content.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <p className="font-serif text-xl">{item.heading}</p>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-4xl">Our Rehab Process</p>
                    <p>
                      At Synergy Physiotherapy Ability Clinic, we believe in a
                      personalized and comprehensive approach to Neuro
                      Rehabilitation. Our tailored programs have clear
                      short-term and long-term goals, focusing on improving our
                      patients&apos; abilities to make them as independent as
                      possible. Our dedicated team includes Neurologists, Neuro
                      Physiotherapists, Speech Therapists, Occupational
                      Therapists, Psychologists, and Special Educators. Working
                      together, we strive to achieve the best outcomes for our
                      patients. If you aim to regain your ability to walk, yes,
                      we can assist you!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
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
                {[
                  "Arnold Chiari Malformation",
                  "Ataxia",
                  "Attention Deficit Hyperactivity Disorder (ADHD)",
                  "Autism",
                  "Bell's Palsy",
                  "Brain Stroke",
                  "Cerebellar Ataxia",
                  "Cerebral Palsy",
                  "Paralysis",
                  "Complex Regional Pain Disorder",
                  "Delayed Milestones",
                  "Encephalopathy",
                  "Neuropathies",
                  "Epilepsy and Seizure Disorders",
                  "GBS (Gullain Barre’ Syndrome)",
                  "Hydrocephalus",
                  "Myopathies",
                  "Motor Neuron Disease (MND)",
                  "Multiple Sclerosis",
                  "Muscular Dystrophy",
                  "Myasthenia Gravis",
                  "Nerve Injuries",
                  "Parkinsonism",
                  "Post Polio Disorder",
                  "Spina Bifida",
                  "Spinal Cord Injury",
                  "Transverse Myelitis",
                  "Traumatic Brain Injury (Head Injury)",
                  "Trigeminal Neuralgia",
                ].map((item, index) => (
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default NeuroRehabilitation;
