import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-3 sm:p-4 md:p-5 rounded-2xl w-full max-w-[320px] sm:max-w-[360px] mx-2 sm:mx-0"
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <a href={source_code_link} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center my-3 sm:my-4">
          <a
            href={source_code_link}
            target="_blank"
            className="text-lg sm:text-xl text-blue-400 font-bold hover:text-blue-300 transition-colors"
          >
            Voir Plus <span className="no-underline">🤞🤞</span>
          </a>
        </div>
        <div className="mt-3 sm:mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px] text-center">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] text-center leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2 justify-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  console.log("Works component rendering, projects:", projects.length);
  
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>Mon travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
      </div>

      <div className="w-full flex justify-center">
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] text-center px-4">
          Les projets suivants montrent mes compétences et mon expérience à
          travers des exemples concrets de mon travail. Chaque projet est
          brièvement décrit avec des liens vers les dépôts de code et les démos
          en ligne. Cela reflète ma capacité à résoudre des problèmes complexes,
          à travailler avec différentes technologies et à gérer des projets
          efficacement.
        </p>
      </div>

      <div className="mt-16 sm:mt-20 flex flex-wrap gap-4 sm:gap-7 justify-center">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <div className="text-white text-center">
            <p>Aucun projet trouvé</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
