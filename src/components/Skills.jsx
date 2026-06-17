const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "C#", "Python", "Java", "JavaScript", "Swift", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Vite", "Unity", "PyTorch", "Git", "Linux", "Xcode"],
  },
  {
    title: "Concepts",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Computer Vision",
      "Deep Learning",
      "REST APIs",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="wrap">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tools I use to solve problems.</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-col" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
