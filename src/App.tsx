import Home from "./components/home";
import Expertise from "./components/expertise";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

function App() {
  return (
    <div className="text-white bg-gradient-to-b from-[#131A24] from-30% to-zinc-900 flex h-auto flex-col">
      <motion.div
        animate={{ opacity: [1, 0.7, 0.3, 0], zIndex: 0 }}
        transition={{ duration: 4, ease: "easeIn" }}
        className="h-screen w-screen fixed top-0
       bg-gradient-to-t from-[#141A23] from-55% to-zinc-900 transition-all flex items-center justify-center"
      />
      <Toaster />

      <Home />

      <Expertise />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
