import Markdown from "react-markdown";
import { resume } from "../../resume";

export function Skills() {
  const { skills } = resume;

  return (
    <section>
      <h1>Skills</h1>
      {skills.map(({ title, desc, value }, i) => (
        <div key={`skills-${i}`} className="skill-wrapper">
          <span className="skill-name">{title}</span>
          <div className="skill-value-wrapper" title={`${value}%`}>
            <div className="skill-value" style={{ width: `${value}%` }}></div>
          </div>
          <Markdown>{desc}</Markdown>
        </div>
      ))}
    </section>
  );
}
