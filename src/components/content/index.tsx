import Markdown from "react-markdown";
import { resume } from "../../resume";
import { Skills } from "./skills";
import { Work } from "./work";
import { Projects } from "./projects";

export function Content() {
  const { summary, sections } = resume;

  return (
    <main className="content">
      <section>
        <h1>Introduction</h1>
        <Markdown>{summary}</Markdown>
      </section>

      <Skills />
      <Work />
      <Projects />

      {sections.map(({ title, desc }, i) => (
        <section key={`section-${i}`}>
          <h1>{title}</h1>
          <Markdown>{desc}</Markdown>
        </section>
      ))}
    </main>
  );
}
