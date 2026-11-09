import TagMark from "./TagMark";
import Reveal from "./Reveal";
import CsRow from "./CsRow";
import { CASE_STUDIES } from "../data/caseStudies";

function ProjectCard({ project }) {
  return (
    <article className={`cs-card cs-card-${project.kind}`}>
      <span className="cs-name">{project.name}</span>
      <h3 className="cs-title">{project.title}</h3>
      {project.img && <img className="cs-person" src={project.img} alt="" loading="lazy" />}
    </article>
  );
}

export default function CaseStudies() {
  const cards = [...CASE_STUDIES, ...CASE_STUDIES];
  return (
    <section className="cs" id="deepdive">
      <Reveal className="cs-head">
        <div className="cs-tagwrap"><span className="cs-tag">Portfolio</span><TagMark /></div>
        <h2 className="cs-h">Selected projects</h2>
        <p className="cs-sub">Selected Quixta website and software examples across different industries.</p>
      </Reveal>
      <CsRow>
        <div className="cs-rtrack">
          {[0, 1].map((copy) => (
            <div className="cs-rset" key={copy} aria-hidden={copy === 1 || undefined}>
              {cards.map((project, i) => <ProjectCard key={`${copy}-${i}`} project={project} />)}
            </div>
          ))}
        </div>
      </CsRow>
    </section>
  );
}

