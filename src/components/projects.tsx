import Carousel from "./carousel/carousel";

const Projects = () => {

  return (
    <div id="projects" className="relative py-4 h-screen flex flex-col items-center">
      <h1 className="text-2xl uppercase tracking-widest">Projects</h1>
      <Carousel/>
    </div>
  );
};

export default Projects;
