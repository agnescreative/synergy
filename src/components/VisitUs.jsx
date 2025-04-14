import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export const VisitUs = () => {
  return (
    <Container className={"py-8 md:py-12 lg:py-24 flex justify-center"}>
      <div
        className={
          "myContainer  bg-[#2B31FF]  py-12 rounded-3xl flex justify-center items-center"
        }
      >
        <div className={"text-white flex flex-col items-center space-y-12"}>
          <div className={" flex flex-col items-center space-y-3 text-center"}>
            <p className={"font-serif-light text-3xl  md:text-4xl lg:text-5xl"}>
              Discover Your Healing Journey
            </p>
            <div className={"max-w-xl"}>
              <p className={"md:text-lg "}>
                Visit us at our Tarsali/Mangalpur location for comprehensive
                physiotherapy and rehabilitation services tailored to you.
              </p>
            </div>
          </div>
          <div
            className={
              "flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-x-4 lg:space-y-0"
            }
          >
            <Link to={"/about-us"}>
              <button
                className={
                  "uppercase bg-white text-[#2B31FF] text-center  rounded-full py-2 px-12"
                }
              >
                Learn more about
              </button>
            </Link>
            <Link
              to={"/contact-us"}
              className={
                "uppercase text-white border border-white text-center bg-[#2B31FF] rounded-full py-2 px-12 "
              }
            >
              {" "}
              Visit Us
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
