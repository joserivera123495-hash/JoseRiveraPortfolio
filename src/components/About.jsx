import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="wrap">
      <Reveal>
        <p className="section-label">About</p>
        <p className="about-text">
          A Computer Science graduate from UTRGV with real technical range.{" "}
          <span>
            Before focusing on software, I worked in industrial electrical
            environments including SpaceX Starbase — which sharpened my
            discipline, troubleshooting, and attention to detail under pressure.
          </span>
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="facts">
          <div className="fact">
            <div className="label">Degree</div>
            <div className="value">B.S. Computer Science</div>
          </div>
          <div className="fact">
            <div className="label">School</div>
            <div className="value">UTRGV</div>
          </div>
          <div className="fact">
            <div className="label">Location</div>
            <div className="value">Mercedes, Texas</div>
          </div>
          <div className="fact">
            <div className="label">Status</div>
            <div className="value">Open to roles</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
