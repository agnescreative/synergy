import Container from "../Container.jsx";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Technologies = () => {
  const ref = useRef(null);
  return (
    <Container>
      <div className={" flex justify-center"} id={"vision-mission"}>
        <div
          className={
            "myContainer my-24 md:my-16 flex flex-col items-center space-y-32"
          }
        >
          <div className={" overflow-hidden"} id={"tecar"} ref={ref}>
            <div
              className={
                "container mx-auto flex  flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/tecar.png"}
                  alt={"vision-img"}
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Tecar
                  </p>
                  <p className="text-justify">
                    The tecar is a radiofrequency diathermy device that
                    generates electromagnetic energy using radio waves to
                    penetrate deep into body’s tissue for tissue repair and pain
                    relief.
                    <br />
                    It features three types of treatment electrodes with 3
                    different sizes, allowing safe and effective treatment of
                    any anatomical region.
                  </p>
                  <p className="text-justify">
                    With its continuous or pulsed emission and scan mode for
                    efficient treatment even in acute phase Tecar also has a
                    built in LED indicator that enhances efficacy and a compact,
                    light weight and portable design for easy use and transport.
                    The device has continuous impedance measurement and feedback
                    ensuring safe use during treatment sessions.
                  </p>
                  <div className={"xl:max-w-[70%] text-justify"}>
                    <p>
                      Overall, the Tecar is an all in one solution for
                      radiofrequency diathermy with a range of feature that make
                      it easy and effective to use.
                    </p>
                    <ul className={"list-disc pl-8"}>
                      <li>Healing Energy</li>
                      <li>Capacitive and resistive</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"shockwave"}>
            <div
              className={
                "container mx-auto flex  flex-col lg:flex-row-reverse w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/shockwave.png"}
                  alt={"vision-img"}
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-8 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Shockwave
                  </p>
                  <p className="text-justify">
                    Fast and permanent relief from pain. Unique, non invasive
                    solution for musculoskeletal pain.Just three to four
                    treatments needed at weekly intervals. A therapy session
                    only takes 10 minutes.
                  </p>
                  <div
                    className={
                      "grid grid-col-1 xl:grid-cols-2 space-y-5 xl:space-y-0 xl:gap-8"
                    }
                  >
                    <ul className={"list-decimal pl-8"}>
                      <li>Field of application</li>
                      <li>Orthopaedics</li>
                      <li>Rehabilitation</li>
                      <li>Sports medicine</li>
                      <li>How shockwave relieves pain?</li>
                      <li>Decrease of muscle tension</li>
                      <li>Inhibition of spasms</li>
                      <li>How shockwave promotes healing?</li>
                      <li>Increase of collagen production</li>
                    </ul>
                    <ul className={"list-decimal pl-8 xl:pl-3"}>
                      <li>Improved metabolism and microcirculation</li>
                      <li>Mobility restoration</li>
                      <li>Dissolving calcified fibroblasts</li>
                      <li>4 in 1 therapies</li>
                      <li>Combined with other physical therapies.</li>
                      <li>Electrotherapy</li>
                      <li>Magneto therapy</li>
                      <li>Laser</li>
                      <li>Ultrasound</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"myomed"}>
            <div
              className={
                "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/myomed.jpg"}
                  className="w-full max-w-[550px] h-auto object-cover rounded-2xl"
                  alt={"vision-img"}
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Myomed
                  </p>
                  <p className="text-justify">
                    Myofeedback involves registering the electrical muscle
                    activity using surface electrodes or cavity electrodes. The
                    myomed ensures that the therapist and patient receive
                    feedback on the results.
                  </p>
                  <p>Patient gets the full idea of his own recovery.</p>
                  <p className="text-justify">
                    At synergy we treat patients of Pain management, muscle
                    weakness, swallowing problem, respiratory disorders,
                    craniomandibular dysfunction, migraine, headache, and stress
                    related disorders, neurological problems to urinary
                    incontinence with the advanced biofeedback technology. This
                    includes myofeedback, pressure feedback, electrotherapy and
                    ultrasound.
                  </p>
                  <p className="text-justify">
                    The feedback is provided visually via the LCD screen that
                    clearly displays the pre set threshold values and the muscle
                    contraction of patient. One may also opt for an acoustic
                    signal that indicates whether or not the patient achieves
                    the selected values. The rough EMG signal is audible via
                    headphones. The therapist does not require any labour
                    intensive supervision, as the myomed safely guides the
                    patient through exercise.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={" overflow-hidden"}
            id={"functional-electrical-stimulation"}
          >
            <div
              className={
                "container mx-auto flex  flex-col lg:flex-row-reverse w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/fes.jpg"}
                  className="w-full max-w-[550px] h-auto object-cover rounded-2xl"
                  alt={"vision-img"}
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-8 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Functional Electrical Stimulation
                  </p>
                  <p className="text-justify">
                    Functional electrical stimulation is a technique to produce
                    functional movements after paralysis. Electrical discharges
                    are applied to a person’s muscles making them contract in a
                    sequence that allows performing tasks such as grasping a
                    key, holding a toothbrush, standing, and walking.
                  </p>
                  <p className="text-justify">
                    At synergy we apply our customized protocol with the help of
                    functional electrical stimulation which increases patient’s
                    ability to stand, walk, reach, and grasp.
                  </p>
                  <p className="text-justify">
                    FES is the most advanced electrical device that has a built
                    in program for training movement patterns in patterns in
                    patients with upper/ lower limb paralysis, stroke and spinal
                    cord injury. Customized patient centric protocols can be
                    developed to train each phase to help them live a normal
                    life with training on basic activities such as holding,
                    releasing, drinking, standing, and walking.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"suspension-frame-walking"}>
            <div
              className={
                "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/suspensionframewalking.png"}
                  alt={"vision-img"}
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Suspension frame walking
                  </p>
                  <p className="text-justify">
                    The suspension frame walking system features an overhead
                    track and harness setup, creating a secure and controlled
                    environment for rehabilitation. By alleviating the fear of
                    falling, it allows patients to focus entirely on improving
                    their gait and balance. This innovative system ensures
                    safety and support, empowering both therapists and patients
                    to work confidently toward recovery goals.
                  </p>
                  <p className="text-justify">
                    Ideal for individuals recovering from neurological,
                    orthopedic, or spinal injuries, the suspension system
                    reduces weight-bearing demands, enabling patients to
                    practice ambulation without undue strain. It promotes proper
                    posture and natural movement patterns, facilitating smoother
                    transitions toward independent mobility.
                  </p>
                  <p className="text-justify">
                    With adjustable harnesses and customizable settings, the
                    suspension frame caters to a wide range of patient needs. It
                    provides therapists the flexibility to guide and monitor
                    progress effectively, making it an essential tool for
                    enhancing gait training, rebuilding confidence, and
                    accelerating recovery.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"tilt-table"}>
            <div
              className={
                "container mx-auto flex  flex-col lg:flex-row-reverse w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/tilt_table.jpg"}
                  alt={"vision-img"}
                  className="w-full max-w-[550px] h-auto rounded-2xl"
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-8 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Tilt table
                  </p>
                  <p className="text-justify">
                    The electric tilt table is a versatile rehabilitation tool
                    designed to promote weight-bearing, improve circulation, and
                    strengthen lower limb muscles. By providing controlled joint
                    approximation, it aids in preventing muscle contractures
                    while enhancing stability and mobility. Ideal for patients
                    recovering from neurological or orthopedic conditions, it
                    fosters a gradual and safe return to upright positioning,
                    ensuring effective and personalized rehabilitation.
                  </p>
                  <p className="text-justify">
                    The tilt table also plays a vital role in improving
                    cardiovascular endurance by stimulating blood flow and
                    reducing the risk of orthostatic hypotension. By gently
                    acclimating the body to an upright posture, it helps restore
                    balance and coordination, making it a valuable tool in the
                    recovery journey for patients with mobility challenges.
                  </p>
                  <p className="text-justify">
                    Designed for comfort and precision, the electric tilt table
                    supports individualized therapy goals. Its adjustable angles
                    and secure strapping ensure safety while allowing therapists
                    to tailor sessions to the patient&#39;s specific needs. This
                    makes it an essential component of modern physiotherapy and
                    rehabilitation programs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={" overflow-hidden"}
            id={"robotic-spinal-decompression-table"}
          >
            <div
              className={
                "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/robotic_spinal.jpg"}
                  alt={"vision-img"}
                  className="w-full max-w-[550px] rounded-2xl h-auto"
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl  tracking-wider"
                    }
                  >
                    Robotic spinal decompression table frame walking
                  </p>
                  <p>
                    Experience relief with the advanced robotic spinal
                    decompression therapy table.
                  </p>
                  <p className="text-justify">
                    Spinal decompression therapy is a nonsurgical spinal
                    treatment using motorized traction therapy to safety and
                    effectively elongate and stretch the spine. Nonsurgical
                    spinal decompression can alleviate tension and pressure from
                    the sensitive spinal discs and nerves, helping to relieve
                    pain and discomfort.
                  </p>
                  <p className="text-justify">
                    With adjustable harnesses and customizable settings, the
                    suspension frame caters to a wide range of patient needs. It
                    provides therapists the flexibility to guide and monitor
                    progress effectively, making it an essential tool for
                    enhancing gait training, rebuilding confidence, and
                    accelerating recovery.
                  </p>
                  <p className="text-justify">
                    Utilizing cutting edge technology, it offers targeted spinal
                    decompression to alleviate pain and discomfort.
                    <br /> The RSD 4D system provides non surgical 3D spinal
                    decompression for condition like herniated disc disease,
                    protruding disc, relieving pain and associated symptoms. It
                    offers separate treatment programs for lumbar and cervical
                    problems.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"laser-therapy"}>
            <div
              className={
                "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/laser.jpg"}
                  alt={"vision-img"}
                  className="w-full max-w-[550px] h-auto object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl tracking-wider"
                    }
                  >
                    Laser Therapy
                  </p>
                  <p className="text-justify">
                    Light Force Deep Tissue Laser Therapy is an advanced,
                    evidence-based solution for effective pain relief. This
                    non-invasive treatment leverages laser technology to target
                    painful muscles and joints, enhancing localized blood flow
                    and promoting recovery.
                  </p>
                  <p className="text-justify">
                    Tailored protocols consider each patient’s unique
                    characteristics — including body type and specific clinical
                    conditions — to deliver optimized results. Detailed settings
                    offer guidance on treatment heads and power levels, helping
                    clinicians treat with confidence and shorten the learning
                    curve.
                  </p>
                  <p className="text-justify">
                    Laser therapy is especially beneficial in post-activity
                    recovery and the treatment of conditions associated with
                    inflammation or restricted mobility. Its ability to address
                    deep tissue discomfort makes it a sensible modality choice
                    in modern rehabilitation.
                  </p>
                  <p className="text-justify">
                    Best suited for:
                    <ul className="list-disc list-inside mt-2">
                      <li>Neck pain</li>
                      <li>Low back pain</li>
                      <li>Sciatica</li>
                      <li>TMJ (Temporomandibular Joint Dysfunction)</li>
                      <li>Elbow and joint pain</li>
                      <li>Arthritis</li>
                    </ul>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"cycle-motus"}>
            <div
              className={
                "container mx-auto flex  flex-col lg:flex-row-reverse w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/cycle_motus.png"}
                  alt={"vision-img"}
                  className="w-full max-w-[550px] h-auto object-cover rounded-2xl "
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl tracking-wider"
                    }
                  >
                    Cycle Motus
                  </p>
                  <p className="text-justify">
                    Cycle Motus is an advanced active and passive training
                    system designed for both upper and lower limbs. It primarily
                    supports patients in a sitting position, promoting motor
                    function rehabilitation through tailored cycling programs.
                  </p>
                  <p className="text-justify">
                    The device engages patients in guided training sessions that
                    alternate between active and passive movement, encouraging
                    participation and progressive muscle reactivation. This
                    dual-mode function enhances therapy outcomes by adapting to
                    the user’s physical capabilities in real time.
                  </p>
                  <p className="text-justify">
                    Equipped with a real-time monitoring and protection system,
                    Cycle Motus includes spasm detection technology that
                    automatically adjusts training modes based on the user’s
                    muscle condition. This ensures a safe and responsive therapy
                    experience.
                  </p>
                  <p className="text-justify">
                    Proven to be highly effective for individuals experiencing:
                    <ul className="list-disc list-inside mt-2">
                      <li>Stiffness</li>
                      <li>Muscle spasms</li>
                      <li>Spasticity</li>
                      <li>Weakness</li>
                      <li>Reduced muscle and joint performance</li>
                    </ul>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={" overflow-hidden"} id={"zepu-sg2"}>
            <div
              className={
                "container mx-auto flex oc flex-col lg:flex-row w-full justify-between items-center lg:items-start space-y-12 lg:space-y-0"
              }
            >
              <motion.div>
                <img
                  src={"/assets/technologies/sg2.jpg"}
                  alt={"vision-img"}
                  className="w-full max-w-[550px] rounded-2xl h-auto"
                />
              </motion.div>
              <motion.div className={"lg:w-1/2 mx-auto space-y-8"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-5xl tracking-wider"
                    }
                  >
                    SG2
                  </p>
                  <p className="text-justify">
                    SG2 is a digital physical and occupational assessment and
                    training system designed to support upper limb
                    rehabilitation through intelligent, customized training
                    programs. Based on individual evaluation results, users can
                    engage in exercises with adjustable time settings and
                    difficulty levels tailored to their specific condition.
                  </p>
                  <p className="text-justify">
                    The system is ideal for individuals with hemiplegia,
                    cognitive impairment, and orthopedic challenges. It conducts
                    comprehensive evaluations of hand function using built-in
                    assessment protocols, enabling precise targeting of
                    rehabilitation goals.
                  </p>
                  <p className="text-justify">
                    Common applications include:
                    <ul className="list-disc list-inside mt-2">
                      <li>Cognitive impairment due to neurological damage</li>
                      <li>
                        Upper limb dysfunction from cerebrovascular accidents
                      </li>
                      <li>
                        Upper limb limitations caused by orthopedic conditions
                      </li>
                      <li>
                        Enhancement of memory, attention, and visual
                        coordination
                      </li>
                    </ul>
                  </p>
                  <p className="text-justify">
                    SG2 features engaging, AI-powered training modules such as:
                    <ul className="list-disc list-inside mt-2">
                      <li>Interactive cognitive exercises</li>
                      <li>Feedback-based therapy</li>
                      <li>Neuroreceptor activation activities</li>
                      <li>Game-based rehabilitation programs</li>
                    </ul>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
