
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { HiDownload } from "react-icons/hi";

// export default function DownloadCVButton({
//   href = "cv.pdf",
//   fileName = "cv.pdf",
//   className = "",
// }) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [isDownloaded, setIsDownloaded] = useState(false);

//   const handleClick = (e) => {
//     setIsDownloaded(true);
//     setTimeout(() => setIsDownloaded(false), 2000);
//   };

//   return (
//     <motion.a
//       href={href}
//       download={fileName}
//       role="button"
//       aria-label="Télécharger le CV de Frank Kamgang"
//       className={`
//         ${className}
//         relative inline-flex items-center gap-4 rounded-3xl
//         bg-gradient-to-r from-[#1e3a8a]/95 via-[#3730a3]/95 to-[#7c3aed]/95
//         backdrop-blur-xl border border-white/15
//         px-8 py-5 font-semibold text-white overflow-hidden
//         shadow-[0_20px_60px_rgba(30,58,138,0.4)]
//         group transition-all duration-500 ease-out
//         hover:shadow-[0_35px_80px_rgba(124,58,237,0.5)]
//         active:shadow-[0_15px_40px_rgba(30,58,138,0.6)]
//         before:absolute before:inset-0 before:rounded-3xl
//         before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-600/20
//         before:scale-[0.8] before:origin-center before:transition-all
//         hover:before:scale-125 before:duration-1000 before:ease-out
//       `}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       }}
//       onClick={handleClick}
//       whileHover={{
//         scale: 1.08,
//         y: -2,
//         boxShadow: "0 35px 80px rgba(124, 58, 237, 0.5)"
//       }}
//       whileTap={{ scale: 0.92, y: 0 }}
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* MOUSE FOLLOWER - RADIAL GLOW */}
//       <motion.div
//         className="absolute inset-0 rounded-3xl pointer-events-none"
//         style={{
//           background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px,
//             rgba(255,255,255,0.25) 0%,
//             rgba(255,255,255,0.1) 30%,
//             transparent 70%)`,
//         }}
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.8, 1, 0.8]
//         }}
//         transition={{ duration: 0.4, repeat: Infinity }}
//       />

//       {/* COSMIC PARTICLES SYSTEM */}
//       {[...Array(12)].map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-[3px] h-[3px] bg-gradient-to-b from-white to-blue-400/50 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -15, 0],
//             x: [0, Math.random() * 10 - 5, 0],
//             opacity: [0.2, 1, 0.2],
//             rotate: 360,
//           }}
//           transition={{
//             duration: 4 + Math.random() * 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.15,
//           }}
//         />
//       ))}

//       {/* CONTENT */}
//       <div className="relative z-10 flex items-center gap-4">
//         {/* DOWNLOAD PORTAL */}
//         <motion.div
//           className="relative flex items-center justify-center rounded-2xl bg-white/10 p-4 border border-white/30"
//           whileHover={{
//             rotate: 360,
//             scale: 1.2,
//             boxShadow: "0 0 25px rgba(255,255,255,0.3)"
//           }}
//           transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
//           style={{
//             background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
//           }}
//         >
//           <HiDownload className="h-6 w-6 text-white drop-shadow-lg" aria-hidden="true" />
//           {/* PULSE RING */}
//           <motion.div
//             className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/40 to-purple-500/40"
//             animate={{
//               scale: [1, 1.4, 1],
//               opacity: [0.6, 1, 0.6]
//             }}
//             transition={{ duration: 2.5, repeat: Infinity }}
//           />
//         </motion.div>

//         {/* DYNAMIC TEXT */}
//         <motion.div
//           className="flex flex-col leading-tight"
//           initial={{ x: -15 }}
//           animate={{ x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <motion.span
//             className="text-base font-bold tracking-wide"
//             animate={{
//               y: [0, -1.5, 0],
//               textShadow: isDownloaded ? "0 0 10px rgba(34,197,94,0.8)" : "0 0 5px rgba(255,255,255,0.5)"
//             }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               color: {
//                 backgroundColor: isDownloaded ? "#10b981" : "transparent",
//                 duration: 0.2
//               }
//             }}
//           >
//             {isDownloaded ? "✓ Téléchargé !" : "Télécharger"}
//           </motion.span>
//           <motion.span
//             className="text-sm opacity-90 font-medium"
//             animate={{
//               scale: isDownloaded ? [1, 1.1, 1] : 1
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             {isDownloaded ? "Prêt à briller !" : "Mon CV"}
//           </motion.span>
//         </motion.div>

