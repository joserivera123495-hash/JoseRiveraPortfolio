const projects = [
  {
    title: "Trinity Hero Adventure",
    type: "Senior Capstone Game",
    description:
      "A complete 2D action RPG built in Unity with three playable heroes, independent save data, multi-scene progression, training systems, and boss gameplay.",
    stack: ["Unity", "C#", "Serialization"],
    links: [
      { label: "Download Game", href: "/trinity-hero-final.app.zip" },
    ],
  },
  {
    title: "Skin Lesion Segmentation",
    type: "Medical AI Project",
    description:
      "A computer vision project using a U-Net model for binary semantic segmentation of dermoscopic images with custom augmentation and training analysis.",
    stack: ["Python", "PyTorch", "Computer Vision"],
    links: [{ label: "Ask about it", href: "#contact" }],
  },
  {
    title: "Personal Portfolio",
    type: "React Website",
    description:
      "This site, built with React and Vite to present projects, skills, resume, and contact links in a clean, recruiter-friendly format.",
    stack: ["React", "Vite", "CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/joserivera123495-hash" },
    ],
  },
  {
    title: "Fiesta App",
    type: "Startup Project",
    description:
      "A marketplace concept connecting customers with event vendors for catering, decorations, DJs, photography, and more across the Rio Grande Valley.",
    stack: ["SwiftUI", "iOS", "Marketplace"],
    links: [{ label: "Discuss project", href: "#contact" }],
  },
];

function Projects() {
  return (
    <section id="projects" className="wrap">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Selected work.</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <div className="card-type">{p.type}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="card-links">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  download={l.href.includes(".zip") || undefined}
                >
                  {l.label} &rsaquo;
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
