import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export const Footer = () => {
  return (
    <Container className="w-full bg-primary-blue py-12 md:py-20 flex xl:justify-center">
      <div className="myContainer flex justify-start md:justify-center">
        <div className="w-full xl:w-[80%] space-y-9">
          <div className="flex justify-start">
            <img src="/assets/FooterLogo.svg" alt="logo" />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 text-white">
            <div className="space-y-5 text-left">
              <p className="font-serif text-xl md:text-2xl">Navigation</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 md:space-x-14">
                <ul className="space-y-3">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/contact-us"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/careers"}>Careers</Link>
                  </li>
                  <li>
                    <Link to={"/home-visits"}>Home Visits</Link>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link to={"/technology"}>Technology</Link>
                  </li>
                  <li>
                    <Link to={"/robotics"}>Robotics</Link>
                  </li>
                  <li>
                    <Link to={"/ergonomics"}>Ergonomics</Link>
                  </li>
                  <li>
                    <Link to={"/global-patient-assistance"}>
                      Global Patient Assistance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="space-y-5 text-left">
              <p className="font-serif text-xl md:text-2xl">Our Services</p>
              <ul className="space-y-3">
                <li>
                  <Link to={"/specialization/neuro-rehabilitation"}>
                    Neuro Rehabilitation
                  </Link>
                </li>
                <li>
                  <Link to={"/specialization/advanced-ortho-rehabilitation"}>
                    Advanced Ortho Rehabilitation
                  </Link>
                </li>
                <li>
                  <Link to={"/specialization/cardiopulmonary-health"}>
                    Cardiopulmonary Health
                  </Link>
                </li>
                <li>
                  <Link to={"/specialization/sports-rehabilitation"}>
                    Sports Health
                  </Link>
                </li>
                <li>
                  <Link to={"/specialization/womens-health"}>
                    Women&apos;s Health
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="space-y-5 text-left">
              <p className="font-serif text-xl md:text-2xl">Connect with us</p>
              <div className="max-w-xs  md:mx-0">
                <p>
                  2nd floor Sakar East complex,Opp Bansal mall, Soma Talav -
                  Tarsali Ring Rd, Vadodara, Gujarat 390009
                </p>
              </div>
              <p>0265 298 0020</p>
              <div className="flex justify-start space-x-4">
                <img src="/assets/socialIcons/facebook.svg" alt="facebook" />
                <img src="/assets/socialIcons/twitter.svg" alt="twitter" />
                <img src="/assets/socialIcons/linkedin.svg" alt="linkedin" />
              </div>
            </div>
          </div>
          <div className={"hidden xl:block text-center space-y-4"}>
            <img src="/assets/footer_text.png" className="w-full h-auto" />
            <p className={"text-white text-[64px] leading-none"}>
              Physiotheraphy and rehabilation centre
            </p>
          </div>

          <div
            className={
              "text-white text-center  space-y-3 lg:space-y-0 text-xs flex flex-col lg:flex-row justify-between items-center lg:max-w-full "
            }
          >
            <p className={""}>
              ©{new Date().getFullYear()} Synergy Physiotherapy Hospital &
              Rehabilitation Care. All rights reserved
            </p>
            <div className={"flex space-x-3 items-center"}>
              <p>Crafted by Agnes </p>
              <a target="_blank" href={"https://www.agnescreative.agency"}>
                <img src="/assets/socialIcons/agnes.svg" alt="Agnes" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