//         {/* INFINITE PROGRESS ARC */}
//         <motion.div
//           className="ml-4 w-10 h-10 relative"
//           initial={{ rotate: -90 }}
//           animate={{ rotate: isDownloaded ? 270 : [-90, 270] }}
//           transition={{
//             duration: isDownloaded ? 0.3 : 3,
//             repeat: isDownloaded ? 0 : Infinity,
//             ease: "linear"
//           }}
//         >
//           <svg className="w-full h-full" viewBox="0 0 36 36">
//             <motion.path
//               d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="rgba(255,255,255,0.2)"
//               strokeWidth="2"
//             />
//             <motion.path
//               d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke={isDownloaded ? "#10b981" : "url(#gradient)"}
//               strokeWidth="2"
//               strokeLinecap="round"
//               animate={{
//                 pathLength: isDownloaded ? 1 : [0, 1]
//               }}
//               transition={{
//                 duration: isDownloaded ? 0.3 : 3,
//                 repeat: isDownloaded ? 0 : Infinity,
//                 ease: "linear"
//               }}
//             />
//           </svg>
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#3b82f6" />
//               <stop offset="50%" stopColor="#8b5cf6" />
//               <stop offset="100%" stopColor="#ec4899" />
//             </linearGradient>
//           </defs>
//         </motion.div>
//       </div>

//       {/* 3D SHIMMER */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
//         animate={{
//           x: isDownloaded ? ["100%", "0%"] : ["100%", "-100%", "100%"]
//         }}
//         transition={{
//           duration: isDownloaded ? 0.5 : 3.5,
//           repeat: isDownloaded ? 1 : Infinity,
//           ease: "linear"
//         }}
//       />

//       {/* SUCCESS BURST - DOWNLOAD CONFIRM */}
//       {isDownloaded && (
//         <motion.div
//           className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/30 to-emerald-500/30"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {[...Array(8)].map((_, i) => (
//             <motion.span
//               key={i}
//               className="absolute w-2 h-2 bg-white rounded-full"
//               style={{
//                 left: "50%",
//                 top: "50%",
//                 transform: `rotate(${i * 45}deg) translateX(50px)`
//               }}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{
//                 opacity: [1, 0],
//                 scale: [1, 1.5],
//                 x: [0, Math.cos(i * Math.PI / 4) * 100],
//                 y: [0, Math.sin(i * Math.PI / 4) * 100]
//               }}
//               transition={{ duration: 0.6, delay: i * 0.05 }}
//             />
//           ))}
//         </motion.div>
//       )}
//     </motion.a>
//   );
// }











// DownloadCVButton.jsx — ULTRA PRO "Titanium Edition"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

