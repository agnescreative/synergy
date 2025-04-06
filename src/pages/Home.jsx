import { Hero } from "../components/Home/Hero.jsx";
import { WhatWeDo } from "../components/Home/WhatWeDo.jsx";
import { TreatmentsWeOffer } from "../components/Home/TreatmentsWeOffer.jsx";
import { AboutSynergy } from "../components/Home/AboutSynergy.jsx";
import { RoboticsInformation } from "../components/Home/RoboticsInformation.jsx";
import { WhyChooseUs } from "../components/Home/WhyChooseUs.jsx";
import { Testimonials } from "../components/Home/Testimonials.jsx";

export const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <TreatmentsWeOffer />
      <AboutSynergy />
      <RoboticsInformation />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};
