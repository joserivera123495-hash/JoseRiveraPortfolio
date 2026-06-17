const groups = [
  {
    name: "languages",
    items: ["Swift", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    name: "frameworks",
    items: ["SwiftUI", "React", "Node.js", "Express"],
  },
  {
    name: "tools",
    items: ["Git", "Xcode", "VS Code", "Vite", "Figma"],
  },
  {
    name: "concepts",
    items: ["REST APIs", "Data Structures", "Testing", "CI/CD"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-head">
        <div className="eyebrow">03 / skills</div>
        <h2>What I work with</h2>
      </div>

      <div className="skills-tree">
        {groups.map((g) => (
          <div className="skill-folder" key={g.name}>
            <div className="folder-head">
              <span className="folder-icon">▸</span>
              {g.name}/
            </div>
            <ul className="folder-items">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
