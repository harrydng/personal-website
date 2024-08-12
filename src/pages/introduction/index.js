import React, { useState } from "react";

function Introduction() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setCount(count + 1);
      setLiked(true);
    } else {
      setCount(count - 1);
      setLiked(false);
    }
  };

  return (
    <div className="space-y-16">
      <div className="space-y-7">
        <p className="text-2xl text-green-600 font-bold">Hi, my name is</p>
        <p className="text-8xl text-green-500 font-bold">Harry Duong.</p>
        <p className="text-5xl text-stone-300">
          I'm a Third-year student at Northeastern University.
        </p>
        <p className="text-2xl text-stone-400 w-1/2">
          I aspire to be a software engineer, making the most out of my
          knowledge in both technology and finance to build solutions that
          provide delightful and impactful experiences.
        </p>
      </div>

      {/* Keep Track of Like Button */}
      <div className="flex items-center gap-5">
        <button
          onClick={handleLikeClick}
          className={`px-4 py-2 w-48 text-xl font-bold text-black hover:bg-black hover:text-green-400 hover:scale-110 duration-200 ${
            liked ? "bg-green-200" : "bg-green-600"
          }`}
        >
          {liked ? "Thank you!" : "Leave a Like?"}
        </button>
        <span className="bg-green-600 px-4 py-2 text-black font-bold text-xl">
          {count}
        </span>
      </div>
    </div>
  );
}

export default Introduction;
