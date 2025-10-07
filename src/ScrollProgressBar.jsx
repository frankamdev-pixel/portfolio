import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      setShowTopButton(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 w-full h-4 bg-white/10 z-50">
        <div
          className="h-full bg-cyan-400 flex items-center justify-end pr-2 text-white font-bold transition-all duration-200"
          style={{ width: `${scrollPercent}%` }}
        >
          {Math.round(scrollPercent)}%
        </div>
      </div>

      {/* Bouton scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-cyan-500 text-white p-4 rounded-full shadow-2xl hover:bg-cyan-400 transition-all duration-300 z-50 ${
          showTopButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        ↑
      </button>
    </>
  );
};

export default ScrollProgress;
