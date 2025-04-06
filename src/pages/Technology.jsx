import { PageContent } from "../components/PageContent.jsx";
import { Technologies } from "../components/Technology/Technologies.jsx";

export const Technology = () => {
  const pageContentData = {
    name: "Technology",
    title: "Leading Innovation in Recovery and Care",
    description:
      "At Synergy Physiotherapy, we specialize in blending advanced technology with expert care to deliver exceptional physiotherapy solutions. Our state-of-the-art treatments, rooted in precision and innovation, are designed to empower patients worldwide to achieve their health and wellness goals. With a focus on personalized care and cutting-edge techniques, we are redefining recovery and rehabilitation for a healthier tomorrow.\n",
    contents: [
      { title: "Tecar", divId: "tecar" },
      { title: "Shockwave", divId: "shockwave" },
      { title: "Myomed", divId: "myomed" },
      { title: "Tilt table", divId: "tilt-table" },
      { title: "Suspension frame walking", divId: "suspension-frame-walking" },
      {
        title: "Functional Electrical Stimulation",
        divId: "functional-electrical-stimulation",
      },
      {
        title: "Robotic spinal decompression table",
        divId: "robotic-spinal-decompression-table",
      },
      {
        title: "Laser therapy",
        divId: "laser-therapy",
      },
      {
        title: "Cycle Motus",
        divId: "cycle-motus",
      },
      {
        title: "SG2",
        divId: "zepu-sg2",
      },
    ],
    imagePath: "/assets/technology_banner.png",
  };

  return (
    <>
      <PageContent {...pageContentData} />
      <Technologies />
    </>
  );
};
