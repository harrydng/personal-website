import React from "react";
import { socialMedia } from "./constants";

function Contacts() {
  const email = "harryoduong2405@gmail.com";

  return (
    <div>
      <div className="fixed left-16 top-1/3 flex flex-col items-center space-y-6">
        {socialMedia.map(({ href, src, alt, Icon }) => (
          <a
            key={alt}
            href={href}
            className="w-8 h-8 hover:scale-125 transition-transform duration-200"
          >
            <Icon className="w-full h-full hover:text-cyan-700" />
          </a>
        ))}
      </div>

      <div
        className="fixed bottom-1/2 rotate-90 flex flex-col items-center"
        style={{ right: "-1.5rem" }}
      >
        <a
          key={email}
          href={`mailto:${email}`}
          className="text-xl hover:text-cyan-700 hover:scale-105 duration-200"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

export default Contacts;
