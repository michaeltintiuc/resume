import Markdown from "react-markdown";
import { resume } from "../../resume";

export function Projects() {
  const { projects } = resume;

  return (
    <section>
      <h1>Personal projects</h1>
      {projects.map(({ title, url, desc }, i) => (
        <div key={`projects-${i}`} className="project-wrapper">
          <div className="project-meta">
            <span className="project-name">{title}</span>
            <a className="project-link" href={url} target="_blank">
              {url}
            </a>
          </div>
          <Markdown>{desc}</Markdown>
        </div>
      ))}
    </section>
  );
}
