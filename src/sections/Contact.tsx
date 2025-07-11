import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-8 bg-[#0f172a] text-white min-h-[80vh]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Have an idea, collaboration, or project in mind? I'm always excited
            to hear from others — whether it's to build something together or
            just to say hi.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Reach out to me via any platform on the right. I'll get back to you
            as soon as I can!
          </p>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-cyan-700/20 transition-shadow duration-300">
            <Icon icon="mdi:email-outline" className="text-3xl text-cyan-400" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-400 text-sm">kevinardiprana9@gmail.com</p>
            </div>
          </div>

          {/* Github */}
          <div className="flex items-center gap-4 p-4 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-cyan-700/20 transition-shadow duration-300">
            <Icon icon="mdi:github" className="text-3xl text-cyan-400" />
            <div>
              <h4 className="font-semibold">GitHub</h4>
              <a
                href="https://github.com/KevinArdiprana9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:underline"
              >
                github.com/KevinArdiprana9
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-cyan-700/20 transition-shadow duration-300">
            <Icon icon="mdi:linkedin" className="text-3xl text-cyan-400" />
            <div>
              <h4 className="font-semibold">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/kevin-ardiprana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:underline"
              >
                linkedin.com/in/kevin-ardiprana
              </a>
            </div>
          </div>

          {/* Whatsapp */}
          <div className="flex items-center gap-4 p-4 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-cyan-700/20 transition-shadow duration-300">
            <Icon icon="mdi:whatsapp" className="text-3xl text-cyan-400" />
            <div>
              <h4 className="font-semibold">WhatsApp</h4>
              <a
                href="https://wa.me/628999417112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:underline"
              >
                wa.me/628999417112
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
