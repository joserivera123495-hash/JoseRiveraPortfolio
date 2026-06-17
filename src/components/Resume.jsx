function Resume() {
  return (
    <section id="resume">
      <div className="section-head">
        <div className="eyebrow">04 / resume</div>
        <h2>Resume</h2>
      </div>

      <div className="resume-inner">
        <div className="resume-copy">
          <h3>resume.pdf</h3>
          <p>
            A complete overview of my education, experience, and skills.
            Download a copy to learn more or to share with your team.
          </p>
        </div>

        <a className="download-btn" href="/resume.pdf" download>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1v9m0 0L4.5 6.5M8 10l3.5-3.5M2 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
