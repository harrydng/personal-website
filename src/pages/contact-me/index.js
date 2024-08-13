import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
  const form = useRef();
  const [fieldClicked, setFieldClicked] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gxph22r",
        "template_rwkiazl",
        form.current,
        "VXEYiZ5t4uH4AuG9b",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
        },
      );
  };

  const handleFocus = (field) => {
    setFieldClicked(field);
  };

  const handleBlur = () => {
    setFieldClicked(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-12 text-white text-center">
        Let's connect!
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg space-y-8 text-white"
      >
        <div className="space-y-2">
          <label
            className={`block text-lg font-bold uppercase tracking-wider duration-300 ${
              fieldClicked === "name"
                ? "text-green-700 scale-110"
                : "text-stone-300"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full bg-transparent border-b-2 border-stone-300 focus:outline-none focus:text-green-400 text-white text-lg"
            placeholder="Your Name"
            required
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
          />
        </div>

        <div className="space-y-2">
          <label
            className={`block text-lg font-bold uppercase tracking-wider duration-300 ${
              fieldClicked === "email"
                ? "text-green-700 scale-110"
                : "text-stone-300"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-transparent border-b-2 border-stone-300 focus:outline-none focus:text-green-400 text-white text-lg"
            placeholder="Your Email"
            required
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
          />
        </div>

        <div className="space-y-2">
          <label
            className={`block text-lg font-bold uppercase tracking-wider duration-300 ${
              fieldClicked === "subject"
                ? "text-green-700 scale-110"
                : "text-stone-300"
            }`}
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="w-full bg-transparent border-b-2 border-stone-300 focus:outline-none focus:text-green-400 text-white text-lg"
            placeholder="Subject"
            required
            onFocus={() => handleFocus("subject")}
            onBlur={handleBlur}
          />
        </div>

        <div className="space-y-2">
          <label
            className={`block text-lg font-bold uppercase tracking-wider duration-300 ${
              fieldClicked === "message"
                ? "text-green-700 scale-110"
                : "text-stone-300"
            }`}
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-full bg-transparent border-b-2 border-stone-300 focus:outline-none focus:text-green-400 text-white text-lg h-16"
            placeholder="Please Leave a Message"
            required
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white hover:scale-125 text-stone-900 font-bold uppercase tracking-wider py-2 px-6 rounded-full hover:bg-green-400 hover:text-stone-900 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
