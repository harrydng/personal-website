import React from "react";
import Selfie from "./assets/harry-photo.webp";
import { codingLanguages } from "./constants";

function AboutMe() {
  return (
    <div className="text-stone-400 flex text-2xl">
      {/* The Left half */}
      <div className="space-y-8 h-full w-1/2">
        {/* Section Title */}
        <h3 className="text-5xl font-bold text-stone-300">About Me</h3>

        {/* About Me Text */}
        <div className="space-y-16">
          <div>
            When I'm not glued to my screen, I love spending time cooking,
            baking, enjoying music, playing video games, and going for a jog.
          </div>
          <div>
            In this fast-paced world of evolving technologies, I love to learn
            new and better ways to engineer
            <span className="text-green-400">
              {" "}
              smooth user experiences with clean and efficient code,{" "}
            </span>
            and I am always looking for collaborating opportunities with those
            who are just as eager to share their knowledge as I am to learn.
          </div>
        </div>

        {/* Technologies worked with recently */}
        <div className="text-stone-300">
          Here are some technologies I have worked with recently !
        </div>
        <div className="grid grid-cols-4 gap-5">
          {codingLanguages.map(({ Icon, alt, color }) => (
            <div key={alt} className="flex items-center justify-center">
              <Icon className="w-16 h-16" style={{ color }} />
            </div>
          ))}
        </div>
      </div>

      {/* The Right half */}
      <div className="w-1/2 h-full flex justify-center items-center p-10">
        <img
          src={Selfie}
          alt="Selfie"
          className="w-96 h-96 border-4 border-green-400 shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutMe;
