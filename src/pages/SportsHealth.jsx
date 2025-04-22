import { PageContent } from "../components/PageContent";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Container from "../components/Container";
const SportsHealth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });
  const pageContentData = {
    name: "Sports Health",
    title: "Recover Fast, Perform Strong: Sports Rehabilitation That Restores Your Edge",
    imagePath: "/assets/specializations/sports.png",
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
                >
                  <div className="sticky top-20 self-start">
                    <img
                      src={"/assets/specializations/sports-health.png"} // Updated image path
                      alt={"Sports Health"}
                      className="w-full object-cover" // Added some styling
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial state
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }} // Smooth transition
                  className={"lg:w-1/2 mx-auto"}
                >
                  <div
                    className={
                      "flex flex-col items-start space-y-3 lg:space-y-3"
                    }
                  >
                    <MarkdownRenderer>
                      {`

Getting sidelined by an injury can be frustrating for any athlete. At Synergy Physiotherapy Hospital and Rehabilitation Care, our dedicated team of sports rehabilitation specialists understands the importance of getting you back in the game quickly and safely. We offer personalized treatment plans designed to not only heal your injury but also optimize your performance and prevent future setbacks.

Our team is comprised of physiotherapists with extensive experience working with athletes of all levels. We understand the demands of various sports and the specific types of injuries commonly encountered. Following a thorough assessment to pinpoint the cause of your injury, we'll create a personalized treatment plan that may include :

- **Pain Management:** We utilize various modalities like ice therapy, electrical stimulation, and anti-inflammatory medications to manage pain and inflammation in the injured area.

- **Manual therapy:** Our therapists use specialized techniques to improve mobility, reduce stiffness, and promote healing in soft tissues and joints.

- **Therapeutic exercises:** A personalized exercise program will target the muscles crucial for your sport, focusing on strengthening, flexibility, and balance training. This helps regain optimal function and prevent future injuries.

- **Functional movement training:** As you progress, we'll incorporate exercises that mimic the specific movements required in your sport, ensuring a safe and smooth transition back to training and competition.

- **Preventative strategies:** Our therapists will provide guidance on injury prevention techniques, proper training methods, and recovery strategies to keep you performing at your best.

Communication is key to a successful recovery. We work closely with you, your coach, and other healthcare professionals involved in your care to ensure a coordinated approach to your rehabilitation.

Don't let an injury sideline you for longer than necessary. At Synergy Physiotherapy, we are committed to helping you achieve a speedy recovery and reach your full athletic potential. Contact Synergy Physiotherapy Hospital and Rehabilitation Care today. Let our team create a personalized plan to get you back on the field, court, or track stronger and more confident than ever before.

# Synergy Treatment Strategy

Introducing the HUBER® 360 from France - The ultimate Sports Rehabilitation solution for getting players back in the Game. This innovative device focuses on training the four fundamentals of movement: posture and balance, flexibility and mobility, resistance and dynamic reinforcement. It can improve Neuromuscular control, Performance, Range of Motion, Co-ordination, Reflexes, and Reaction time. Don't settle for incomplete Sports Rehabilitation - train with the HUBER® 360 at Synergy Physiotherapy Sports Clinic and get Fit for the Game!

`}
                    </MarkdownRenderer>
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
                  "Achilles Tendonitis",
                  "ACL injury (Anterior Cruciate Ligament Injury)",
                  "Acromioclavicular Joint Dislocation",
                  "Ankle Sprain",
                  "Bicipital Tendonitis",
                  "Carpal Tunnel syndrome",
                  "Chondromalacia Patellae",
                  "Complex Regional Pain Syndrome",
                  "De Quervain's Tenosynovitis (Thumb pain)",
                  "Golfers Elbow",
                  "Groin Pain",
                  "Hamstring Strain",
                  "Meniscal injury",
                  "Patellar Dislocation",
                  "PCL injury (Posterior Cruciate Ligament Injury)",
                  "Piriformis Syndrome",
                  "Popliteal Bursitis",
                  "Retrocalcaneal Bursitis",
                  "Rotator Cuff injury",
                  "Runner’s knee",
                  "Shin splint",
                  "Shoulder Dislocation/ Subluxation",
                  "Shoulder Impingement Syndrome",
                  "Slipped disc/ Sciatica",
                  "Tennis Elbow",
                  "Wrist Sprain",
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

export default SportsHealth;
