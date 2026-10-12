import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-[#123524] text-[#c59822] border border-[#c59822]/30 shadow-lg hover:border-[#c59822] hover:bg-[#0e2a1c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c59822]/60"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
