import image from "../assets/hero.jpg";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface HeroProps {
  onScrollToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToAbout }) => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-center px-8 py-48 gap-32"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-xl">
        <h2 className="text-4xl font-semibold">Hello, I'm</h2>
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
          Kevin Ardiprana
        </h1>
        <p className="text-xl font-medium mb-4">
          Fullstack Web Developer | Mobile Developer
        </p>
        <p className="text-lg text-gray-300 text-justify">
          An Informatics undergraduate at Atma Jaya Yogyakarta University with a
          passion for building scalable and user-friendly web and mobile
          applications.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg"
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            download
            className="border border-gray-400 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500">
        <img
          src={image}
          alt="Kevin Ardiprana"
          className="object-cover object-left-top"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-400 mb-3">Learn More</p>
        <button
          onClick={onScrollToAbout}
          className="text-cyan-400 text-3xl animate-bounce inline-block"
        >
          <Icon icon="ph:arrow-down-bold" />
        </button>
      </div>
    </motion.section>
  );
};

export default Hero;
