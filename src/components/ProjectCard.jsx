export default function ProjectCard({ title, label, description, points, tech, links, featured = false }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-top">
        <div>
          <p className="eyebrow">{label}</p>
          <h3>{title}</h3>
        </div>
      </div>

      <p className="project-description">{description}</p>

      <ul className="project-points">
        {points.map((point) => <li key={point}>{point}</li>)}
      </ul>

      <div className="tech-list" aria-label={`${title} technology stack`}>
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>

      <div className="project-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
