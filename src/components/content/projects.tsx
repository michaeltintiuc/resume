import { resume } from "../../resume";

export function Projects() {
  const { projects } = resume;

  return (
    <section>
      <h1>Projects</h1>
      {projects.map(({ title, url, desc }) => (
        <div key={title} className="project-wrapper">
          <div className="project-meta">
            <span className="project-name">{title}</span>
            <a className="project-link" href={url} target="_blank">
              {url}
            </a>
          </div>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}
