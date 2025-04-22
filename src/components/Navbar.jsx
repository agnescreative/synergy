import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container.jsx";

const navItems = [
  {
    name: "Physiotherapy & Rehab",
    icon: true,
    subItems: [
      { name: "Frozen Shoulder", link: "/services/frozen-shoulder" },
      {
        name: "Pediatrics Rehabilitation",
        link: "/services/pediatrics-rehabilitation",
      },
      { name: "Tennis Elbow", link: "/services/tennis-elbow" },
      {
        name: "Cancer Rehabilitation",
        link: "/services/cancer-rehabilitation",
      },
      { name: "Flat Foot", link: "/services/flat-foot" },
      {
        name: "Wrist and Hand Rehabilitation",
        link: "/services/wrist-and-hand-rehabilitation",
      },
      { name: "Posture Correction", link: "/services/posture-correction" },
      { name: "AVN of Hip", link: "/services/avn-of-hip" },
      { name: "Arthritis", link: "/services/arthritis" },
      { name: "Ligament Injury", link: "/services/ligament-injury" },
      {
        name: "Rheumatic Rehabilitation",
        link: "/services/rheumatic-rehabilitation",
      },
      {
        name: "Sports Rehabilitation",
        link: "/services/sports-rehabilitation",
      },
      { name: "Spine Treatment", link: "/services/spine-treatment" },
      {
        name: "Geriatric Rehabilitation",
        link: "/services/geriatric-rehabilitation",
      },
      { name: "Pain Management", link: "/services/pain-management" },
      { name: "Paralysis", link: "/services/paralysis" },
      { name: "Speech Problem", link: "/services/speech-problem" },
      { name: "Tingling, Numbness", link: "/services/tingling-numbness" },
      {
        name: "Vein and Artery Diseases",
        link: "/services/vein-and-artery-diseases",
      },
      { name: "Vertigo", link: "/services/vertigo" },
      {
        name: "Post Surgery Complications",
        link: "/services/post-surgery-complications",
      },
      { name: "Chronic Fatigue", link: "/services/chronic-fatigue" },
      // { name: "Respiratory Problems", link: "/services/respiratory-problems" },
      { name: "Burns", link: "/services/burns" },
      { name: "Muscle Weakness", link: "/services/muscle-weakness" },
      { name: "Urinary Incontinence", link: "/services/urinary-incontinence" },
      { name: "Bed Sore", link: "/services/bed-sore" },
    ],
  },
  {
    name: "Our Specialization",
    icon: true,
    subItems: [
      {
        name: "Neuro Rehabilitation",
        link: "/specialization/neuro-rehabilitation",
      },
      {
        name: "Advanced Ortho Rehabilitation",
        link: "/specialization/advanced-ortho-rehabilitation",
      },
      {
        name: "Cardiopulmonary Health",
        link: "/specialization/cardiopulmonary-health",
      },
      {
        name: "Sports Rehabilitation",
        link: "/specialization/sports-rehabilitation",
      },
      { name: "Women's Health", link: "/specialization/womens-health" },
    ],
  },
  { name: "Technology", link: "/technology", icon: false },
  { name: "Robotics", link: "/robotics", icon: false },
  { name: "About Us", link: "/about-us", icon: false },
  { name: "Contact Us", link: "/contact-us", icon: false },
];