export default function DownloadCVButton({
  href = "/public/cv.pdf",
  fileName = "cv.pdf",
  className = "",
}) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleClick = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000);
  };

  return (
    <motion.a
      href={href}
      download={fileName}
      role="button"
      aria-label="Télécharger le CV de Frank Kamgang"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className={`
        ${className}
        relative inline-flex items-center justify-center gap-4 rounded-3xl
        bg-gradient-to-r from-[#1a1f3d] via-[#312e81] to-[#5b21b6]
        text-white font-semibold px-8 py-5 overflow-hidden border border-white/10
        shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-700
        hover:shadow-[0_0_60px_rgba(147,51,234,0.6)] backdrop-blur-xl
      `}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 💫 Halo dynamique suivant la souris */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.18), transparent 70%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* ✨ Particules flottantes */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[3px] h-[3px] bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 1, 0.2],
            rotate: 360,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 💎 Contenu principal */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Icône de téléchargement avec halo 3D */}
        <motion.div
          className="relative flex items-center justify-center rounded-2xl bg-white/10 p-4 border border-white/20"
          whileHover={{
            rotate: 360,
            scale: 1.2,
            boxShadow: "0 0 30px rgba(255,255,255,0.3)",
          }}
          transition={{ duration: 0.9, type: "spring" }}
        >
          <HiDownload className="h-6 w-6 text-white" />
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/40 to-purple-500/40"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Texte animé */}
        <motion.div className="flex flex-col leading-tight">
          <motion.span
            className="text-base font-bold tracking-wide"
            animate={{
              color: isDownloaded ? "#10b981" : "#fff",
              textShadow: isDownloaded
                ? "0 0 12px rgba(34,197,94,0.9)"
                : "0 0 6px rgba(255,255,255,0.6)",
            }}
            transition={{ duration: 0.3 }}
          >
            {isDownloaded ? "✓ Téléchargé" : "Télécharger"}
          </motion.span>
          <motion.span
            className="text-sm opacity-85 font-medium"
            animate={{
              opacity: isDownloaded ? [1, 0.8, 1] : 1,
            }}
            transition={{ duration: 1.2, repeat: isDownloaded ? Infinity : 0 }}
          >
            {isDownloaded ? "Merci 🙌" : "Mon CV"}
          </motion.span>
        </motion.div>

        {/* Arc de progression */}
        <motion.div
          className="ml-3 w-10 h-10 relative"
          animate={{
            rotate: isDownloaded ? 270 : [0, 360],
          }}
          transition={{
            duration: isDownloaded ? 0.5 : 3,
            repeat: isDownloaded ? 0 : Infinity,
            ease: "linear",
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
            />
            <motion.path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={isDownloaded ? "#10b981" : "url(#gradient)"}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ pathLength: isDownloaded ? 1 : [0, 1] }}
              transition={{
                duration: isDownloaded ? 0.4 : 3,
                repeat: isDownloaded ? 0 : Infinity,
                ease: "linear",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* 💥 Shimmer traversant */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["100%", "-100%", "100%"],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />

      {/* 🌈 Flash de succès */}
      {isDownloaded && (
        <motion.div
          className="absolute inset-0 rounded-3xl bg-green-400/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: [1, 0] }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.a>
  );
}












// DownloadCVButton.jsx — Version Holographique Ultra Luxe
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { HiDownload } from "react-icons/hi";

// export default function DownloadCVButton({
//   href = "cv.pdf",
//   fileName = "cv.pdf",
//   className = "",
// }) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [isDownloaded, setIsDownloaded] = useState(false);

//   const handleClick = () => {
//     setIsDownloaded(true);
//     setTimeout(() => setIsDownloaded(false), 2500);
//   };

//   return (
//     <motion.a
//       href={href}
//       download={fileName}
//       role="button"
//       aria-label="Télécharger le CV de Frank Kamgang"
//       className={`
//         ${className}
//         relative inline-flex items-center gap-5 rounded-3xl
//         px-8 py-5 text-white font-semibold overflow-hidden
//         bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4f46e5]
//         border border-white/15 backdrop-blur-2xl
//         shadow-[0_0_40px_rgba(99,102,241,0.4)]
//         hover:shadow-[0_0_60px_rgba(147,51,234,0.6)]
//         transition-all duration-500
//       `}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       }}
//       onClick={handleClick}
//       whileHover={{ scale: 1.08, y: -3 }}
//       whileTap={{ scale: 0.95, y: 0 }}
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {/* 💫 Glow interactif sous la souris */}
//       <motion.div
//         className="absolute inset-0 rounded-3xl pointer-events-none"
//         style={{
//           background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.25), transparent 70%)`,
//         }}
//         animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
//         transition={{ duration: 0.8, repeat: Infinity }}
//       />

//       {/* 🌌 Particules holographiques */}
//       {[...Array(15)].map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-[2px] h-[2px] rounded-full bg-gradient-to-b from-white/90 to-purple-400/60"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             x: [0, Math.random() * 6 - 3, 0],
//             opacity: [0.2, 1, 0.2],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 3,
//             delay: i * 0.15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* 🌀 Contenu principal */}
//       <div className="relative z-10 flex items-center gap-5">
//         {/* Icône avec effet holographique */}
//         <motion.div
//           className="relative flex items-center justify-center rounded-2xl p-4 border border-white/25 bg-white/10"
//           whileHover={{
//             rotate: 360,
//             scale: 1.25,
//             boxShadow: "0 0 25px rgba(255,255,255,0.5)",
//           }}
//           transition={{ duration: 0.9, type: "spring" }}
//         >
//           <HiDownload className="h-6 w-6 text-white" />
//           <motion.div
//             className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/40 to-purple-500/40"
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.6, 1, 0.6],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </motion.div>

//         {/* Texte animé */}
//         <motion.div className="flex flex-col leading-tight">
//           <motion.span
//             className="text-base font-bold tracking-wide"
//             animate={{
//               color: isDownloaded ? "#10b981" : "#fff",
//               textShadow: isDownloaded
//                 ? "0 0 15px rgba(34,197,94,0.8)"
//                 : "0 0 8px rgba(255,255,255,0.4)",
//             }}
//             transition={{ duration: 0.4 }}
//           >
//             {isDownloaded ? "✓ Téléchargé !" : "Télécharger"}
//           </motion.span>
//           <motion.span
//             className="text-sm font-medium opacity-90"
//             animate={{
//               scale: isDownloaded ? [1, 1.1, 1] : 1,
//             }}
//             transition={{ duration: 0.4 }}
//           >
//             {isDownloaded ? "Merci 🙌" : "Mon CV"}
//           </motion.span>
//         </motion.div>

//         {/* Cercle animé */}
//         <motion.div
//           className="ml-4 w-10 h-10 relative"
//           initial={{ rotate: -90 }}
//           animate={{
//             rotate: isDownloaded ? 270 : [-90, 270],
//           }}
//           transition={{
//             duration: isDownloaded ? 0.5 : 3,
//             repeat: isDownloaded ? 0 : Infinity,
//             ease: "linear",
//           }}
//         >
//           <svg className="w-full h-full" viewBox="0 0 36 36">
//             <path
//               d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
//               fill="none"
//               stroke="rgba(255,255,255,0.2)"
//               strokeWidth="2"
//             />
//             <motion.path
//               d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
//               fill="none"
//               stroke={isDownloaded ? "#10b981" : "url(#grad)"}
//               strokeWidth="2"
//               strokeLinecap="round"
//               animate={{
//                 pathLength: isDownloaded ? 1 : [0, 1],
//               }}
//               transition={{
//                 duration: isDownloaded ? 0.5 : 3,
//                 repeat: isDownloaded ? 0 : Infinity,
//                 ease: "linear",
//               }}
//             />
//             <defs>
//               <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#60a5fa" />
//                 <stop offset="50%" stopColor="#8b5cf6" />
//                 <stop offset="100%" stopColor="#ec4899" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>
//       </div>

//       {/* 🌈 Reflet mouvant */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//         animate={{
//           x: ["100%", "-100%", "100%"],
//         }}
//         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//       />

//       {/* 💥 Flash succès */}
//       {isDownloaded && (
//         <motion.div
//           className="absolute inset-0 rounded-3xl bg-green-400/20"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1, opacity: [1, 0] }}
//           transition={{ duration: 0.8 }}
//         />
//       )}
//     </motion.a>
//   );
// }




// DownloadCVButton.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { HiDownload } from "react-icons/hi";

// export default function DownloadCVButton({
//   href = "/public/cv.pdf",
//   fileName = "cv.pdf",
//   className = ""
// }) {
//   return (
//     <motion.a
//       href={href}
//       download={fileName}
//       role="button"
//       aria-label="Télécharger le CV de Frank Kamgang"
//       className={`
//         ${className}
//         relative inline-flex items-center gap-3 rounded-2xl
//         bg-gradient-to-r from-[#050816] via-indigo-700 to-purple-600
//         backdrop-blur-md border border-white/10
//         px-6 py-4 text-white font-semibold
//         shadow-lg ring-0
//         focus:outline-none focus:ring-4 focus:ring-indigo-500/40
//         overflow-hidden group
//         before:absolute before:inset-0 before:bg-gradient-to-r
//         before:from-[#050816]/30 before:to-purple-600/20
//         before:rounded-2xl before:scale-0 before:transition-all
//         before:group-hover:scale-100 before:duration-700
//         hover:shadow-indigo-500/40 hover:shadow-2xl
//       `}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)"
//       }}
//       whileTap={{ scale: 0.95 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {/* Particules lumineuses */}
//       {[...Array(6)].map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-1 h-1 bg-white/40 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.15}s`
//           }}
//           animate={{
//             y: [0, -10, 0],
//             opacity: [0.3, 1, 0.3],
//             rotate: 360
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       ))}

