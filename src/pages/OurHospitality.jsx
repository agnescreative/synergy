import { PageContent } from "../components/PageContent.jsx";
import Container from "../components/Container.jsx";
import { HospitalityCard } from "../components/OurHospitality/HospitalityCard.jsx";

const pageContentData = {
  name: "Our Hospitality:  - Experience Unmatched Care and Comfort",
  title:
    "Redefining Patient-Centered Care at Synergy Physiotherapy & Rehabilitation Centre",
  description:
    "At Synergy Physiotherapy & Rehabilitation Centre, hospitality is at the heart of everything we do. We go beyond delivering exceptional medical care by creating a warm, welcoming environment that prioritizes your comfort and well-being. From our friendly staff to our thoughtfully designed spaces, every detail is tailored to make your recovery journey as stress-free and supportive as possible. Our commitment to patient-centered care ensures you feel valued, respected, and empowered every step of the way. Experience the perfect blend of world-class treatment and compassionate hospitality with Synergy.",
  imagePath: "/assets/hospitality_banner.png",
};

const hospitalityCards = [
  {
    imagePath: "/assets/hospitalities/1.png",
    text: "Super specialized Neurological rehabilitation department",
  },
  {
    imagePath: "/assets/hospitalities/2.png",
    text: "Super specialized ortho rehabilitation department",
  },
  {
    imagePath: "/assets/hospitalities/3.png",
    text: "35 bedded indoor accommodation",
  },
  {
    imagePath: "/assets/hospitalities/4.png",
    text: "Special, semi special, general ward. (All rooms are Air conditioned, attached washrooms)",
  },
  {
    imagePath: "/assets/hospitalities/5.png",
    text: "Healthy and Nutritious meals (Breakfast, Lunch, Dinner)",
  },
  {
    imagePath: "/assets/hospitalities/6.JPG",
    text: "Assisted living care",
  },
  {
    imagePath: "/assets/hospitalities/7.jpg",
    text: "24*7 nursing care",
  },
  {
    imagePath: "/assets/hospitalities/8.png",
    text: "24*7 CCTV surveillance",
  },
  {
    imagePath: "/assets/hospitalities/10.png",
    text: "Physicians', Surgeons and other specialized doctors visiting facility.",
  },
  {
    imagePath: "/assets/hospitalities/11.jpg",
    text: "In - house laboratory facility.\n",
  },
  {
    imagePath: "/assets/hospitalities/9.png",
    text: "Laundry services",
  },
];

export const OurHospitality = () => {
  return (
    <>
      <PageContent {...pageContentData} />
      <Container className={"py-14 flex justify-center"}>
        <div
          className={
            "myContainer grid grid-cols-1 xl:grid-cols-2 gap-y-8  xl:gap-x-20 xl:gap-y-28"
          }
        >
          {hospitalityCards.map((card, index) => (
            <HospitalityCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </>
  );
};
