import { useState } from "react";

// 1. Sign up free at https://formspree.io
// 2. Create a form, copy its ID (looks like "xyzabcd")
// 3. Paste it below.
const FORMSPREE_ID = "YOUR_FORM_ID";

function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("Sending…");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("Thanks — your message was sent.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("Something went wrong. Please email me directly.");
    }
  }

  return (
    <section id="contact" className="wrap">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's connect.</h2>

      <div className="contact-grid">
        <div className="contact-intro">
          <p>
            I'm open to software engineering, web, iOS, AI, QA, and IT roles —
            internships and new-grad positions included.
          </p>
          <div className="contact-links">
            <a href="mailto:joserivera123495@gmail.com">
              joserivera123495@gmail.com
            </a>
            <a
              href="https://github.com/joserivera123495-hash"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jose-rivera-8a338b251"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about the role or project"
              required
            />
          </label>
          <button type="submit">Send Message</button>
          <p className="form-status">{status}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
