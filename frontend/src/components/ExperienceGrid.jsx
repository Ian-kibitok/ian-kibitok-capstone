import ExperienceCard from "./ExperienceCard";

function ExperienceGrid({ experiences, onSelect }) {
  if (experiences.length === 0) {
    return (
      <div className="empty-state">
        <div>🌙</div>

        <h3>No moment found.</h3>

        <p>
          Maybe today's good time hasn't been invented yet.
        </p>
      </div>
    );
  }

  return (
    <div className="experience-grid">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ExperienceGrid;