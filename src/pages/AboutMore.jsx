import { Link } from "react-router-dom";

function AboutMore() {
  return (
    <main>
      <section>
        <div className="wrap">
          <p className="section-label">About Me</p>
          <h1 className="section-title">More about Jose Rivera</h1>

          <div className="about-page-grid">
            <div>
              <p className="about-text">
                I am a Computer Science graduate focused on software engineering,
                web development, and building real applications.
              </p>

              <p className="page-text">
                Add more here about your background, goals, hobbies, work ethic,
                and why you want to become a software engineer.
              </p>

              <Link to="/" className="btn btn-primary">
                Back Home
              </Link>
            </div>

            <div className="profile-photo-box">
             <img
                src="/images/jose.png"
                alt="Jose Rivera"
                className="profile-photo"
                />
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMore;