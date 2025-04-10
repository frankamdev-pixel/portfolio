import React, { useRef, useState } from "react"; // Importation des hooks React
import { motion } from "framer-motion"; // Importation de la bibliothèque d'animation
import emailjs from "@emailjs/browser"; // Importation de EmailJS pour envoyer des emails

import { styles } from "../styles"; // Import des styles
import { EarthCanvas } from "./canvas"; // Import de la scène 3D de la Terre
import { SectionWrapper } from "../hoc"; // HOC pour wrapper la section
import { slideIn } from "../utils/motion"; // Fonction d'animation pour le slide

const Contact = () => {
  const formRef = useRef(); // Utilisation de useRef pour référencer le formulaire
  const [form, setForm] = useState({ // Initialisation du formulaire avec les champs name, email, message
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // État pour gérer l'envoi (chargement)

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setLoading(true); // Active le mode chargement

    // Envoi de l'email via EmailJS
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // ID du service EmailJS
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // ID du modèle EmailJS
        {
          from_name: form.name,
          to_name: "JavaScript Mastery", // Nom du destinataire
          from_email: form.email,
          to_email: "sujata@jsmastery.pro", // Email du destinataire
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Clé publique de l'API EmailJS
      )
      .then(
        () => {
          setLoading(false); // Désactive le mode chargement
          alert("Merci. Je reviendrai vers vous dès que possible.");

          // Réinitialise le formulaire après l'envoi
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Désactive le mode chargement
          console.error(error);

          alert("Oups, quelque chose a mal tourné. Veuillez réessayer.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} // Disposition du formulaire et de la scène 3D
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Animation de la section contact
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contactez-nous</p> {/* Sous-titre */}
        <h3 className={styles.sectionHeadText}>Contact.</h3> {/* Titre principal */}

        <form
          ref={formRef}
          onSubmit={handleSubmit} // Gestion de la soumission du formulaire
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Nom</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange} // Met à jour le champ 'name'
              placeholder="Quel est votre prénom ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange} // Met à jour le champ 'email'
              placeholder="Quel est votre adresse email ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange} // Met à jour le champ 'message'
              placeholder="Que souhaitez-vous dire ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Envoi..." : "Envoyer"} {/* Affichage du bouton selon l'état de chargement */}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Animation pour l'affichage de la scène 3D
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas /> {/* Affichage de la scène 3D de la Terre */}
      </motion.div>
    </div>
  );
};

// SectionWrapper est un HOC qui ajoute un style ou une fonctionnalité supplémentaire à la section 'Contact'
export default SectionWrapper(Contact, "contact");
