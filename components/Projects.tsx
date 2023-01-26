import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-row
      max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      {/* Projects */}
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects?.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-40 md:p-44 lg:p-48 h-screen"
            key={project._id}
          >
            <motion.img
              className="h-[400px]"
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
            />

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project?.title}
              </h4>
              <h6 className="text-lg font-semibold text-center">
                {index + 1} of {projects.length}
              </h6>

              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10 object-cover"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left xl:max-w-4xl">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Background */}
      <div
        className="absolute w-full top-[30%] bg-gray-200 left-0 h-[500px]
      -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
