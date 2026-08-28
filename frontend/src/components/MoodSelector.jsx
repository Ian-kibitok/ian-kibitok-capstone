import { Search } from "lucide-react";

const moods = [
  "All",
  "Adventure",
  "Peaceful",
  "Romantic",
  "Electric"
];

function MoodSelector({
  selectedMood,
  setSelectedMood,
  search,
  setSearch
}) {
  return (
    <div className="filters">
      <div className="moods">
        {moods.map((mood) => (
          <button
            key={mood}
            className={selectedMood === mood ? "mood active" : "mood"}
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>

      <div className="search-box">
        <Search size={17} />

        <input
          type="text"
          placeholder="Search a moment..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </div>
  );
}

export default MoodSelector;