//       {/* Contenu principal */}
//       <div className="relative z-10 flex items-center gap-3">
//         {/* Icône animée */}
//         <motion.span
//           className="relative flex items-center justify-center rounded-xl bg-white/10 p-3 border border-white/10"
//           whileHover={{ rotate: 360, scale: 1.1 }}
//           transition={{ duration: 0.6, type: "spring" }}
//         >
//           <HiDownload className="h-5 w-5" aria-hidden="true" />
//           <motion.div
//             className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30"
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </motion.span>

//         {/* Texte */}
//         <motion.span
//           className="flex flex-col leading-tight"
//           initial={{ x: -10 }}
//           animate={{ x: 0 }}
//           transition={{ delay: 0.1 }}
//         >
//           <motion.span
//             className="text-sm font-bold"
//             animate={{ y: [0, -1, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             Télécharger
//           </motion.span>
//           <span className="text-xs opacity-85 font-medium">Mon CV</span>
//         </motion.span>

//         {/* Barre animée */}
//         <motion.div
//           className="ml-3 w-8 h-1 bg-white/20 rounded-full overflow-hidden"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
//         >
//           <motion.div
//             className="h-full bg-gradient-to-r from-white/60 to-indigo-400/60"
//             animate={{
//               x: ["0%", "100%", "0%"]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.div>
//       </div>

//       {/* Shimmer */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//         animate={{
//           x: ["100%", "-100%", "100%"]
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//       />
//     </motion.a>
//   );
// }
