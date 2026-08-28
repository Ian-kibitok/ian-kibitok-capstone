import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodSelector from "./components/MoodSelector";
import ExperienceGrid from "./components/ExperienceGrid";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import { experiences } from "./data/experiences";

function App() {
  const [selectedMood, setSelectedMood] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const filteredExperiences = useMemo(() => {
    return experiences.filter((experience) => {
      const moodMatches =
        selectedMood === "All" ||
        experience.moods.includes(selectedMood);

      const searchMatches =
        experience.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        experience.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return moodMatches && searchMatches;
    });
  }, [selectedMood, search]);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section className="experience-section" id="experiences">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR NEXT MOMENT</span>

              <h2>
                Find something
                <span> worth remembering.</span>
              </h2>
            </div>

            <p>
              Not everything needs a plan.
              Sometimes the best moments simply happen.
            </p>
          </div>

          <MoodSelector
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            search={search}
            setSearch={setSearch}
          />

          <ExperienceGrid
            experiences={filteredExperiences}
            onSelect={setSelectedExperience}
          />
        </section>

        <Stats />

        <section className="quote-section">
          <div className="quote-card">
            <span className="quote-mark">“</span>

            <h2>
              The goal isn't to have
              <span> more time.</span>
              <br />
              It's to have
              <span> more moments.</span>
            </h2>

            <p>
              Make today count.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {selectedExperience && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="experience-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedExperience(null)}
            >
              ×
            </button>

            <div
              className="modal-image"
              style={{
                backgroundImage: `url(${selectedExperience.image})`
              }}
            />

            <div className="modal-content">
              <span className="experience-tag">
                {selectedExperience.category}
              </span>

              <h2>{selectedExperience.title}</h2>

              <p>{selectedExperience.description}</p>

              <div className="modal-details">
                <span>📍 {selectedExperience.location}</span>
                <span>⏱ {selectedExperience.duration}</span>
                <span>✨ {selectedExperience.mood}</span>
              </div>

              <button
                className="primary-button"
                onClick={() => setSelectedExperience(null)}
              >
                Let's make it happen →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;