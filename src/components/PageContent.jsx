import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { useState } from "react"; // Import useState to manage hover state
import { motion } from "framer-motion"; // Import motion for animation
import Container from "./Container.jsx";

export const PageContent = ({
  name,
  title,
  description,
  contents,
  imagePath,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null); // Set initial hoveredItem to null

  return (
    <>
      <Container>
        <div className={"flex justify-center"}>
          <div
            className={`myContainer pt-8 xl:pt-16 pb-4 xl:pb-16 xl:grid grid-cols-1 ${
              contents ? "xl:grid-cols-2" : "xl:grid-cols-1"
            } space-y-5 xl:space-y-16`}
          >
            <div className={`space-y-6 col-span-1 xl:max-w-[80%]`}>
              <p className={"font-serif text-[#1e1e1e] text-2xl"}>{name}</p>
              <p
                className={
                  "font-serif-light text-2xl lg:text-4xl xl:text-[46px] xl:leading-[3.2rem]"
                }
              >
                {title}
              </p>
              <p className={"whitespace-pre-wrap"}>{description}</p>
            </div>
            {contents && (
              <div
                className={`hidden xl:block xl:${
                  contents.length > 5
                    ? "flex justify-between"
                    : "xl:block place-items-end"
                }`}
              >
                {contents && (
                  <div
                    className={`hidden xl:flex w-full ${
                      contents.length > 5
                        ? "xl:justify-around"
                        : "xl: justify-end"
                    }`}
                  >
                    {contents.length > 5 ? (
                      // Two lists for more than 4 items
                      <>
                        {/* First List: Items 0–3 */}
                        <div
                          className={`font-serif-light font-semibold text-[#1e1e1e] text-2xl space-y-7`}
                        >
                          {contents.slice(0, 5).map((item, i) => (
                            <div
                              key={item.divId || i}
                              className="relative flex items-center cursor-pointer"
                              onMouseEnter={() => setHoveredItem(i)} // Track hovered item
                              onMouseLeave={() => setHoveredItem(null)} // Reset when not hovering
                            >
                              {/* Arrow with motion, show only on hover */}
                              {hoveredItem === i && (
                                <motion.div
                                  className="absolute -left-12 flex items-center justify-center w-6 h-6"
                                  animate={{ opacity: 1, x: 15 }} // Increased the x value to add more space
                                  initial={{ opacity: 0, x: -10 }} // Start with the arrow off to the left
                                  transition={{ duration: 0.3 }} // Smooth transition
                                >
                                  <ArrowRight
                                    className="text-primary-blue"
                                    size={24}
                                  />
                                </motion.div>
                              )}
                              <Link smooth={true} to={item.divId}>
                                {item.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                        {/* Second List: Remaining Items */}
                        <div
                          className={`font-serif-light font-semibold text-[#1e1e1e] text-2xl space-y-7`}
                        >
                          {contents.slice(5).map((item, i) => (
                            <div
                              key={item.divId || i}
                              className="relative flex items-center cursor-pointer"
                              onMouseEnter={() => setHoveredItem(i + 4)} // Adjust index for second list
                              onMouseLeave={() => setHoveredItem(null)} // Reset when not hovering
                            >
                              {/* Arrow with motion, show only on hover */}
                              {hoveredItem === i + 4 && (
                                <motion.div
                                  className="absolute -left-12 flex items-center justify-center w-6 h-6"
                                  animate={{ opacity: 1, x: 15 }} // Increased the x value to add more space
                                  initial={{ opacity: 0, x: -10 }} // Start with the arrow off to the left
                                  transition={{ duration: 0.3 }} // Smooth transition
                                >
                                  <ArrowRight
                                    className="text-primary-blue"
                                    size={24}
                                  />
                                </motion.div>
                              )}
                              <Link smooth={true} to={item.divId}>
                                {item.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      // Single list for 4 or fewer items
                      <div
                        className={`font-serif-light font-semibold text-[#1e1e1e] text-2xl space-y-7`}
                      >
                        {contents.map((item, i) => (
                          <div
                            key={item.divId || i}
                            className="relative flex items-center cursor-pointer"
                            onMouseEnter={() => setHoveredItem(i)} // Track hovered item
                            onMouseLeave={() => setHoveredItem(null)} // Reset when not hovering
                          >
                            {/* Arrow with motion, show only on hover */}
                            {hoveredItem === i && (
                              <motion.div
                                className="absolute -left-12 flex items-center justify-center w-6 h-6"
                                animate={{ opacity: 1, x: 15 }} // Increased the x value to add more space
                                initial={{ opacity: 0, x: -10 }} // Start with the arrow off to the left
                                transition={{ duration: 0.3 }} // Smooth transition
                              >
                                <ArrowRight
                                  className="text-primary-blue"
                                  size={24}
                                />
                              </motion.div>
                            )}
                            <Link smooth={true} to={item.divId}>
                              {item.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
      <div className="col-span-full flex flex-col items-center">
        <img
          src="/assets/pagecontentsvg.svg"
          alt="artifact"
          className="self-end mr-8 hidden xl:block "
        />
        <img
          src={imagePath}
          alt="Synergy"
          className="w-full h-auto object-cover  xl:max-h-[600px]"
        />
      </div>
    </>
  );
};
