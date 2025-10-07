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
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255,255,255,0.08)", // style permanent
        backdropFilter: "blur(14px)",
        color: "#fff",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 6px 25px rgba(0,0,0,0.25)",
        padding: "22px 26px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.15)" }}
      date={experience.date}
      iconStyle={{
        background: `linear-gradient(135deg, ${experience.iconBg}, #6c63ff)`,
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div
        variants={
          isMobile
            ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
            : fadeIn("up", "spring", index * 0.2, 0.6)
        }
        whileHover={{
          boxShadow: "0 0 25px rgba(255,255,255,0.2)",
        }}
        className="relative shadow-[0_0_25px_rgba(255,255,255,0.2)] group transition-all duration-300 ease-out"
      >
        {/* Trait lumineux en haut */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-[1px]" />

        <div className="flex flex-col gap-1">
          <h3 className="text-white text-[22px] font-bold leading-tight">{experience.title}</h3>
          <p className="text-gray-300 text-[15px] font-medium">{experience.company_name}</p>
        </div>

        <ul className="mt-4 list-disc ml-5 space-y-1">
          {experience.points.map((point, idx) => (
            <li
              key={`exp-point-${idx}`}
              className="text-gray-200 text-[14px] tracking-wide leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Trait blanc stylé en bas */}
        <div className="mt-5 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const displayedExperiences = isMobile ? experiences.slice(0, 4) : experiences;

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Ce que j'ai accompli jusqu'à présent</p>
        <h2 className={`${styles.sectionHeadText}`}>Expérience Professionnelle.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline lineColor="rgba(255,255,255,0.25)">
          {displayedExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
