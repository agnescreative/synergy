import { PageContent } from "../components/PageContent.jsx";
import {OurVisionAndMission} from "../components/About/OurVisionAndMission.jsx";
import {OurFundamentalPrinciples} from "../components/About/OurFundamentalPrinciples.jsx";
import {OurPeople} from "../components/About/OurPeople.jsx";
import {OurInfrastructure} from "../components/About/OurInfrastructure.jsx";

export const About = () => {

    const pageContentData = {
        name: "About Us",
        title: "Synergy Physiotherapy: Bridging Innovation and Care",
        description:"At Synergy Physiotherapy, we are redefining recovery and wellness with a global perspective. Rooted in India, our expert team combines advanced therapies, innovative technology, and personalized care to transform lives. With a commitment to excellence and compassion, we empower patients worldwide to achieve their unique health goals\n",
        contents: [
            { title: "Our Vision / Mission", divId: "vision-mission" },
            { title: "Our Fundamental Principles", divId: "fundamental-principles" },
            { title: "Our People", divId: "our-people" },
            { title: "Our Infrastructure", divId: "our-infrastructure" },
        ],
        imagePath: '/assets/infrastructure/17.jpg',
    }

  return (
      <>
        <PageContent {...pageContentData} />
          <OurVisionAndMission />
          <OurFundamentalPrinciples />
        <OurPeople />
        <OurInfrastructure />
      </>
  );
};
