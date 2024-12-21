import { resume } from "../../resume";

export function Work() {
  const { jobs } = resume;

  return (
    <section>
      <h1>Work Experience</h1>
      {jobs.map(({ title, company, period, desc }) => (
        <div key={title} className="job-wrapper">
          <div className="job-name">{title}</div>
          <span>
            {company}; {period}
          </span>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}
