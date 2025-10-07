
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
  
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const { name, email, message } = form;
//     const phoneNumber = "237690461830";

//     if (!name || !email || !message) {
//       alert("Veuillez remplir tous les champs !");
//       setLoading(false);
//       return;
//     }

//     const text = `Nom: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

//     window.open(whatsappURL, "_blank");

//     setLoading(false);
//     alert("Merci, votre message a été envoyé sur WhatsApp !");

//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-4 sm:p-8 rounded-2xl"
//       >
//         <div className="bg-white/10 backdrop-blur-[1px] border border-white/10 p-4 sm:p-6 text-white rounded-lg">
//           <p className={styles.sectionSubText}>Contactez-nous</p>
//           <h3 className={styles.sectionHeadText}>Contact.</h3>
//           <div className="w-full max-w-[500px] mx-auto">
//             <form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
//             >
//               <label className="flex flex-col">
//                 <span className="text-white font-medium mb-2 sm:mb-4">Votre Nom</span>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Quel est votre prénom ?"
//                   className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary w-full text-white outline-none border-none font-medium rounded-lg"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-white font-medium mb-2 sm:mb-4">Votre email</span>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="Quel est votre adresse email ?"
//                   className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary w-full text-white outline-none border-none font-medium rounded-lg"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-white font-medium mb-2 sm:mb-4">
//                   Votre Message
//                 </span>
//                 <textarea
//                   style={{ resize: "none" }}
//                   rows={5}
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Que souhaitez-vous dire ?"
//                   className="bg-tertiary w-full py-3 sm:py-4 px-4 sm:px-6 shadow-md placeholder:text-secondary text-white outline-none border-none font-medium rounded-lg"
//                 />
//               </label>
//               <button
//                 type="submit"
//                 className="bg-tertiary py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-opacity-80 transition-all duration-300"
//               >
//                 {loading ? "Envoi..." : "Envoyer"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");




import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = form;
    const phoneNumber = "237690461830";

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs !");
      setLoading(false);
      return;
    }

    const text = `Nom: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
    setLoading(false);
    alert("Merci, votre message a été envoyé sur WhatsApp !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      
      {/* Formulaire */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl shadow-md"
      >
        <div className="text-center sm:text-left">
          <p className={`${styles.sectionSubText}`}>Contactez-moi</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {["name", "email", "message"].map((field) => (
            <label key={field} className="flex flex-col">
              <span className="text-white font-medium mb-2 capitalize">
                {field === "name" ? "Votre Nom" : field === "email" ? "Votre Email" : "Votre Message"}
              </span>
              {field !== "message" ? (
                <input
                  type={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={field === "name" ? "Entrez votre nom" : "Entrez votre email"}
                  className="bg-white/10 backdrop-blur-sm py-3 px-4 sm:px-6 rounded-2xl text-white placeholder:text-gray-400 outline-none border border-white/10 focus:border-cyan-400 transition-all duration-300"
                />
              ) : (
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Que souhaitez-vous dire ?"
                  className="bg-white/10 backdrop-blur-sm py-3 px-4 sm:px-6 rounded-2xl text-white placeholder:text-gray-400 outline-none border border-white/10 focus:border-cyan-400 transition-all duration-300 resize-none"
                />
              )}
            </label>
          ))}

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-6 sm:px-8 rounded-2xl shadow-lg shadow-cyan-300/30 transition-all duration-300 w-fit mx-auto sm:mx-0"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      {/* Canvas Terre */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
