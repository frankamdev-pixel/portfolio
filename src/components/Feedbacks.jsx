import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 sm:p-10 rounded-3xl w-full max-w-[90vw] xs:w-[320px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <p className="text-white font-black text-[36px] sm:text-[48px]">"</p>

    <p className="mt-2 text-white tracking-wide text-[16px] sm:text-[18px] break-words">{testimonial}</p>

    <div className="mt-5 sm:mt-7 flex justify-between items-center gap-2">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[14px] sm:text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[10px] sm:text-[12px]">
          {designation} de {company}
        </p>
      </div>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => (
  <div className="mt-12 bg-black-100 rounded-[20px]">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] text-center`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Ce que les autres disent...</p>
        <h2 className={styles.sectionHeadText}>Témoignages.</h2>
      </motion.div>
    </div>

    <div className={`-mt-16 sm:-mt-20 pb-10 sm:pb-14 ${styles.paddingX} flex flex-wrap gap-4 sm:gap-7 justify-center`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "");
