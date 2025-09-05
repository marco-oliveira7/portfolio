import { motion } from "motion/react";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Variants } from "motion/react";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Expertise = () => {
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // });

  return (
    <div
      className="scroll-smooth py-4 h-screen flex flex-col items-center"
      id="expertise"
    >
      <h1 className="text-2xl uppercase tracking-widest ">Expertise</h1>
      <motion.div
        className="overflow-hidden flex 
          justify-center items-center relative pt-5 mt-5 w-full h-11/12"
        initial="offscreen"
        whileInView="onscreen"
      >
        <motion.div
          variants={reactBox}
          custom={window.innerWidth < 850}
          className="bg-zinc-900 z-10 absolute w-96 h-3/9 rounded-lg border-2"
        >
          <div className="flex items-center justify-center w-full">
            <FontAwesomeIcon className="mr-4" size={"3x"} icon={faReact} />
            <h1 className="text-lg">
              <span className="relative">Frontend Dev</span>
              <br />
              React, NextJS
            </h1>
          </div>
          <div className="flex items-center h-6/12 px-5 text-left">
            <p className="">
              Passionate about building modern and responsive interfaces.
              Experienced in React, NextJS, HTML, CSS, and JavaScript, always
              focused on performance and user experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={nodeBox}
          custom={window.innerWidth < 850}
          className="bg-zinc-900 z-[5] absolute w-96 h-3/9 rounded-lg border-2"
        >
          <div className="flex items-center justify-center w-full">
            <FontAwesomeIcon className="mr-4" size={"3x"} icon={faNode} />
            <h1 className="text-lg">
              <span className="relative">Backend Dev</span>
              <br />
              Node.js, Express, C#
            </h1>
          </div>
          <div className="flex items-center h-6/12 px-5 text-left">
            <p className="">
              Strong experience in creating robust and scalable APIs using
              Node.js, Express, and C#. Focused on best practices, security, and
              clean architecture to deliver efficient solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={dbBox}
          custom={window.innerWidth < 850}
          className="bg-zinc-900 absolute w-96 h-3/9 rounded-lg border-2"
        >
          <div className="flex items-center justify-center w-full">
            <FontAwesomeIcon className="mr-4" size={"3x"} icon={faDatabase} />
            <h1 className="text-lg">
              <span className="relative">Database Dev</span>
              <br />
              PostgreSQL, Prisma ORM
            </h1>
          </div>
          <div className="flex items-center h-6/12 px-5 text-left">
            <p className="">
              Skilled in data modeling and query optimization. Hands-on
              experience with PostgreSQL and Prisma ORM to integrate
              applications with databases efficiently and securely.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const reactBox: Variants = {
  offscreen: {
    y: -20,
    x: -30,
  },
  onscreen: (isMobile: boolean) => ({
    y: isMobile ? -252 : -150,
    x: isMobile ? 0 : -265,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  }),
};

const nodeBox: Variants = {
  offscreen: {
    y: 15,
    x: 65,
  },
  onscreen: (isMobile: boolean) => ({
    y: isMobile ? -10 : -20,
    x: isMobile ? 0 : 250,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  }),
};

const dbBox: Variants = {
  offscreen: {
    y: 60,
    x: -40,
  },
  onscreen: (isMobile: boolean) => ({
    y: isMobile ? 230 : 170,
    x: isMobile ? 0 : -230,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  }),
};

export default Expertise;
