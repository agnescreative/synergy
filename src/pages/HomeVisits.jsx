import Container from "../components/Container";
import { PageContent } from "../components/PageContent";
import { motion } from "framer-motion";

const HomeVisits = () => {
  const pageContentData = {
    name: "Home Visits",
    title: "Leading Innovation in Recovery and Care",
    description:
      "At Synergy Physiotherapy, we specialize in blending advanced technology with expert care to deliver exceptional physiotherapy solutions. Our state-of-the-art treatments, rooted in precision and innovation, are designed to empower patients worldwide to achieve their health and wellness goals. With a focus on personalized care and cutting-edge techniques, we are redefining recovery and rehabilitation for a healthier tomorrow.\n",
    imagePath: "/assets/HomeVisits.png",
  };

  const items = [
    {
      title: "Mobility Challenges",
      description:
        "Seniors facing difficulty moving around or leaving their homes can benefit. We also assess homes to prevent falls and enhance safety.",
    },
    {
      title: "Neurological Conditions",
      description:
        "Individuals with conditions like Stroke, Spinal Cord Injury, Multiple Sclerosis, or Traumatic Brain Injury can receive Physiotherapy in a comfortable setting, promoting independence at home.",
    },
    {
      title: "Orthopedic Surgeries",
      description:
        "Post-Orthopedic surgeries, especially after procedures like Total Hip Replacement (THR) or Total Knee Replacement (TKR), as well as Post Fracture Surgery, can benefit from early Physiotherapy at home when mobility is compromised.",
    },
    {
      title: "Extended Hospital Stay",
      description:
        "After a prolonged hospital stay, people may experience significant deconditioning. Home Physiotherapy helps with rehabilitative exercises, leading to a faster recovery and regaining of independence.",
    },
  ];

  return (
    <>
      <PageContent {...pageContentData} />

      <Container className="flex justify-center items-center py-12">
        <div className="myContainer flex flex-col justify-center items-center space-y-20">
          <div className="text-start md:text-center space-y-3">
            <p className="font-serif text-2xl md:text-5xl">Stay Well at Home</p>
            <p className="font-sans lg:text-xl ">
              Welcome to Stay Well at Home, a branch of Synergy Physiotherapy,
              committed to delivering caring and complete health services, such
              as Physiotherapy and Fitness programs, right to your doorstep. Our
              goal is to support individuals in maintaining their well-being and
              staying active within the familiar surroundings of their homes. We
              bring top-notch healthcare services from our center to your home,
              ensuring your health and comfort.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="container">
              <motion.div className="space-y-8">
                <div className="flex flex-col items-start space-y-3">
                  <p className="font-serif-light font-semibold text-3xl xl:text-4xl tracking-wider">
                    Personalized Physiotherapy Care at Your Doorstep
                  </p>
                  <div className="2xl:text-lg 2xl:max-w-[90%]">
                    <p className="text-justify">
                      Experience top-notch physiotherapy from our skilled and
                      friendly team, right in the comfort of your home. Our
                      experts specialize in caring for the elderly, addressing
                      musculoskeletal injuries, orthopedics, post-surgical
                      rehabilitation, respiratory conditions, and neurological
                      issues. No matter the condition, we collaborate closely
                      with our multidisciplinary team to ensure you receive
                      comprehensive and tailored care.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 ">
              <motion.div className="md:col-span-2 space-y-8">
                <div className="flex flex-col items-start space-y-3">
                  <p className="font-serif-light font-semibold text-3xl xl:text-4xl tracking-wider">
                    No Time for the Gym?
                  </p>
                  <div className="2xl:text-lg 2xl:max-w-[90%]">
                    <p className="text-justify">
                      Can&apos;t make it to the gym? No worries! Healthy AT
                      HOME, a part of Synergy Physiotherapy, offers fitness
                      facilities right at your doorstep. Our expert Sports
                      Physiotherapists evaluate your fitness, create a
                      personalized exercise plan, and guide you through each
                      workout in the comfort of your home. We bring mobile
                      fitness kits to make sure you get the best workouts
                      possible.
                    </p>
                    <p className="text-justify">
                      Our services are known for quality and remembered for the
                      care we provide. We collaborate closely with our clients
                      to help them achieve their highest fitness potential,
                      ensuring a healthy and active lifestyle.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-span-1 order-first md:order-last">
                <img
                  src="/assets/gym.png"
                  alt="vision-img"
                  className="w-full h-auto max-w-[550px] rounded-2xl"
                />
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="font-serif text-2xl md:text-5xl">
              Who needs home Physiotherapy and Fitness?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div
                  className="bg-primary-blue text-white p-8 rounded-3xl space-y-4"
                  key={index}
                >
                  <p className="font-serif text-xl lg:text-2xl">{item.title}</p>
                  <p className="font-sans text-lg lg:text-xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeVisits;
