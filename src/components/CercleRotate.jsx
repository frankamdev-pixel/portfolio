

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiVuedotjs, SiDigitalocean,
  SiHtml5, SiCss3, SiPhp, SiWordpress, SiLaravel, SiGit,
  SiAdobeillustrator,SiReact, SiAdobephotoshop, SiHeroku, SiJira, SiGithub
} from "react-icons/si";

const CercleRotate = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  const ORBITS = {
    1: { radius: { base: 80, sm: 120 }, duration: { mobile: 12, desktop: 18 } },
    2: { radius: { base: 120, sm: 180 }, duration: { mobile: 18, desktop: 25 } },
    3: { radius: { base: 160, sm: 240 }, duration: { mobile: 24, desktop: 32 } },
  };

  const logos = {
    center: { Icon: SiTypescript, alt: "TypeScript", color: "text-blue-400" },
    orbit1: [
      { Icon: SiJavascript, alt: "JavaScript", color: "text-yellow-400" },
      { Icon: SiVuedotjs, alt: "Vue.js", color: "text-green-500" },
      { Icon: SiAdobephotoshop, alt: "Photoshop", color: "text-sky-400" },
      { Icon: SiDigitalocean, alt: "DigitalOcean", color: "text-blue-500" },
      { Icon: SiReact, alt: "DigitalOcean", color: "text-blue-500" },
    ],
    orbit2: [
      { Icon: SiHtml5, alt: "HTML5", color: "text-orange-500" },
      { Icon: SiCss3, alt: "CSS3", color: "text-blue-600" },
      { Icon: SiPhp, alt: "PHP", color: "text-indigo-400" },
      { Icon: SiWordpress, alt: "WordPress", color: "text-blue-700" },
      { Icon: SiLaravel, alt: "Laravel", color: "text-red-500" },
      { Icon: SiGit, alt: "Git", color: "text-orange-600" },
    ],
    orbit3: [
      { Icon: SiAdobeillustrator, alt: "Illustrator", color: "text-orange-600" },
      { Icon: SiAdobephotoshop, alt: "InDesign", color: "text-pink-500" },
      { Icon: SiHeroku, alt: "Heroku", color: "text-purple-600" },
      { Icon: SiJira, alt: "Jira", color: "text-blue-800" },
      { Icon: SiGithub, alt: "GitHub", color: "text-gray-300" },
    ],
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = useCallback(
    (logo) => {
      if (!isMobile) {
        clearTimeout(timeoutRef.current);
        setShowTooltip(logo);
      }
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setShowTooltip(null), 200);
    }
  }, [isMobile]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const IconComponent = ({ Icon, size, color }) => (
    <Icon className={`${color} drop-shadow-lg`} size={size} />
  );

  return (
    <>
      <div
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#050816] to-[#050816] p-4"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* 🌌 Étoiles de fond */}
        <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg">
          Technologies
        </h2>
        {/* <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div> */}
        {/* 🌌 Étoiles de fond */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/60"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 200, 0],
                y: [0, (Math.random() - 0.5) * 200, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </div>

        <div
          className="relative flex items-center justify-center"
          style={{
            width: isMobile ? "280px" : "500px",
            height: isMobile ? "280px" : "500px",
          }}
        >
          {/* 🔵 Cercles d’orbite */}
          {Object.entries(ORBITS).map(([key, { radius, duration }]) => {
            const r = isMobile ? radius.base : radius.sm;
            return (
              <motion.div
                key={key}
                className="absolute rounded-full border border-blue-400/20"
                style={{
                  width: `${2 * r}px`,
                  height: `${2 * r}px`,
                  left: "50%",
                  top: "50%",
                  marginLeft: `-${r}px`,
                  marginTop: `-${r}px`,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                }}
                animate={{ rotate: isMobile || !isHovered ? 360 : 0 }}
                transition={{
                  rotate: {
                    duration: duration[isMobile ? "mobile" : "desktop"],
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
              />
            );
          })}

          {/* 💎 Icône centrale */}
          <motion.div
            className="absolute z-50"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gray-900/80 rounded-full p-3 border-2 border-blue-500/50 shadow-2xl">
              <IconComponent
                Icon={logos.center.Icon}
                size={isMobile ? 24 : 32}
                color={logos.center.color}
              />
            </div>
          </motion.div>

          {/* 🪐 Icônes en orbite */}
          {Object.entries({
            orbit1: logos.orbit1,
            orbit2: logos.orbit2,
            orbit3: logos.orbit3,
          }).map(([orbitKey, orbitLogos], orbitIndex) => {
            const config = ORBITS[orbitIndex + 1];
            const radius = isMobile ? config.radius.base : config.radius.sm;
            const duration = config.duration[isMobile ? "mobile" : "desktop"];
            const angleStep = 360 / orbitLogos.length;

            return orbitLogos.map((logo, index) => {
              const delay = index * (duration / orbitLogos.length);
              const initialAngle = index * angleStep;

              return (
                <div
                  key={`${orbitKey}-${index}`}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    animation:
                      isMobile || !isHovered
                        ? `orbit-logo-${orbitIndex + 1} ${duration}s linear infinite ${delay}s`
                        : "none",
                    transform: `rotate(${initialAngle}deg) translateX(${radius}px) rotate(-${initialAngle}deg)`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: isMobile ? 1.2 : 1.3, zIndex: 100 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => handleMouseEnter(logo)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-gray-900/80 rounded-full p-2 border-2 border-blue-400/50 shadow-lg">
                      <IconComponent
                        Icon={logo.Icon}
                        size={isMobile ? 16 : 20}
                        color={logo.color}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            });
          })}
        </div>

        {/* 💬 Tooltip */}
        <AnimatePresence>
          {!isMobile && showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 rounded-lg bg-gray-900/95 px-4 py-2 text-sm text-white shadow-2xl backdrop-blur-md border border-white/10"
            >
              {showTooltip.alt}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 📱 Status */}
        <motion.div
          className="absolute bottom-4 left-4 rounded-lg bg-black/40 px-4 py-2 text-xs text-white backdrop-blur-md border border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isMobile ? "🔄 ∞ Mobile" : isHovered ? "⏸️ Pause" : "🔄 Active"}
        </motion.div>

        {/* ✨ Animations CSS */}
        <style>{`
        @keyframes orbit-logo-1 {
          from { transform: rotate(0deg) translateX(${isMobile ? "80px" : "120px"}) rotate(0deg); }
          to { transform: rotate(360deg) translateX(${isMobile ? "80px" : "120px"}) rotate(-360deg); }
        }
        @keyframes orbit-logo-2 {
          from { transform: rotate(0deg) translateX(${isMobile ? "120px" : "180px"}) rotate(0deg); }
          to { transform: rotate(360deg) translateX(${isMobile ? "120px" : "180px"}) rotate(-360deg); }
        }
        @keyframes orbit-logo-3 {
          from { transform: rotate(0deg) translateX(${isMobile ? "160px" : "240px"}) rotate(0deg); }
          to { transform: rotate(360deg) translateX(${isMobile ? "160px" : "240px"}) rotate(-360deg); }
        }
      `}</style>
      </div>
    </>
  );
};

export default CercleRotate;
