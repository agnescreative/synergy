import Container from "../components/Container";
import { PageContent } from "../components/PageContent";
import { motion } from "framer-motion";

const Careers = () => {
  const pageContentData = {
    name: "Careers",
    title: "Leading Innovation in Recovery and Care",
    description:
      "At Synergy Physiotherapy, we specialize in blending advanced technology with expert care to deliver exceptional physiotherapy solutions. Our state-of-the-art treatments, rooted in precision and innovation, are designed to empower patients worldwide to achieve their health and wellness goals. With a focus on personalized care and cutting-edge techniques, we are redefining recovery and rehabilitation for a healthier tomorrow.\n",
    imagePath: "/assets/Careers_Banner.png",
  };

  const items = [
    {
      title: "Our Work Environment and Principles",
      description:
        "At Synergy Physiotherapy, we cultivate a welcoming and inclusive workplace, placing importance on integrity, collaboration, and compassion. Fostering a culture that promotes teamwork, respect, and ongoing enhancement, our team members are empowered to deliver outstanding care, making a positive difference in the lives of patients and their communities.",
    },
    {
      title: "Ongoing Learning at Synergy Physiotherapy",
      description:
        "At Synergy Physiotherapy, we encourage continuous education. We offer our team members access to various learning opportunities to boost their professional growth and take their careers to the next level.",
    },
    {
      title: "Effective Leadership and Management",
      description:
        "Synergy Physiotherapy stands out for its robust leadership and management, marked by visionary direction, decisive decision-making, and a dedication to nurturing the development and triumph of our team members.",
    },
    {
      title: "Enjoyable Workplace at Synergy Physiotherapy",
      description:
        "At Synergy Physiotherapy, we create a lively and interactive work setting where fun and laughter flourish. This cultivates a sense of joy and camaraderie among team members, all while maintaining our commitment to delivering excellent healthcare services.",
    },
    {
      title: "Cutting-Edge Technologies at Synergy Physiotherapy",
      description:
        "Synergy Physiotherapy leads the way in adopting the world's best technologies. These advancements empower our team to provide unmatched healthcare services and set new standards in the field of Physiotherapy through inventive solutions.",
    },
    {
      title: "Opportunities to Grow at Synergy Physiotherapy",
      description:
        "Synergy Physiotherapy provides ample opportunities for growth, enabling individuals to reach new heights in their careers.",
    },
  ];
  return (
    <>
      <PageContent {...pageContentData} />

      <Container className="flex justify-center items-center py-12">
        <div className="myContainer flex flex-col justify-center items-center space-y-20">
          <div className="overflow-hidden">
            <div className="container  grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-start gap-y-8 md:gap-x-8 ">
              <motion.div className="col-span-1">
                <img
                  src="/assets/careers.jpg"
                  alt="vision-img"
                  className="w-full h-auto max-w-[550px] rounded-2xl"
                />
              </motion.div>
              <motion.div className="md:col-span-2 space-y-8">
                <div className="flex flex-col items-start space-y-3">
                  <p className="font-serif-light font-semibold text-3xl xl:text-4xl tracking-wider">
                    Are you a dedicated Physiotherapist ?
                  </p>
                  <div className="2xl:text-lg 2xl:max-w-[90%]">
                    <p>
                      If yes, then come aboard, and your journey will be nothing
                      short of rewarding!
                    </p>
                    <p className="text-justify">
                      Synergy Physiotherapy is a leading global network of
                      advanced Physiotherapy, Fitness, and Rehabilitation
                      centers. We are deeply passionate about our work, and when
                      you join our team, you become an integral part of our
                      mission to positively impact the lives of countless
                      individuals worldwide.
                    </p>
                    <p className="text-justify">
                      We believe in unlocking and nurturing the inner potential
                      of our team members. We don&apos;t settle for the
                      ordinary; instead, we challenge ourselves to exceed
                      expectations. In our result-driven environment, our team
                      is passionate, inquisitive, and unstoppable. If you seek
                      career growth opportunities in our field, possess a desire
                      to learn on the job, and crave a lively work atmosphere,
                      then this is the ideal place for you. Our team is the
                      heartbeat of our organization. By joining us, you&aposll
                      play a role in something truly meaningful - &quot;Devotion
                      to making a real difference in people&apos;s lives by
                      aiding them in achieving faster recovery and function -
                      thereby advancing human movement and ability.&quot;
                    </p>
                  </div>
                  <div>
                    <p className="font-serif-light text-xl md:text-2xl text-black p-4 border-2 border-primary-blue rounded-2xl text-center">
                      Share your resume on{" "}
                      <a
                        target="_blank"
                        className="font-serif "
                        href="mailto:careers@synergyphysiocare.com"
                      >
                        careers@synergyphysiocare.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="space-y-8">
            <p className="font-serif text-2xl md:text-5xl">
              Why work with Synergy Physiotherapy?
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

export default Careers;
