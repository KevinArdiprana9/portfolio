import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export interface TechItem {
  name: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: TechItem[];
  projectLink: string;
  codeLink?: {
    frontend: string;
    backend: string;
  };
}

interface Props {
  projects: ProjectItem[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPopupIndex, setShowPopupIndex] = useState<number | null>(null);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 px-8 bg-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Featured <span className="text-cyan-400">Portfolio</span>
      </h2>
      <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
        Dive into my projects and discover the code behind the scenes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl overflow-hidden border border-gray-700 shadow-md flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover h-64"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-cyan-900 px-3 py-3 rounded-full flex items-center gap-2"
                    title={tech.name}
                  >
                    <Icon icon={tech.icon} width={24} height={24} />
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-6 relative">
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-sm font-medium flex items-center gap-1"
                  >
                    View Project <Icon icon="ph:arrow-up-right-bold" />
                  </a>
                )}

                {project.codeLink && (
                  <>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setShowPopupIndex(
                            showPopupIndex === index ? null : index
                          )
                        }
                        className="text-gray-400 hover:underline text-sm font-medium flex items-center gap-1"
                      >
                        <Icon icon="mdi:github" /> Code
                      </button>

                      <div
                        className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50 transform transition-all duration-300 ease-out ${
                          showPopupIndex === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <div className="flex gap-2">
                          <a
                            href={project.codeLink.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white bg-cyan-700 hover:bg-cyan-600 px-3 py-1 rounded"
                          >
                            Frontend
                          </a>
                          <a
                            href={project.codeLink.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white bg-cyan-700 hover:bg-cyan-600 px-3 py-1 rounded"
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
