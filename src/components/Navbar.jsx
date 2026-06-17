import { useState } from "react";

// Set to true once you add certifications in Certifications.jsx
const SHOW_CERTS = false;

const navItems = SHOW_CERTS
  ? ["about", "projects", "skills", "certifications", "resume", "contact"]
  : ["about", "projects", "skills", "resume", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="nav-name" href="#home" onClick={() => setOpen(false)}>
        Jose Rivera
      </a>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      <button
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
