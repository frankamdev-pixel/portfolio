import { FaWhatsapp, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-blue-950 to-transparent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">Frank Kamgang</h3>
            <p className="text-blue-200">
              Développeur Web & Graphiste passionné par React, Laravel et le
              design.
            </p>
          </div>

          <div className=" flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-center text-cyan-200">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li className="text-left">
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
            <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <a
                href="https://linkedin.com/in/frank-kamgang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://github.com/Frankamdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+237690461830"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://youtube.com/@FrankamDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
              >
                <IoLogoYoutube />
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
