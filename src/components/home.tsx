import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="py-4 flex flex-col h-screen items-center justify-between">
      <Spline
        className="absolute opacity-10 bottom-10"
        scene="https://prod.spline.design/TBxg5D0merstasqp/scene.splinecode"
      />
      <nav className="w-full text-2xl">
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
        <h1 className="text-5xl font-bold uppercase">Marco Antônio</h1>
        <p className="text-center text-lg">Web Developer</p>
      </div>
      <motion.button
        onClick={() => window.location.href = "#expertise"}
        animate={{ y: [-30, -60, -30] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-full border-0 flex items-center justify-center cursor-pointer overflow-hidden bg-[#141414] z-10"
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </motion.button>
    </div>
  );
};

export default Home;
