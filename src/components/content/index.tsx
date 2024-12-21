import { resume } from "../../resume";
import { Skills } from "./skills";
import { Work } from "./work";
import { Projects } from "./projects";

export function Content() {
  const { summary, sections } = resume;

  return (
    <main className="content">
      <section>
        <h1>Career Summary</h1>
        <p>{summary}</p>
      </section>

      <Skills />
      <Work />
      <Projects />

      {sections.map(({ title, desc }) => (
        <section key={title}>
          <h1>{title}</h1>
          <p>{desc}</p>
        </section>
      ))}
    </main>
  );
}
