import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Tilt
      tiltMaxAngleX={isMobile ? 0 : 20}
      tiltMaxAngleY={isMobile ? 0 : 20}
      scale={1.05}
      transitionSpeed={400}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={isMobile ? { initial: { opacity: 0 }, animate: { opacity: 1 } } : fadeIn("right", "spring", index * 0.3, 0.6)}
        className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 p-[1px] rounded-xl shadow-lg"
      >
        <div className="bg-[#151030] backdrop-blur-md rounded-xl py-6 px-6 flex flex-col items-center justify-center min-h-[280px] hover:scale-105 transition-transform duration-300">
          <img src={icon} alt={title} className="w-14 h-14 mb-4 object-contain" />
          <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Aperçu <span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
      >
        Développeur passionné, je crée des applications web fluides et modernes avec React, Node.js et Three.js. Mon objectif : des expériences rapides, efficaces et agréables pour tous les utilisateurs, même sur mobile.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {services.slice(0, 6).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
