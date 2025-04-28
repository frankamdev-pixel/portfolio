import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; 
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css"; 

import { styles } from "../styles"; 
import { experiences } from "../constants"; 
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion"; 

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", 
        color: "#fff", // Couleur du texte
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }} // Style de la flèche de l'élément
      date={experience.date} // Date de l'expérience
      iconStyle={{ background: experience.iconBg }} // Style de l'icône (couleur de fond)
      icon={ 
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon} // Icône de l'entreprise ou du projet
            alt={experience.company_name} // Texte alternatif pour l'icône
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3> {/* Titre de l'expérience */}
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name} {/* Nom de l'entreprise */}
        </p>
      </div>


      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point} 
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Ce que j'ai accompli jusqu'à présent {/* Sous-titre */}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Expérience Professionnelle. {/* Titre principal */}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// SectionWrapper est un HOC qui ajoute un style ou une fonctionnalité supplémentaire à la section 'Experience'
export default SectionWrapper(Experience, "work");
