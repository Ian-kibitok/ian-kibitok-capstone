import { Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        <span className="brand-icon">
          <Sparkles size={18} />
        </span>

        <span>
          Good<span className="brand-highlight">Time</span>
        </span>
      </a>

      <div className="nav-links">
        <a href="#experiences">Experiences</a>
        <a href="#about">About</a>
      </div>

      <button
        className="nav-button"
        onClick={() =>
          document
            .getElementById("experiences")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Find a moment
      </button>
    </nav>
  );
}

export default Navbar;