import { PageContent } from "../components/PageContent.jsx";
import Container from "../components/Container.jsx";
import { motion } from "framer-motion";

const pageContentData = {
  name: "Ergonomics",
  title: "What is Ergonomics?",
  description:
    "Ergonomics is like the science of using our bodies in the right way. It's about moving in a way that doesn't stress or strain the spine, knees, and other body parts.\n" +
    "When we get a new car or phone, we get a manual to show us how to use it properly. Sadly, our bodies don't come with a built-in 'User Manual.' So, we often use our bodies in a way that can cause discomfort, like neck pain, back pain, sciatica, or knee pain.\n" +
    "Synergy Physiotherapy's Ergonomics Workshop is like a 'User Manual' for your body. It teaches the best postures for your neck, back, and knees. It shows you the right way to sit, stand, work, sleep, drive, and even do daily activities like lifting or pushing. This way, you can prevent common problems like neck pain, low back pain, knee pain, and other aches and pains. Join us and learn how to use your body optimally!",
  imagePath: "/assets/ergonomics_banner.png",
};

export const Ergonomics = () => {
  return (
    <>
      <PageContent {...pageContentData} />
      <Container className={"flex justify-center py-12"}>
        <div className={"myContainer"}>
          <div className={" overflow-hidden"}>
            <div
              className={
                "container mx-auto flex  flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/ergonomics/1.png"}
                  alt={"vision-img"}
                  className="w-full max-w-[550px] object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-16"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Welcome to the Ergonomics
                  </p>
                  <p
                    className={
                      "font-serif-light font-semibold text-xl xl:text-2xl  tracking-wider"
                    }
                  >
                    Workshop by Synergy Physiotherapy!
                  </p>
                  <p className="text-justify">
                    Our Ergonomics Workshop is a creation of Synergy
                    Physiotherapy, a trailblazer in the field of Ergonomics in
                    India. We conduct this workshop regularly for all patients
                    facing Back, Neck, and Knee problems. By following just half
                    of the recommendations from the workshop, individuals can
                    free themselves from the burden of back and neck pain
                    indefinitely.
                  </p>
                  <p className="text-justify">
                    Synergy Physiotherapy serves as Ergonomic Consultants for
                    several Multinational Companies in India. The Ergonomics
                    Workshop is our effort to combat Work/Computer-Related
                    Injuries and Repetitive Stress Injuries. Beyond addressing
                    physical discomfort, this workshop has a positive impact on
                    work efficiency and productivity, contributing to the
                    overall growth of both individuals and organizations. Join
                    us at Synergy Physiotherapy for a workshop that goes beyond
                    just relieving pain; it&#39;s about fostering a healthier
                    and more productive work environment.
                  </p>
                  <div className={""}>
                    <p
                      className={
                        "font-serif-light font-semibold text-2xl xl:text-3xl  tracking-wider"
                      }
                    >
                      Who can join?
                    </p>
                    <p className="text-justify">
                      Anyone and everyone is welcome! Whether you&#39;re a
                      student, teacher, IT professional, housewife, chartered
                      accountant, banker, office worker, dentist, surgeon,
                      laborer, police officer, diamond merchant, or anyone else
                      with a sedentary or active lifestyle, it&#39;s crucial for
                      you to gain knowledge in Ergonomics. The Ergonomics
                      Workshop is open to anyone aged 7 and above.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
