import { useState } from "react";
import Container from "../components/Container";
import { PageContent } from "../components/PageContent";
import { AnimatePresence, motion } from "framer-motion";
const FrozenShoulder = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const PageContentData = {
    name: "Frozen Shoulder",
    title:
      "Take on every responsibility with confidence, free from the burden of shoulder pain!",
    imagePath: "/assets/frozen_shoulder.png",
  };
  const condition = [
    "Acromioclavicular Joint Arthritis",
    "Post Fracture or Post-Surgery Shoulder Stiffness",
    "Acromioclavicular Joint Dislocation",
    "Rotator Cuff Injuries (Sports Injuries)",
    "Shoulder Arthrosis",
    "Rotator Cuff Tears",
    "Acromioclavicular Joint Disorders",
    "Shoulder Dislocation/Subluxation",
    "Frozen Shoulder/ Adhesive Capsulitis",
    "Shoulder Impingement Syndrome (Painful Arc Syndrome)",
    "Shoulder Pain",
    "Sports Injuries",
    "Impingement Syndrome & Tendonitis",
    "Supraspinatus Tendinopathy",
  ];

  const faqData = [
    {
      id: 1,
      question: "What is frozen shoulder?",
      answer:
        "Frozen shoulder, also known as adhesive capsulitis, is a condition characterized by pain and stiffness in the shoulder joint. It occurs when the capsule surrounding the shoulder becomes inflamed, leading to restricted movement. The condition progresses through three stages: freezing (painful), frozen (stiffness), and thawing (recovery).",
    },
    {
      id: 2,
      question: "What are the symptoms of a frozen shoulder?",
      answer:
        "The primary symptoms include persistent pain in the shoulder, often worse at night, and stiffness that limits shoulder movement, making daily activities difficult.",
    },
    {
      id: 3,
      question: "How is frozen shoulder treated?",
      answer:
        "Treatment focuses on pain relief and restoring mobility. Options include pain management with medications (e.g., NSAIDs or corticosteroid injections), physiotherapy, including stretching, strengthening exercises, and modalities like heat or ice therapy. In severe cases, surgery may be considered if non-surgical treatments fail.",
    },
    {
      id: 4,
      question: "How can physiotherapy help with frozen shoulder?",
      answer:
        "Physiotherapy plays a crucial role in recovery by providing tailored stretching and strengthening exercises to restore motion, using techniques like heat application, ultrasound, or electrical stimulation for pain relief, and guiding safe progression through each stage of recovery to avoid aggravating the condition.",
    },
    {
      id: 5,
      question: "Can I treat frozen shoulder at home?",
      answer:
        "Yes, self-management strategies include performing prescribed exercises regularly to maintain mobility, applying heat packs for pain relief, and avoiding strenuous or unapproved exercises that could worsen the condition.",
    },
    {
      id: 6,
      question: "How long does it take to recover from a frozen shoulder?",
      answer:
        "Recovery can take months to years depending on the severity and treatment adherence. Physiotherapy can significantly speed up recovery time when combined with other treatments.",
    },
    {
      id: 7,
      question: "When should I consult a doctor or physiotherapist?",
      answer:
        "Seek professional advice if shoulder pain and stiffness persist or worsen over time, or if pain severely limits your daily activities or sleep.",
    },
  ];
  return (
    <>
      <PageContent {...PageContentData} />
      <Container>
        <div className={" flex justify-center"}>
          <div
            className={
              "myContainer my-24 md:my-16 flex flex-col space-y-36 justify-center"
            }
          >
            <div className={" overflow-hidden"}>
              <div
                className={
                  "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
                }
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }} // Initial state
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }} // Smooth transition
                >
                  <img src={"/assets/ourvision.png"} alt={"vision-img"} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial state
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }} // Smooth transition
                  className={"lg:w-1/2 mx-auto space-y-8"}
                >
                  <div
                    className={
                      "flex flex-col items-start space-y-3 lg:space-y-3"
                    }
                  >
                    <p
                      className={
                        "font-serif font-medium text-xl md:text-2xl  tracking-wider"
                      }
                    >
                      Regain Your Freedom: Effective Solutions for Frozen
                      Shoulder at Synergy Physiotherapy
                    </p>
                    <p className={"text-base"}>
                      Frozen shoulder, also known as adhesive capsulitis, can
                      cause significant pain and stiffness in your shoulder
                      joint, making even basic activities difficult. At Synergy
                      Physiotherapy Hospital and Rehabilitation Care, our team
                      of experienced physiotherapists understands the challenges
                      frozen shoulder presents and offers effective treatment
                      options to help you regain pain-free movement.
                    </p>
                    <div className="space-y-1">
                      <p className="text-base">
                        Our approach to frozen shoulder treatment focuses on a
                        three-pronged strategy: pain management, improved
                        flexibility, and restored range of motion. We utilize
                        various techniques to achieve these goals, including :
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Manual therapy: </span>
                        Our physiotherapists use gentle hands-on techniques to
                        improve mobility and reduce stiffness in your shoulder
                        joint.
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">
                          Therapeutic exercises:{" "}
                        </span>
                        A personalized exercise program will be designed to
                        progressively stretch and strengthen the muscles
                        surrounding your shoulder, promoting better flexibility
                        and range of motion.
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Modalities: </span>
                        We may incorporate modalities such as heat therapy,
                        ultrasound, or electrical stimulation to manage pain and
                        inflammation in your shoulder.
                      </p>
                    </div>
                    <p>
                      We have germen technology induced shockwave therapy which
                      work on soft tissues and muscles that will limit your pain
                      within minutes in order to relieve pain and inflammation
                      and ultimately improve function of your shoulder.
                    </p>
                    <p>
                      Remember, early intervention is the key to manage frozen
                      shoulder effectively. If you&apos;re experiencing shoulder
                      pain and stiffness, contact Synergy Physiotherapy Hospital
                      and Rehabilitation Care today. Our team will conduct a
                      thorough assessment to diagnose your condition and create
                      a personalized treatment plan to get you back to living a
                      pain-free, active life.
                    </p>
                  </div>

                  <div
                    className={
                      "flex flex-col items-start space-y-3 lg:space-y-3"
                    }
                  >
                    <p
                      className={
                        "font-serif font-medium text-xl md:text-3xl lg:text-5xl  tracking-wider"
                      }
                    >
                      Synergy Treatment Strategy
                    </p>
                    <p className={"text-base"}>
                      At Synergy Physiotherapy, we use advanced non-surgical
                      pain relief technologies, mobilization strategies,
                      personalized exercise plans, bio-mechanical corrections,
                      ergonomics, and home exercise programs in our treatment.
                      Our goal is to reduce pain and inflammation, allowing for
                      a complete and pain-free range of shoulder movements in
                      your daily activities.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="space-y-9">
              <p className="font-serif-light text-3xl md:text-4xl  lg:text-5xl">
                Conditions we Treat
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-8">
                {condition.map((item, index) => (
                  <p
                    key={index}
                    className="font-serif-light text-lg md:text-2xl border-b-2 border-b-gray-300 py-4"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <p className="font-serif-light text-3xl md:text-4xl  lg:text-5xl">
                Frequently Asked Questions
              </p>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
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
                          <div className="p-6 text-gray-600 font-sans">
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

export default FrozenShoulder;