const menuItems = [
  { name: "Home", icon: false, link: "/" },
  { name: "About Us", icon: false, link: "/about-us" },
  {
    name: "Physiotherapy & Rehab",
    icon: true,
    subItems: [
      { name: "Frozen Shoulder", link: "/services/frozen-shoulder" },
      {
        name: "Pediatrics Rehabilitation",
        link: "/services/pediatrics-rehabilitation",
      },
      { name: "Tennis Elbow", link: "/services/tennis-elbow" },
      {
        name: "Cancer Rehabilitation",
        link: "/services/cancer-rehabilitation",
      },
      { name: "Flat Foot", link: "/services/flat-foot" },
      {
        name: "Wrist and Hand Rehabilitation",
        link: "/services/wrist-and-hand-rehabilitation",
      },
      { name: "Posture Correction", link: "/services/posture-correction" },
      { name: "AVN of Hip", link: "/services/avn-of-hip" },
      { name: "Arthritis", link: "/services/arthritis" },
      { name: "Ligament Injury", link: "/services/ligament-injury" },
      {
        name: "Rheumatic Rehabilitation",
        link: "/services/rheumatic-rehabilitation",
      },
      {
        name: "Sports Rehabilitation",
        link: "/services/sports-rehabilitation",
      },
      { name: "Spine Treatment", link: "/services/spine-treatment" },
      {
        name: "Geriatric Rehabilitation",
        link: "/services/geriatric-rehabilitation",
      },
      { name: "Pain Management", link: "/services/pain-management" },
      { name: "Paralysis", link: "/services/paralysis" },
      { name: "Speech Problem", link: "/services/speech-problem" },
      { name: "Tingling, Numbness", link: "/services/tingling-numbness" },
      {
        name: "Vein and Artery Diseases",
        link: "/services/vein-and-artery-diseases",
      },
      { name: "Vertigo", link: "/services/vertigo" },
      {
        name: "Post Surgery Complications",
        link: "/services/post-surgery-complications",
      },
      { name: "Chronic Fatigue", link: "/services/chronic-fatigue" },
      // { name: "Respiratory Problems", link: "/services/respiratory-problems" },
      { name: "Burns", link: "/services/burns" },
      { name: "Muscle Weakness", link: "/services/muscle-weakness" },
      { name: "Urinary Incontinence", link: "/services/urinary-incontinence" },
      { name: "Bed Sore", link: "/services/bed-sore" },
    ],
  },
  {
    name: "Our Specialization",
    icon: true,
    subItems: [
      {
        name: "Neuro Rehabilitation",
        link: "/specialization/neuro-rehabilitation",
      },
      {
        name: "Advanced Ortho Rehabilitation",
        link: "/specialization/advanced-ortho-rehabilitation",
      },
      {
        name: "Cardiopulmonary Health",
        link: "/specialization/cardiopulmonary-health",
      },
      {
        name: "Sports Rehabilitation",
        link: "/specialization/sports-rehabilitation",
      },
      { name: "Women's Health", link: "/specialization/womens-health" },
    ],
  },
  { name: "Technology", icon: false, link: "/technology" },
  { name: "Our Hospitality", icon: false, link: "/our-hospitality" },
  { name: "Ergonomics", icon: false, link: "/ergonomics" },
  {
    name: "Global Patient Assistance",
    icon: false,
    link: "/global-patient-assistance",
  },
  { name: "Home Visits", icon: false, link: "/home-visits" },
  { name: "Careers", icon: false, link: "/careers" },
  { name: "Contact", icon: false, link: "/contact-us" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoverSubmenu, setHoverSubmenu] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navbarRef.current.offsetHeight}px`
      );
    }
  }, []);

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  const submenuVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <nav
      ref={navbarRef}
      className={`absolute top-0 left-0 right-0 z-50 ${
        isHomePage ? "bg-transparent" : "bg-white"
      }`}
    >
      <Container className="myContainer  mx-auto py-2 sm:py-3 lg:py-5">
        <div className="flex items-center justify-between h-fit">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-[180px] h-[62px] sm:w-[210px] sm:h-[73px] lg:w-[245px] lg:h-[85px]">
                <img
                  src={
                    isHomePage ? "/assets/logo.png" : "/assets/logo_colored.png"
                  }
                  alt="Synergy Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex justify-between space-x-6">
            <ul className="flex items-center justify-around space-x-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`relative cursor-pointer  text-base flex items-center justify-center space-x-[1px] transition-colors duration-300 ${
                    isHomePage
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-primary-blue"
                  } ${item.link === location.pathname && "text-primary-blue"}`}
                  onMouseEnter={() => item.icon && setHoverSubmenu(item.name)}
                  onMouseLeave={() => setHoverSubmenu(null)}
                >
                  {item?.link ? (
                    <Link to={item.link}>{item.name}</Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  {item.icon && <ChevronDown size={17} />}
                  {item.icon && item.subItems && (
                    <AnimatePresence>
                      {hoverSubmenu === item.name && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={submenuVariants}
                          transition={{ duration: 0.3 }}
                          className={`absolute top-full -left-1/4 transform -translate-x-1/2 mt-2 bg-white rounded-3xl shadow-xl overflow-hidden ${
                            item.subItems.length > 18
                              ? "w-[800px]"
                              : item.subItems.length > 9
                              ? "w-[512px]"
                              : "w-72"
                          }`}
                        >
                          <div className="p-4">
                            <ul
                              className={`grid ${
                                item.subItems.length > 18
                                  ? "grid-cols-3"
                                  : item.subItems.length > 9
                                  ? "grid-cols-2"
                                  : "grid-cols-1"
                              } gap-4`}
                            >
                              {/* Group subItems in chunks of 9 */}
                              {Array.from({
                                length: Math.ceil(item.subItems.length / 9),
                              }).map((_, colIndex) => (
                                <div key={colIndex} className="space-y-">
                                  {item.subItems
                                    .slice(colIndex * 9, (colIndex + 1) * 9)
                                    .map((subItem, subIndex) => (
                                      <motion.li
                                        key={subIndex}
                                        variants={menuItemVariants}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <Link
                                          to={subItem.link}
                                          className="block py-2 px-3 text-base text-gray-700 hover:bg-primary-blue hover:text-white rounded-xl transition-colors duration-200"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </motion.li>
                                    ))}
                                </div>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Menu Button */}
            <button
              className={`flex justify-center items-center space-x-1 cursor-pointer transition-colors duration-300 group hover:text-primary-blue  ${
                isHomePage ? "text-white" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className={`size - 5 group-hover:text-primary-blue  transition-colors duration-300`}
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.30688 7.40933H20.3069M2.30688 1.62231H20.3069M10.2062 13.1963H16.4698H20.3069"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Menu</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`xl:hidden  p-2  ${
              isHomePage ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSubmenu(null);
              }}
            />

            {/* Menu Content */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-primary-blue z-50 overflow-y-auto"
            >
              <Container className="h-full  2xl:px-10 flex flex-col lg:px-8">
                <div className="flex justify-end pt-6">
                  <motion.button
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSubmenu(null);
                    }}
                    className="text-white  transition-colors duration-300"
                  >
                    <X size={32} />
                  </motion.button>
                </div>
                <ul className="flex-grow flex flex-col py-8 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={menuItemVariants}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-white text-2xl font-light"
                    >
                      <button
                        className="flex items-center justify-between w-full hover:text-white/50 transition-colors duration-300"
                        onClick={() =>
                          item.icon
                            ? toggleSubmenu(item.name)
                            : setIsMenuOpen(false)
                        }
                      >
                        <Link to={item.link}>{item.name}</Link>
                        {item.icon && (
                          <ChevronDown
                            size={24}
                            className={`transform transition-transform duration-300 ${
                              activeSubmenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>
                      {item.icon && item.subItems && (
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.ul
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={submenuVariants}
                              transition={{ duration: 0.3 }}
                              className="mt-4 ml-4 space-y-2 overflow-hidden"
                            >
                              {item.subItems.map((subItem, subIndex) => (
                                <motion.li
                                  key={subIndex}
                                  variants={menuItemVariants}
                                  transition={{ duration: 0.3 }} // No delay
                                >
                                  <Link
                                    to={subItem.link}
                                    className="text-xl text-white/70 hover:text-white transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
