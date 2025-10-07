// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <div className="bg-tertiary p-3 sm:p-4 md:p-5 rounded-2xl w-full max-w-[320px] sm:max-w-[360px] mx-2 sm:mx-0">
//       <div className="relative w-full h-[200px] sm:h-[230px]">
//         <a href={source_code_link} target="_blank" rel="noreferrer">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-lg"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </a>
//       </div>
//       <div className="flex justify-center my-3 sm:my-4">
//         <a
//           href={source_code_link}
//           target="_blank"
//           className="text-lg sm:text-xl text-blue-400 font-bold hover:text-blue-300 transition-colors"
//         >
//           Voir Plus <span className="no-underline">🤞🤞</span>
//         </a>
//       </div>
//       <div className="mt-3 sm:mt-5">
//         <h3 className="text-white font-bold text-[20px] sm:text-[24px] text-center">
//           {name}
//         </h3>
//         <p className="mt-2 text-secondary text-[13px] sm:text-[14px] text-center leading-relaxed">
//           {description}
//         </p>
//       </div>

//       <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2 justify-center">
//         {tags.map((tag) => (
//           <p
//             key={`${name}-${tag.name}`}
//             className={`text-[12px] sm:text-[14px] ${tag.color}`}
//           >
//             #{tag.name}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };
// const Works = () => {
//   return (
//     <div className="min-h-screen">
//       <div>
//         <p className={`${styles.sectionSubText} `}>Mon travail</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
//       </div>

//       <div className="w-full flex justify-center">
//         <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] text-center px-4">
//           Les projets suivants montrent mes compétences et mon expérience à
//           travers des exemples concrets de mon travail. Chaque projet est
//           brièvement décrit avec des liens vers les dépôts de code et les démos
//           en ligne. Cela reflète ma capacité à résoudre des problèmes complexes,
//           à travailler avec différentes technologies et à gérer des projets
//           efficacement.
//         </p>
//       </div>

//       <div className="mt-16 sm:mt-20 flex flex-wrap gap-4 sm:gap-7 justify-center">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
        
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Works, "work");



import React from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-5 w-full max-w-[90vw] sm:max-w-[360px] mx-2 sm:mx-0 shadow-sm flex flex-col items-center transition-all duration-300 hover:shadow-md">
      
      {/* Trait minimaliste haut */}
      <div className="w-12 h-[2px] bg-white/40 rounded-full mb-4"></div>

      {/* Image */}
      <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden">
        <a href={source_code_link} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute top-2 right-2">
            <div className="bg-white/20 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/30 transition-colors">
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </a>
      </div>

      {/* Nom et description */}
      <div className="mt-4 text-center flex flex-col items-center px-2">
        <h3 className="text-white text-[19px] sm:text-[22px] font-semibold">{name}</h3>
        <p className="mt-1 text-gray-300 text-[13px] sm:text-[14px] leading-relaxed break-words">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <span key={`${name}-${tag.name}`} className={`text-[12px] sm:text-[13px] ${tag.color} bg-white/10 px-2 py-1 rounded-full`}>
            #{tag.name}
          </span>
        ))}
      </div>

      {/* Trait minimaliste bas */}
      <div className="mt-4 w-10 h-[1px] bg-white/30 rounded-full"></div>

      {/* Bouton Voir Plus */}
      <a
        href={source_code_link}
        target="_blank"
        className="mt-3 text-blue-400 font-semibold hover:text-blue-300 transition-colors text-base sm:text-lg"
      >
        Voir Plus
      </a>
    </div>
  );
};

const Works = () => {
  return (
    <div className="min-h-screen px-4 sm:px-0">
      <div className="text-center">
        <p className={`${styles.sectionSubText}`}>Mon travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
      </div>

      <div className="w-full flex justify-center">
        <p className="mt-3 text-secondary text-[15px] sm:text-[16px] max-w-3xl leading-[28px] sm:leading-[30px] text-center break-words px-2 sm:px-0">
          Voici quelques exemples de projets illustrant mes compétences. Chaque projet montre mon approche et mes choix techniques de façon claire et concise.
        </p>
      </div>

      <div className="mt-16 sm:mt-20 flex flex-wrap gap-4 sm:gap-6 justify-center items-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
