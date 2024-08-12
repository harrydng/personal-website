import { experiences } from "./contents";

function Experiences() {
  return (
    <div>
      <h3 className="text-2xl font-bold underline mb-4">My Experiences</h3>
      <div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-5 mb-4"
          >
            <h4 className="text-lg font-bold">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.title} at {experience.company}
              </a>
            </h4>
            <p className="text-sm text-gray-400">
              {experience.range} • {experience.location}
            </p>
            <div className="mt-2">
              {experience.content
                .split("- ")
                .filter(Boolean)
                .map((line, i) => (
                  <p key={i} className="mb-1">
                    - {line}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
