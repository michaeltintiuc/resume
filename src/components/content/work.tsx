import Markdown from "react-markdown";
import { resume } from "../../resume";

export function Work() {
  const { jobs } = resume;

  return (
    <section>
      <h1>Work Experience</h1>
      {jobs.map(({ title, company, period, desc }, i) => (
        <div key={`work-${i}`} className="job-wrapper">
          <div className="job-name">{title}</div>
          <span>
            {company}; {period}
          </span>
          <Markdown>{desc}</Markdown>
        </div>
      ))}
    </section>
  );
}
