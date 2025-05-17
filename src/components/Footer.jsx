function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Conteneur principal avec grille pour structurer le contenu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Section 1 : Branding / Nom */}
          <div>
            <h3 className="text-xl font-bold mb-4">Frank Kamgang</h3>
            <p className="text-blue-200">
              Développeur Web & Graphiste passionné par React, Laravel et le design.
            </p>
          </div>

          {/* Section 2 : Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projets"
                  className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#a-propos"
                  className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 : Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://linkedin.com/in/frank-kamgang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-2.5 15.5v-5.3c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.4v6.6h-2.3V8.5h2.2v1.3c.3-.5 1-1.2 2.2-1.2 1.6 0 2.8 1 2.8 3.2v6.7h-2.3zM6.5 8.2c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm2.3 10.3V8.5H6.5v10h2.3z" />
                </svg>
              </a>
              <a
                href="https://github.com/frank-kamgang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2A10 10 0 002 12c0 4.4 2.9 8.1 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.6 5.4-5.1 5.7.4.3.7 1 .7 2.1v3.1c0 .3.2.6.7.5A10 10 0 0022 12 10 10 0 0012 2z" />
                </svg>
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