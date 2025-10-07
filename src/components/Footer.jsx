// import { FaWhatsapp, FaGithub } from "react-icons/fa6";
// import { CiLinkedin } from "react-icons/ci";
// import { FaTelegram } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";

// function Footer() {

//   return (
//     <>
//       <footer className="py-8 bg-white/10 backdrop-blur-[1px] border-t border-white/10 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
//             <div>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">
//                 Frank Kamgang
//               </h3>
//               <p className="text-blue-200 mt-4 sm:mt-8 text-sm sm:text-base">
//                 Développeur Web & Graphiste{" "}
//                 <span className="text-cyan-600 font-bold text-xl sm:text-2xl">
//                   .
//                 </span>{" "}
//                 <br /> passionné par React, Laravel <br /> et le design{" "}
//                 <span className="text-cyan-600 font-bold text-xl sm:text-2xl">
//                   .
//                 </span>
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-cyan-200">
//                 Liens rapides
//               </h3>
//               <ul className="space-y-2">
//                 <li className="text-center">
//                   <a
//                     href="#project"
//                     className="text-blue-200 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
//                   >
//                     Projets
//                   </a>
//                 </li>
//                 <li className="text-center">
//                   <a
//                     href="#about"
//                     className="text-blue-200 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
//                   >
//                     À propos
//                   </a>
//                 </li>
//                 <li className="text-center">
//                   <a
//                     href="#contact"
//                     className="text-blue-200 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-2xl sm:text-3xl text-cyan-200 font-semibold mb-4 text-center md:text-left">
//                 Suivez-moi
//               </h3>
//               <div className="flex items-center md:mt-6 lg:mt-10 justify-center md:justify-start space-x-4 text-xl sm:text-2xl">
//                 <a
//                   href="https://linkedin.com/in/frank-kamgang"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   <CiLinkedin />
//                 </a>
//                 <a
//                   href="https://github.com/Frankamdev"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-black hover:text-blue-400 transition-colors duration-300"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://wa.me/+237690461830"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-green-600 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   <FaWhatsapp />
//                 </a>
//                 <a
//                   href="https://youtube.com/@FrankamDev"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-red-600 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   <IoLogoYoutube />
//                 </a>
//                 <a
//                   href="https://t.me/Frankam4"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   <FaTelegram />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 border-t border-blue-800 pt-4 text-center text-blue-200">
//             <p>&copy; 2025 Frank Kamgang. Tous droits réservés.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;




import { FaWhatsapp, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 bg-white/5 backdrop-blur-[1px] border-t border-white/10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Info perso */}
          <div>
            <h3 className="text-3xl font-bold text-cyan-300 mb-3">Frank Kamgang</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Développeur Web & Graphiste <br />
              Passionné par <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Laravel</span> et le design.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-3">Liens rapides</h3>
            <ul className="space-y-2">
              {["Projets", "À propos", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-3">Suivez-moi</h3>
            <div className="flex space-x-4 text-xl sm:text-2xl mt-2">
              <a href="https://linkedin.com/in/frank-kamgang" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-4xl transition-colors duration-300"><CiLinkedin /></a>
              <a href="https://github.com//frankamdev-pixel" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-4xl transition-colors duration-300"><FaGithub /></a>
              <a href="https://wa.me/+237690461830" target="_blank" rel="noopener noreferrer" className="text-green-500 text-4xl transition-colors duration-300"><FaWhatsapp /></a>
              <a href="https://youtube.com/@FrankamDev" target="_blank" rel="noopener noreferrer" className="text-red-500 transition-colors text-4xl duration-300"><IoLogoYoutube /></a>
              <a href="https://t.me/Frankam4" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-4xl transition-colors duration-300"><FaTelegram /></a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-gray-400 text-sm">
          &copy; 2025 Frank Kamgang. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
