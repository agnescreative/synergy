import { PageContent } from "../components/PageContent.jsx";
import Container from "../components/Container.jsx";
import { motion } from "framer-motion";

const pageContentData = {
  name: "Global Patient Assistance",
  title: "Your Companion for a Healing Journey",
  description:
    "Synergy Physiotherapy is a worldwide destination for patients seeking our expertise in Physiotherapy Treatment, Rehab & Care. We understand the challenges of leaving home and traveling for specialized care. That's why our Global Patient Assistance team is here to handle everything for you.\n" +
    "We deeply value the trust and courage of our patients who travel from distant places. We strive to provide you with the results and comfort you deserve during your stay with us.\n",
  imagePath: "/assets/GlobalPatientAssistance.png",
};
const items = [
  {
    title: "Assistance for Patients Around the World",
    description:
      "For patients coming from overseas or out of town, our Global Patient Assistance team is here to assist. They can help with travel plans, finding accommodation, and other related services.",
  },
  {
    title: "Sharing Health History",
    description:
      "Before starting treatment, patients need to share their health history with the Synergy Physiotherapy team. This information helps us understand the patient's condition better and deliver effective treatment.",
  },
  {
    title: "Scheduling an Appointment",
    description:
      "The next step is coordinating with our team to set up an appointment. Patients can either call us or visit any of our facilities to schedule their appointment.",
  },
  {
    title: "Treatment and Rehabilitation",
    description:
      "Following a thorough examination, our team will identify suitable options for treatment, care, or rehabilitation.",
  },
  {
    title: "Cutting-Edge Technologies at Synergy Physiotherapy",
    description:
      "Synergy Physiotherapy leads the way in adopting the world's best technologies. These advancements empower our team to provide unmatched healthcare services and set new standards in the field of Physiotherapy through inventive solutions.",
  },
  {
    title: "Arrangements for Accommodation and Travel",
    description:
      "For patients choosing to travel to Vadodara, our team will take care of travel details, airport pick-ups, accommodation, sessions, and even sightseeing.",
  },
  {
    title: "Specialized Physiotherapy Sessions",
    description:
      "Patients will have sessions with our specialized physiotherapists based on their treatment or rehabilitation needs. At Synergy Physiotherapy, we are committed to ensuring a smooth and supportive experience for patients from around the world.",
  },
];
export const GlobalPatientAssistance = () => {
  return (
    <>
      <PageContent {...pageContentData} />
      <Container className={"flex justify-center py-12"}>
        <div className={"myContainer space-y-20"}>
          <div className={" "}>
            <div
              className={"container flex flex-col items-center justify-center"}
            >
              <motion.div className={" space-y-16"}>
                <div
                  className={"flex flex-col items-start space-y-3 lg:space-y-3"}
                >
                  <p
                    className={
                      "font-serif-light font-semibold text-3xl xl:text-4xl  tracking-wider"
                    }
                  >
                    Your Companion for a Healing Journey
                  </p>
                  <p className="text-justify">
                    Synergy Physiotherapy is a worldwide destination for
                    patients seeking our expertise in Physiotherapy Treatment,
                    Rehab & Care. We understand the challenges of leaving home
                    and traveling for specialized care. That&apos;s why our
                    Global Patient Assistance team is here to handle everything
                    for you.
                  </p>
                  <p className="text-justify">
                    We deeply value the trust and courage of our patients who
                    travel from distant places. We strive to provide you with
                    the results and comfort you deserve during your stay with
                    us.
                  </p>
                  <p className="text-justify">
                    Our Global Patient Assistance team collaborates with you to
                    plan your trip, creating a tailored schedule that suits your
                    needs. From assisting with travel and accommodation
                    arrangements to overcoming language and culture barriers,
                    airport pick-up & drop, booking Rehab Suites, scheduling
                    sessions, and even organizing sightseeing in our vibrant
                    city we&apos;ve got it covered. We also provide you with a
                    local SIM CARD upon arrival for seamless communication,
                    ensuring you remain calm and focused on your treatment and
                    recovery.
                  </p>
                  <p className="text-justify">
                    The team serves as your connection to Synergy Physiotherapy
                    and is ready to address any issues related to your travel or
                    stay.
                  </p>
                  <p className="text-justify">
                    If you&apos;re ready to receive treatment, care, and rehab
                    at Synergy Physiotherapy, take the first step by sending an
                    Enquiry to our Global Patient Assistance team. An advisor
                    will be assigned to your case, reaching out to discuss your
                    medical needs and request a copy of your complete medical
                    records. Please ensure your records include all relevant
                    test results, x-rays, scans, etc. After reviewing your
                    medical history, our doctors will contact you with a
                    proposed course of treatment and estimated duration.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="space-y-8">
            <p className="font-serif text-2xl md:text-5xl">Mode of Conduct</p>
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
