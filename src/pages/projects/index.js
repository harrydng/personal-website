import React from "react";
import projects from "./contents";
import { LiaGithub } from "react-icons/lia"; // GitHub icon
import { LiaExternalLinkAltSolid } from "react-icons/lia"; // External link icon

function Projects() {
  return (
    <div className="space-y-10">
      <h3 className="text-5xl font-bold text-stone-300">Projects</h3>

      {/* Project Cards */}
      <div className="space-y-10">
        {projects.map(
          ({ title, date, description, github, tech, external }) => (
            <div
              key={title}
              className="relative bg-blue-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* GitHub and External Links */}
              <div className="flex justify-between items-center">
                <h4 className="text-3xl font-bold text-sky-300">{title}</h4>
                <div className="flex space-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    >
                      <LiaGithub className="w-8 h-8 text-sky-300 hover:text-green-400" />
                    </a>
                  )}
                  {external && (
                    <a
                      href={external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    >
                      <LiaExternalLinkAltSolid className="w-8 h-8 text-sky-300 hover:text-green-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="mt-2 text-sm text-slate-400">{date}</div>

              {/* Project Description */}
              <div className="mt-4 bg-blue-800 text-sky-200 p-4 rounded-md shadow-inner">
                <p className="text-lg">{description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap space-x-4 text-sm text-sky-300">
                {tech.split("\n").map((techItem, index) => (
                  <span
                    key={index}
                    className="bg-blue-700 px-2 py-1 rounded-md text-sky-200"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Projects;
