import type { ProjectItem } from "../sections/Projects";
import Unifit from "../assets/Unifit.jpg";
import AtmaGym from "../assets/AtmaGym.jpg";
import ReusemartWeb from "../assets/ReusemartWeb.jpg";
import ReusemartMobile from "../assets/ReusemartMobile.jpg";

const projectData: ProjectItem[] = [
  {
    title: "Reusemart Web App",
    description:
      "Reusemart is a role-based web interface built with React and Tailwind CSS for managing secondhand item donations and sales. It provides dynamic dashboards for donors, buyers, staff, and admins, with features like item listing, transaction tracking, real-time chat, and PDF report previews. This frontend integrates seamlessly with a Laravel backend via REST APIs for data management and authentication.",
    image: ReusemartWeb,
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "MySQL", icon: "logos:mysql" },
    ],
    projectLink: "",
    codeLink: {
      frontend: "https://github.com/KadekDeva13/Reusemart_frontend",
      backend: "https://github.com/KevinArdiprana9/Reusemart_Backend",
    },
  },
  {
    title: "Reusemart Mobile App",
    description:
      "Reusemart is a mobile application built with Flutter that empowers users to donate, sell, or purchase secondhand items easily from their phones. It features role-based access for buyers, donors, couriers, and hunters, each with tailored views and actions. Users can manage their profiles, track transactions, receive real-time notifications via Firebase, and interact through a clean, responsive interface.",
    image: ReusemartMobile,
    tech: [
      { name: "Flutter", icon: "logos:flutter" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "MySQL", icon: "logos:mysql" },
    ],
    projectLink: "",
    codeLink: {
      frontend: "https://github.com/KadekDeva13/Reusemart_flutter",
      backend: "https://github.com/KevinArdiprana9/Reusemart_Backend",
    },
  },
  {
    title: "Unifit Mobile App",
    description:
      "Unifit is a mobile application designed to simplify the process of booking gym classes. It allows users to browse available classes, reserve spots, and manage their fitness schedules with ease all in one streamlined app",
    image: Unifit,
    tech: [
      { name: "Flutter", icon: "logos:flutter" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "MySQL", icon: "logos:mysql" },
    ],
    projectLink: "",
    codeLink: {
      frontend: "https://github.com/KevinArdiprana9/6_B_Gym",
      backend: "https://github.com/Kazuhaa11/6_B_GYM_Laravel_Fix",
    },
  },
  {
    title: "Atma Gym",
    description:
      "Atma Gym is a user-friendly website designed for seamless gym class booking and membership registration. Users can easily browse available classes, reserve spots, and join membership plans for exclusive benefits. ",
    image: AtmaGym,
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "MySQL", icon: "logos:mysql" },
    ],
    projectLink: "",
    codeLink: {
      frontend: "https://github.com/TokSeKa-uajy/PW_B_4_React",
      backend: "https://github.com/TokSeKa-uajy/PW_B_4_Laravel",
    },
  },
];

export default projectData;
