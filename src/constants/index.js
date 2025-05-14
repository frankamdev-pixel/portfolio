import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";
import cfpc from "../../public/logo.webp";
import laravel from "../../public/laravel2.png";
export const navLinks = [
  { id: "about", title: "À propos" },
  { id: "work", title: "Travaux" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Développeur Web", icon: web },
  { title: "Développeur ReactJS", icon: mobile },
  { title: "Développeur Backend", icon: backend },
  { title: "Créateur de Contenu", icon: creator },
  { title: "Intégration Web Responsive", icon: creator },
  { title: "Montage Vidéo et Création De Miniature Youtube", icon: creator },
  { title: "Création Visuels avec Photoshop et Illustrator", icon: creator },
  { title: "Optimisation UI/UX", icon: creator },
];

const technologies = [

  // { name: "HTML5", icon: html},
  // { name: "CSS3", icon: css },
  // { name: "JavaScript", icon: javascript },
  // { name: "TypeScript", icon: typescript },
  // { name: "ReactJS", icon: reactjs },
  // { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: laravel },
];

const experiences = [
  {
    title: "Développeur ReactJS",
    company_name: "Ecole Supérieure La Canadienne",
    icon: cfpc,
    iconBg: "#383E56",
    date: "Mars 2020 - Avril 2021",
    technologies: ["ReactJS", "JavaScript", "CSS"],
    location: "Bafoussam, Cameroun",
    points: [
      "Développement d'interfaces utilisateur dynamiques avec ReactJS.",
      "Transformation de maquettes Figma en applications responsives.",
      "Optimisation des performances avec lazy loading et mémorisation.",
      "Participation aux revues de code pour garantir la qualité.",
    ],
  },
  {
    title: "Développeur JavaScript",
    company_name: "Ecole Supérieure La Canadienne",
    icon: cfpc,
    iconBg: "#E6DEDD",
    date: "Janvier 2021 - Février 2022",
    technologies: ["JavaScript", "ReactJS", "Redux Toolkit"],
    location: "Bafoussam, Cameroun",
    points: [
      "Développement de fonctionnalités complexes avec Redux Toolkit.",
      "Connexion d'API REST avec des backends en PHP.",
      "Tests unitaires avec Jest.",
      "Collaboration avec l'équipe produit pour prioriser les fonctionnalités.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Ecole Supérieure La Canadienne",
    icon: cfpc,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    technologies: ["ReactJS", "TypeScript", "PHP"],
    location: "Bafoussam, Cameroun",
    points: [
      "Migration d'applications vers TypeScript.",
      "Développement de backends PHP pour le support front-end.",
      "Design responsif avec Tailwind CSS.",
      "Mentorat de stagiaires sur les bonnes pratiques web.",
    ],
  },
  {
    title: "Développeur Front-End",
    company_name: "Ecole Supérieure La Canadienne",
    icon: cfpc,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - Présent",
    technologies: ["ReactJS", "TypeScript", "Three.js", "Redux Toolkit"],
    location: "Bafoussam, Cameroun",
    points: [
      "Création d'expériences 3D interactives avec Three.js.",
      "Optimisation de la gestion d'état avec Redux Toolkit.",
      "Développement de composants TypeScript réutilisables.",
      "Intégration d'animations fluides avec l'équipe UX/UI.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site aussi beau que notre produit, mais Frank m'a prouvé le contraire.",
    name: "Frank Kamgang",
    designation: "Directeur Général",
    company: "Omiie Solutions",
    image: "/me.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Frank.",
    name: "Herman Waffo",
    designation: "Directeur des Opérations",
    company: "S.A.B.C",
    image: "/ball.jpg",
  },
  {
    testimonial:
      "Après l'optimisation de notre site web par Frank, notre trafic a augmenté de 50 %. Nous ne le remercierons jamais assez !",
    name: "Jodelle Kamdem",
    designation: "Directrice Technique",
    company: "456 Enterprises",
    image: "/daughter.jpg",
  },
];

const projects = [
  {
    name: "Projets GitHub",
    description:
      "Projets personnels et collaboratifs sur GitHub, démontrant mes compétences en développement web full-stack.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "laravel", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Frankam487",
  },
  {
    name: "Omiie Technologies",
    description:
      "Application web pour l'achat de matériel électronique et la consultation des tarifs de vente et de maintenance.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindCSS", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: "/omi.jpg",
    source_code_link: "https://omiie.devfack.com",
  },
  {
    name: "Projets JavaScript",
    description:
      "Projets personnels (Jeux applications, sites web, etc.) développé en javascript sur GitHub, démontrant mes compétences dans ce domaine.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: "/js.png",
    source_code_link: "https://github.com/Frankam487",
  },
];

export { services, technologies, experiences, testimonials, projects };

