const certs = [
  
  // { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2026" },
  // { name: "CompTIA Security+", issuer: "CompTIA", year: "2026" },
];

function Certifications() {
  if (certs.length === 0) return null; 

  return (
    <section id="certifications" className="wrap">
      <p className="section-label">Certifications</p>
      <h2 className="section-title">Verified credentials.</h2>

      <div className="skills-grid">
        {certs.map((c) => (
          <div className="card" key={c.name}>
            <h3>{c.name}</h3>
            <p>
              {c.issuer}
              {c.year ? ` · ${c.year}` : ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
