import Container from "../components/Container";
import { PageContent } from "../components/PageContent";
import { motion } from "framer-motion";
const Robotics = () => {
  const pageContentData = {
    name: "Robotics",
    title: "World's Leading, Robotic Neuro Rehabilitation Treatment",
    imagePath: "/assets/robotics_banner.png",
  };
  return (
    <>
      <PageContent {...pageContentData} />
      <Container className="">
        <div className="flex justify-center">
          <div
            className={
              "myContainer my-24 md:my-16 flex flex-col justify-center"
            }
          >
            <div>
              <div
                className={
                  "container mx-auto flex flex-col lg:flex-row w-full justify-between items-center lg:items-start h-full"
                }
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial state
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }} // Smooth transition
                >
                  <div className="space-y-8">
                    <h1 className="font-serif text-4xl">
                      Transforming recovery with cutting edge techniques
                    </h1>
                    <div className="space-y-4">
                      <div>
                        <p className="font-serif text-xl">
                          What is walkbot walking robot?
                        </p>
                        <p>
                          Walkbot is a robot assisted gait training system for
                          walking in dependent patients. It has Intensive
                          training which includes basic mode, interactive mode
                          and resistive mode. Task specific rehabilitation which
                          works on feedback therapy. Inclusion of Front camera,
                          3D games, Metronome, kicking a ball which stimulates
                          visual, auditory and tactile senses.
                        </p>
                      </div>
                      <div>
                        <p className="font-serif text-xl">
                          Who can get benefit?
                        </p>
                        <p>
                          Patients who cannot walk at all or having difficulties
                          in normal walking pattern after any neurological or
                          orthopaedic condition e.g. paraplegia due to traumatic
                          spinal cord injury, GBS, Transverse Myelitis, Multiple
                          sclerosis, stroke, Parkinson&apos;s disease
                        </p>
                      </div>
                      <div>
                        <p className="font-serif text-xl">
                          What is the effectiveness?
                        </p>
                        <p>
                          Patient learns movements as its based-on
                          neuroplasticity, walkbot provides about 1000 steps in
                          single session. More the repetitions better the
                          recovery. With an optimum intensive movement of hip,
                          knee and ankle, utilizing every walking muscle along
                          with Transference and Interference training, Patient
                          develops muscle strength in order to become
                          functional.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Robotics;
