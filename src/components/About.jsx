function About() {
  return (
    <section id="about">
      <div className="section-head">
        <div className="eyebrow">01 / about</div>
        <h2>A bit about me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a Computer Science graduate who enjoys building software
            end to end, from native iOS apps in SwiftUI to responsive web
            apps in React. I care about clean architecture, readable code,
            and interfaces that feel fast and intuitive.
          </p>
          <p>
            Most of my projects start with a small, real problem. I like
            prototyping quickly, then iterating with attention to detail,
            performance, and edge cases. I'm comfortable working solo or
            collaborating with a team through Git and code review.
          </p>
          <p>
            Outside of coursework, I spend time exploring new frameworks,
            contributing to side projects, and refining my development
            workflow.
          </p>
        </div>

        <div className="fact-list">
          <div className="fact-row">
            <span className="fact-key">degree</span>
            <span className="fact-val">B.S. Computer Science</span>
          </div>
          <div className="fact-row">
            <span className="fact-key">focus</span>
            <span className="fact-val">iOS &amp; Web Development</span>
          </div>
          <div className="fact-row">
            <span className="fact-key">languages</span>
            <span className="fact-val">Swift, JS, Python</span>
          </div>
          <div className="fact-row">
            <span className="fact-key">tools</span>
            <span className="fact-val">Git, Xcode, VS Code</span>
          </div>
          <div className="fact-row">
            <span className="fact-key">status</span>
            <span className="fact-val">open to opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
