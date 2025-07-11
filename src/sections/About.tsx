import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techList = [
  { name: "C", icon: "logos:c" },
  { name: "Java", icon: "logos:java" },
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Flutter", icon: "logos:flutter" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "PHP", icon: "logos:php" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "GitHub", icon: "mdi:github" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-8 px-8 bg-[#0f172a] text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-4">
        About <span className="text-cyan-400">Me</span>
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-lg">
        I'm an Informatics Student at Universitas Atma Jaya Yogyakarta with a
        strong interest in Full Stack and Mobile Development. I'm passionate
        about exploring new technologies and consistently take on new challenges
        with enthusiasm. I aim to contribute positively to every project I'm
        involved in and continuously grow as a developer
      </p>

      <h3 className="text-2xl font-semibold mb-6">Experience With</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {techList.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-black bg-opacity-40 border border-cyan-500 rounded-xl py-4 shadow-md hover:scale-105 transition-transform"
          >
            <Icon icon={tech.icon} width={40} height={40} />
            <p className="mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
