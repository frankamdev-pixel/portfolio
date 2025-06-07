import { FaWhatsapp, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-blue-950 to-transparent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold  mb-4 text-cyan-200">
              Frank Kamgang
            </h3>
            <p className="text-blue-200 mt-12">
              Développeur Web & Graphiste{" "}
              <span className="text-cyan-600 font-bold text-2xl">.</span> <br />{" "}
              passionné par React, Laravel <br /> et le design{" "}
              <span className="text-cyan-600 font-bold text-2xl">.</span>
            </p>
          </div>

          <div className=" flex flex-col">
            <h3 className="text-3xl font-semibold mb-4 text-center text-cyan-200">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li className="text-center">
                <a
                  href="#project"
                  className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
                >
                  Projets
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#about"
                  className="text-blue-200 text-center hover:text-blue-400 transition-colors duration-300"
                >
                  À propos
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#contact"
                  className="text-blue-200 text-center hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl text-cyan-200 font-semibold mb-4">
              Suivez-moi
            </h3>
            <div className="flex items-center md:mt-10 ml-4 justify-center md:justify-start space-x-4 text-2xl">
              <a
                href="https://linkedin.com/in/frank-kamgang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-400 transition-colors duration-300"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://github.com/Frankamdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+237690461830"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-blue-400 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://youtube.com/@FrankamDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-blue-400 transition-colors duration-300"
              >
                <IoLogoYoutube />
              </a>
              <a
                href="https://t.me/Frankam4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-400 transition-colors duration-300"
              >
                
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-4 text-center text-blue-200">
          <p>&copy; 2025 Frank Kamgang. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
