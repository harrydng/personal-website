import React from "react";
import Selfie from "./assets/harry-photo.webp";

function AboutMe() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h3 className="text-2xl font-bold underline">My Interests</h3>
      </div>

      <div className="w-1/2">
        <img src={Selfie} alt="Selfie" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default AboutMe;
