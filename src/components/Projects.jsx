const projects = [
  {
    tag: "01",
    title: "Habit Tracker iOS App",
    desc: "A SwiftUI app for building daily habits, with streak tracking, reminders, and progress charts synced through Core Data.",
    stack: ["SwiftUI", "Core Data", "Swift"],
    demo: "#",
    code: "#",
  },
  {
    tag: "02",
    title: "Portfolio & Blog Platform",
    desc: "A fast, responsive personal site built with React and Vite, featuring a markdown-powered blog and dark mode support.",
    stack: ["React", "Vite", "CSS"],
    demo: "#",
    code: "#",
  },
  {
    tag: "03",
    title: "Task Manager API",
    desc: "A RESTful task management backend with authentication, project boards, and real-time updates via WebSockets.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    demo: "#",
    code: "#",
  },
  {
    tag: "04",
    title: "Weather Watch",
    desc: "An iOS weather app with location-based forecasts, hourly breakdowns, and severe weather alerts using a public API.",
    stack: ["SwiftUI", "MapKit", "REST API"],
    demo: "#",
    code: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-head">
        <div className="eyebrow">02 / projects</div>
        <h2>Things I've built</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.tag}>
            <div className="project-top">
              <div className="project-icon">{p.tag}</div>
              <div className="project-links">
                <a href={p.demo}>Demo</a>
                <a href={p.code}>Code</a>
              </div>
            </div>

            <h3>{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="tag-row">
              {p.stack.map((s) => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
