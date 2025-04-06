import Container from "../components/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center space-y-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-sans font-bold tracking-wide text-primary-blue"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl font-serif-light text-primary-blue"
        >
          Oops! The page you are looking for doesn&apos;t exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="/"
            className="px-6 py-3 font-serif bg-black text-white rounded-md text-lg font-medium shadow-md hover:bg-gray-700 transition"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default NotFound;
