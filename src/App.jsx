import React, { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import backgroundImage from "./background.png"; // Make sure the background image is in the src folder
import InvitationCardImage from "./InvitationCard.jpg"; // Invitation card image

function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animate only once
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      setIsSubmitted(true);
    }
  };

  return (
    <div
      className="min-h-screen absolute w-full flex flex-col items-center justify-center gap-12 p-6 bg-cover bg-center bg-fixed"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Form Container */}
      <div
        className="w-full max-w-lg bg-black/60 backdrop-blur-sm rounded-xl border border-purple-500/50 shadow-2xl shadow-purple-500/20 p-8"
        data-aos="fade-down"
      >
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            className={`w-full max-w-xs p-3 rounded-lg bg-gray-800/50 text-white border border-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none mb-6
              ${isSubmitted ? "hidden z-20" : ""}
            `}
            aria-label="Your Name"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-lg hover:scale-105 transition-transform"
          >
            Get Invitation
          </button>
        </form>
      </div>

      {/* Invitation Card - Renders Conditionally */}
      {/* setTimeout(() => {
        
      {isSubmitted && <InvitationCard name={name} />}
      }, 3000); */}
      {isSubmitted && <ShowCard name={name} />}
    </div>
  );
}

function InvitationCard({ name }) {
  return (
    <div
      className="w-full max-w-lg h-full flex justify-center items-center flex-col absolute bg-black p-8 text-center"
      data-aos="fade-up" // AOS animation for the card
    >
      {/* Main Title with Neon Effect */}
      <h1 className="font-permanent-marker text-4xl text-fuchsia-300 text-shadow-neon animate-glow mb-4">
        FRESHTIVAL
      </h1>

      {/* Welcome Message */}
      <h2 className="text-2xl font-bold text-purple-200 mb-4">
        Welcome, {name}!
      </h2>

      <p className="text-gray-300 mb-6">
        You're invited to a night of fun, music, and celebration.
      </p>

      <p className="text-purple-300 italic opacity-80 mt-6">
        From Your Seniors
      </p>
    </div>
  );
}

function ShowCard() {
  return (
    <div className="flex justify-center items-center m-2 bg-no-repeat absolute object-fill p-4">
      <img src={InvitationCardImage} alt="" />
    </div>
  );
}

export default App;
