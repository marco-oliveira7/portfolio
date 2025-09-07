import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useRef, useState } from "react";

const Home = () => {
  const [scrollDown, setScrollDown] = useState(false);
  let lastScrollY = useRef(0);

  const updateScroll = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setScrollDown(true); // rolou para baixo
    } else if (window.scrollY < lastScrollY.current) {
      setScrollDown(false); // rolou para cima
    }
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [updateScroll]);

  return (
    <>
      <div
        id="home"
        className="py-4 flex flex-col h-screen items-center justify-between"
      >
        <Spline
          className="absolute opacity-10 bottom-10"
          scene="https://prod.spline.design/TBxg5D0merstasqp/scene.splinecode"
        />
        <nav className="w-full text-xl sm:text-2xl">
          <ul className="font-semibold tracking-wide flex justify-evenly">
            <a href="#expertise" className="cursor-pointer z-10">
              Expertise
            </a>
            <a href="#projects" className="cursor-pointer z-10">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer z-10">
              Contact
            </a>
          </ul>
        </nav>
        <div>
          <h1 className="text-4xl text-center font-bold uppercase sm:text-5xl sm:text-right">
            Marco Antônio
          </h1>
          <p className="text-center text-lg">Web Developer</p>
        </div>
        <motion.button
          onClick={() => (window.location.href = "#expertise")}
          className="transition-all hover:scale-115 shadow-xl shadow-slate-800 w-12 h-12 rounded-full border-0 flex items-center justify-center cursor-pointer overflow-hidden bg-[#141414] z-10"
        >
          <motion.span
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </motion.span>
        </motion.button>
      </div>
      {scrollDown && (
        <button
          onClick={() => (window.location.href = "#home")}
          className="fixed bottom-4 right-4 transition-all w-15 h-15 rounded-xl border-0 flex items-center justify-center cursor-pointer overflow-hidden bg-[#141414] z-10"
        >
          <motion.span
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              transition: {
                duration: 1,
                ease: "easeOut",
              },
              y: [10, -10, 0],
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.span>
        </button>
      )}
    </>
  );
};

export default Home;
