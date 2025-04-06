import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CarouselCard = ({ title, description, imageUrl, href = "#" }) => {
  return (
    <Link to={href}>
      <div className="max-w-md rounded-3xl overflow-hidden">
        <div className="relative aspect-square">
          {/* Background Image */}

          <img
            src={imageUrl}
            alt="Medical background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 flex  bg-gradient-to-b from-transparent via-transparent to-primary-blue" />
          <h2 className=" absolute bottom-0 left-6 text-4xl font-medium mb-4 text-white font-serif">
            {title}
          </h2>
        </div>

        {/* Content container */}
        <div className="h-full px-6 pb-2 flex flex-col justify-end text-white bg-primary-blue ">
          <p className=" text-base leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

CarouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  href: PropTypes.string,
};
