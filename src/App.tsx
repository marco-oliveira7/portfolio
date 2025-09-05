import Home from "./components/home";
import Expertise from "./components/expertise";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="text-white bg-gradient-to-b from-[#131A24] from-30% to-zinc-900 flex h-auto flex-col">
      <Toaster />

      <Home />

      <Expertise />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
