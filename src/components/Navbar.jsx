import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar${open ? " open" : ""}`}>
      <h2 className="logo">
        <span className="dot" />
        jose<span className="ext">.dev</span>
      </h2>

      <div className="nav-links">
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      <a className="resume-btn" href="#resume" onClick={() => setOpen(false)}>
        Resume
      </a>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
