import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

type NavbarProps = {
  onNavClick: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    heroRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
};

const Navbar = ({ onNavClick, refs }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sections = [
        { id: "home", ref: refs.heroRef },
        { id: "about", ref: refs.aboutRef },
        { id: "projects", ref: refs.projectsRef },
        { id: "contact", ref: refs.contactRef },
      ];

      for (const section of sections) {
        const el = section.ref.current;
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (
            scrollY >= offsetTop - 80 &&
            scrollY < offsetTop + offsetHeight - 80
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  const navItems = [
    { id: "home", label: "Home", icon: "ph:house-line" },
    { id: "about", label: "About", icon: "ph:user" },
    { id: "projects", label: "Projects", icon: "ph:briefcase" },
    { id: "contact", label: "Contact", icon: "ph:envelope" },
  ];

  return (
    <nav className="bg-[#070c16] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">Kevin Ardiprana</h1>
        <ul className="flex gap-4 md:gap-6 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() =>
                  onNavClick(refs[`${item.id}Ref` as keyof typeof refs])
                }
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-[#111827]"
                }`}
              >
                <Icon icon={item.icon} className="text-lg" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
