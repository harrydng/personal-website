import React from "react";
import { socialMedia } from "./constants";

function Contacts() {
  const email = "harryoduong2405@gmail.com";

  return (
    <div>
      {/* Social Media Links and Line*/}
      <div
        className="fixed flex flex-col items-center space-y-6"
        style={{ left: "4.75rem", bottom: "0rem" }}
      >
        {socialMedia.map(({ href, alt, Icon }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            className="w-8 h-8 hover:scale-150 transition-transform duration-300"
          >
            <Icon className="w-full h-full text-stone-300 hover:text-green-400" />
          </a>
        ))}
        <div className="w-px h-40 bg-stone-300" />
      </div>

      {/* Email Link and Line */}
      <div
        className="fixed flex flex-col items-center space-y-36"
        style={{ right: "-1.95rem", bottom: "0rem" }}
      >
        <a
          key={email}
          href={`mailto:${email}`}
          className="rotate-90 text-xl text-stone-300 hover:text-green-400 hover:scale-110 duration-200"
        >
          {email}
        </a>
        <div className="w-px h-40 bg-stone-300" />
      </div>
    </div>
  );
}

export default Contacts;
