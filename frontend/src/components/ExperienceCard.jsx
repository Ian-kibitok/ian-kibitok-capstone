import { ArrowUpRight } from "lucide-react";

function ExperienceCard({ experience, onSelect }) {
  return (
    <article
      className="experience-card"
      onClick={() => onSelect(experience)}
    >
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${experience.image})`
        }}
      >
        <span className="experience-tag">
          {experience.category}
        </span>

        <button className="card-arrow">
          <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span>{experience.location}</span>
          <span>{experience.duration}</span>
        </div>

        <h3>{experience.title}</h3>

        <p>{experience.description}</p>

        <div className="card-mood">
          <span className="mood-dot" />
          {experience.mood}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;