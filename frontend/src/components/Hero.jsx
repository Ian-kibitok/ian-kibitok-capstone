import { ArrowDown, Sparkles } from "lucide-react";

function Hero() {
  const hour = new Date().getHours();

  let greeting = "Good evening";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  }

  return (
    <section className="hero">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={14} />
          {greeting}. Make it a good one.
        </div>

        <h1>
          Life is too short
          <br />
          for <span>ordinary.</span>
        </h1>

        <p>
          Discover little adventures, beautiful places,
          unforgettable nights and moments that feel
          bigger than the clock.
        </p>

        <div className="hero-actions">
          <a href="#experiences" className="primary-button">
            Explore good times →
          </a>

          <span className="hero-note">
            No itinerary required.
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Scroll to discover</span>

        <ArrowDown size={18} />
      </div>
    </section>
  );
}

export default Hero;