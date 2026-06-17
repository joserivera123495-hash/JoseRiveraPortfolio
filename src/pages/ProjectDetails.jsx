import { Link, useParams } from "react-router-dom";

const projects = {
    "trinity-hero-adventure": {
      title: "Trinity Hero Adventure",
      type: "Senior Capstone Game",
      description:
        "A complete 2D action RPG built in Unity with three playable heroes, independent save data, multi-scene progression, training systems, and boss gameplay.",
      tech: ["Unity", "C#", "Serialization"],
    },
  
    "skin-lesion-segmentation": {
      title: "Skin Lesion Segmentation",
      type: "Medical AI Project",
      description:
        "A computer vision project using a U-Net model for binary semantic segmentation of dermoscopic images with custom augmentation and training analysis.",
      tech: ["Python", "PyTorch", "Computer Vision"],
    },
  
    "personal-portfolio": {
      title: "Personal Portfolio",
      type: "React Website",
      description:
        "A clean Apple-inspired portfolio website built with React and Vite to showcase projects, skills, resume, and contact information.",
      tech: ["React", "Vite", "CSS"],
    },
  
    "fiesta-app": {
      title: "Fiesta App",
      type: "Startup Project",
      description:
        "A marketplace concept connecting customers with event vendors for catering, decorations, DJs, photography, and more across the Rio Grande Valley.",
      tech: ["SwiftUI", "iOS", "Marketplace"],
    },
  };

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <main>
        <section>
          <div className="wrap">
            <h1>Project not found</h1>
            <Link to="/" className="btn btn-primary">Back Home</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="wrap">
          <p className="section-label">{project.type}</p>
          <h1 className="section-title">{project.title}</h1>

          <p className="page-text">{project.description}</p>

          <div className="project-image-box">
            <p>Project image / screenshot goes here</p>
          </div>

          <h2>Tech Stack</h2>
          <div className="tags">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <h2>What I Built</h2>
          <p className="page-text">
            Add details about your role, features, problems solved, and what you learned.
          </p>

          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;