import { in2022, in2023, in2024, in2025 } from "./contents";
import React, { useState } from "react";

function Experiences() {
  const [visible, setVisible] = useState(null);

  const toggleVisibility = (title) => {
    setVisible(visible === title ? null : title);
  };

  const experiencesByYear = [
    { year: "2025", experiences: in2025 },
    { year: "2024", experiences: in2024 },
    { year: "2023", experiences: in2023 },
    { year: "2022", experiences: in2022 },
  ];

  const renderExperiences = (year, experiences) => (
    <div key={year} className="space-x-5 flex flex-row">
      <div className="w-1/3 text-3xl">{year}</div>
      <div className="space-y-4 w-full">
        {experiences.map(
          ({ title, company, location, range, url, content }) => (
            <div
              key={title}
              className="px-4 py-4 border-b bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
              onClick={() => toggleVisibility(title)}
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">{title}</div>
                <div className="text-lg">{location}</div>
              </div>
              {visible === title && (
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <a
                      alt={company}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-green-400 hover:underline"
                    >
                      {company}
                    </a>
                    <span className="italic">{range}</span>
                  </div>
                  <ul className="list-disc list-outside mt-2 space-y-2 pl-14">
                    {content.split("\n").map((item, index) => (
                      <li key={index} className="text-base">
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );

  return (
    <div className="text-stone-300 space-y-8">
      <h3 className="text-5xl font-bold text-stone-300">Experiences</h3>
      {experiencesByYear.map(({ year, experiences }) =>
        renderExperiences(year, experiences),
      )}
    </div>
  );
}

export default Experiences;
