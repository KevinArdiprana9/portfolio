// Footer.tsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f172a] text-gray-400 text-sm py-6 text-center"
    >
      <hr className="w-[80%] mx-auto border-gray-600 mb-4" />
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Kevin Ardiprana. Built with passion
        and precision.
      </p>
    </motion.footer>
  );
};

export default Footer;
