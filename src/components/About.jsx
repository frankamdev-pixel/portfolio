import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles"; // Import des styles
import { services } from "../constants"; // Import des services à afficher
import { SectionWrapper } from "../hoc"; // HOC (Composant Ordinaire de Haut Niveau) pour wrapper la section
import { fadeIn, textVariant } from "../utils/motion"; // Fonctions d'animation

// Composant pour afficher chaque service
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Animation pour l'apparition du service
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title} // Remplace 'web-development' par le titre pour plus de flexibilité
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title} {/* Affiche le titre du service */}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu <span className="text-cyan-400">.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un développeur logiciel qualifié avec de l'expérience en TypeScript et
        JavaScript, ainsi qu'une expertise dans des frameworks comme React, Node.js et
        Three.js. Je suis un apprenant rapide et je collabore étroitement avec les clients pour
        créer des solutions efficaces, évolutives et conviviales qui résolvent
        des problèmes réels. Travaillons ensemble pour concrétiser vos idées !
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> // Affichage des services de manière dynamique
        ))}
      </div>
    </>
  );
};

// SectionWrapper est un HOC qui ajoute un style ou une fonctionnalité supplémentaire à la section 'About'
export default SectionWrapper(About, "about");
