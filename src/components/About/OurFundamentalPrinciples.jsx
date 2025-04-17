import { FundamentalPrincipleCard } from "./FundamentalPrincipleCard.jsx";
import Container from "../Container.jsx";

const fundamentals = [
  {
    number: "01",
    image: "/assets/fundamentals/1.svg",
    title: "Putting Patients First",
    description:
      "At Synergy Physiotherapy, we prioritize Patient Trust & Satisfaction, aiming to create a caring and patient-focused environment.",
  },
  {
    number: "02",
    image: "/assets/fundamentals/2.svg",
    title: "Showing Empathy",
    description:
      "We listen to you, understand your goals, beliefs, and concerns, and strive to provide optimal solutions for your health condition.",
  },
  {
    number: "03",
    image: "/assets/fundamentals/3.svg",
    title: "Striving for Excellence",
    description:
      "We have an attitude of excellence, aiming to set standards in cost-effective and high-quality Physiotherapy & Rehabilitation healthcare. By investing in cutting-edge technologies, we provide the best possible treatment and care for our patients at Synergy Physiotherapy.\n",
  },
  {
    number: "04",
    image: "/assets/fundamentals/4.svg",
    title: "Community Social Responsibility",
    description:
      "We actively respond to the diverse needs of individuals from all backgrounds, acting as a crucial resource for our communities. At Synergy Physiotherapy, we are honoured to treat individuals from various religions and support underprivileged children. Through our educational workshops on Ergonomics and more.\n",
  },
  {
    number: "05",
    image: "/assets/fundamentals/5.svg",
    title: "Embracing Innovation",
    description:
      "We foster creativity, adaptability, and a willingness to explore new ideas, approaches, technologies, and protocols. This commitment drives progress and keeps us at the forefront of movement sciences.",
  },
  {
    number: "06",
    image: "/assets/fundamentals/6.svg",
    title: "Respecting Everyone",
    description:
      "We value and treat all individuals seeking our services equally, irrespective of their backgrounds or positions. Our approach is based on dignity, fairness, and empathy.",
  },
];

export const OurFundamentalPrinciples = () => {
  return (
    <Container
      className={"  bg-gradient-to-b from-white from-15%% to-[#EAEAFF]"}
    >
      <div className={" flex justify-center"} id={"fundamental-principles"}>
        <div className={"myContainer py-20 space-y-8 "}>
          <p className={"font-serif-light font-semibold text-3xl xl:text-5xl"}>
            Our Fundamental Principles
          </p>
          <p className={"xl:max-w-[50%]"}>
            <span className={"text-primary-blue"}>
              These essential values steer us at Synergy Physiotherapy in
              fulfilling our mission.
            </span>
            <br />
            You&#39;ll sense these values flowing through our every interaction!
            Experience these principles woven into our design, facilities,
            technology, expertise, attitude, and daily interactions with
            patients/clients and our team at Synergy Physiotherapy.
          </p>

          <div
            className={
              "grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-2 gap-4"
            }
          >
            {fundamentals.map((fundamental, index) => (
              <FundamentalPrincipleCard
                key={index}
                number={fundamental.number}
                image={fundamental.image}
                title={fundamental.title}
                description={fundamental.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
