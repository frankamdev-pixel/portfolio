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
  jobit,
  tripguide,
  threejs,
  // laravel2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travaux",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur ReactJS",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Créateur de Contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: javascript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "Développeur React.js",
    company_name: "Ecole Supérieure La Canadienne",
    icon: starbucks, 
    iconBg: "#383E56",
    date: "Mars 2020 - Avril 2021",
    technologies: ["React.js", "JavaScript", "CSS"],
    location: "Cameroun, Bafoussam",
    points: [
      "Conception et développement d'interfaces utilisateur dynamiques avec React.js, en intégrant des composants réutilisables.",
      "Collaboration avec les designers pour transformer des maquettes Figma en applications responsives.",
      "Optimisation des performances des applications en utilisant des techniques comme le lazy loading et la mémorisation.",
      "Participation active aux revues de code pour garantir la qualité et la cohérence du code.",
    ],
  },
  {
    title: "Développeur JavaScript",
    company_name: "Ecole Supérieure La Canadienne",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janvier 2021 - Février 2022",
    technologies: ["JavaScript", "React.js", "Redux Toolkit"],
    location: "Bafoussam, Cameroun",
    points: [
      "Développement de fonctionnalités complexes avec JavaScript et Redux Toolkit pour une gestion d'état centralisée.",
      "Intégration d'API REST pour connecter le front-end aux services back-end développés en PHP.",
      "Mise en œuvre de tests unitaires avec Jest pour assurer la robustesse des applications.",
      "Collaboration avec l'équipe produit pour prioriser les fonctionnalités selon les besoins utilisateurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Ecole Supérieure La Canadienne",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    technologies: ["React.js", "TypeScript", "PHP"],
    location: "Bafoussam, Cameroun",
    points: [
      "Migration d'applications JavaScript vers TypeScript pour améliorer la maintenabilité et la sécurité du code.",
      "Développement de back-ends légers en PHP pour supporter les fonctionnalités front-end.",
      "Mise en place de designs responsives avec Tailwind CSS, garantissant une compatibilité multi-navigateurs.",
      "Mentorat de stagiaires sur les bonnes pratiques de développement web.",
    ],
  },
  {
    title: "Développeur Front-End",
    company_name: "Ecole Supérieure La Canadienne",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - Présent",
    technologies: ["React.js", "TypeScript", "Three.js", "Redux Toolkit"],
    location: "Bafoussam, Cameroun",
    points: [
      "Création d'expériences 3D interactives avec Three.js pour des projets de visualisation immersive.",
      "Optimisation de la gestion d'état avec Redux Toolkit pour des applications à grande échelle.",
      "Développement de composants TypeScript réutilisables, réduisant les bugs liés aux types.",
      "Collaboration avec les équipes UX/UI pour intégrer des animations fluides et améliorer l'expérience utilisateur.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site aussi beau que notre produit, mais Frank m'a prouvé le contraire.",
    name: "Frank Kamgang",
    designation: "Directeur General",
    company: "Omiie solutions",
    // image: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "./me.jpg",
  },
  {
    testimonial:
    "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Frank.",
    name: "Herman WAFFO",
    designation: "Directeur des opérations",
    company: "S.A.B.C",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image: "./ball.jpg",
    
  },
  {
    testimonial:
    "Après l'optimisation de notre site web par Frank, notre trafic a augmenté de 50 %. Nous ne le remercierons jamais assez !",
    name: "Jodelle Kamdem",
    designation: "Directrice technique",
    company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/men/6.jpg",
    image: "./daughter.jpg",
  },
];

const projects = [
  {
    name: "Projets Github",
    description:
      "Présentation de projets personnels et collaboratifs disponibles sur GitHub, mettant en avant mes compétences en développement web full-stack.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Frankam487",
  },
  {
    name: "Omiie Technologies",
    description:
      "Application web permettant aux utilisateurs d'acheter du materiel électronique, de consulter les fourchettes de prix estimées pour les postes et de vente et de la maintenance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "./omi.jpg",
    // image: jobit,
    source_code_link: "https://www.omiie.devfack.com/",
  },
  {
    name: "Projets Javascript",
    description:
      "Une plateforme de réservation de voyages complète permettant aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et offrant des recommandations personnalisées pour les destinations populaires.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "./js.png",
    // image: javascript,
    source_code_link: "https://github.com/Frankam487",
  },
];

export { services, technologies, experiences, testimonials, projects };
