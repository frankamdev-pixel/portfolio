import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto min-h-screen md:h-screen overflow-hidden">
      <div
        className={`my-24 inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, je suis <span className="text-[#915EFF]">Frank Kamgang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je développe des visuels 3D, des interfaces utilisateur
            <br className="sm:block hidden" /> et des applications web
          </p>
        </div>

        
      </div>

      <div className="absolute mt-4 bottom-0 flex items-center w-full h-[100% sm:h-[70%]">
        {/* <ComputersCanvas /> */}
        <img
          src="/okii.png"
          alt="Photoo"
          className="md:ml-[12rem] mt-[12rem] text-center text-cyan-200 h-[20%] w-[40%] rounded-full"
        />
        
      </div>
      <div className="absolute xs:bottom-8 bottom-24 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-between">
//       <div
//         className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-row items-start gap-3 sm:gap-5 mt-20 sm:mt-24`}
//       >
//         <div className="flex flex-col justify-center items-center mt-2">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div className="flex-1">
//           <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
//             Hey, je suis <br className="sm:hidden" />{" "}
//             <span className="text-[#915EFF]">Frank Kamgang</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-3 sm:mt-4 text-white-100`}>
//             Je développe des visuels 3D, des interfaces utilisateur
//             <br className="sm:block hidden" /> et des applications web
//           </p>
//         </div>
//       </div>

      // <div className="w-full flex justify-center mt-10">
      //   <a
      //     href="./assets/cv.pdf"
      //     download
      //     className="text-cyan-300 text-2xl font-bold"
      //   >
      //     <span className="font-boder">Télécharger</span> le CV
      //     <img src="./assets/downloadd.png" alt="download" className="ml-2" />
      //   </a>
      // </div>

//       {/* Image */}
//       <div className="w-full flex justify-center mt-10">
//         <ComputersCanvas />
//         <img
//           src="/oki.jpg"
//           alt="Photo"
//           className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto object-cover rounded-xl shadow-2xl"
//         />
//       </div>

//       {/* Scroll indicator */}
//       <div className="w-full flex justify-center items-center mb-6">
//         <a href="#about" aria-label="Scroll to About section">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;