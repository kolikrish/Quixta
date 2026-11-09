import TagMark from "./TagMark";
import Reveal from "./Reveal";

const DIFFERENTIATORS = [
  {
    title: "Clear from the start",
    description: "A shared plan, visible milestones, and straightforward updates keep the work easy to follow.",
  },
  {
    title: "Work with the people doing the work",
    description: "Talk directly with the team shaping and building your project, so decisions stay close to the craft.",
  },
  {
    title: "Research before assumptions",
    description: "We take time to understand your business and audience before design and development begin.",
  },
  {
    title: "Support beyond launch",
    description: "We can keep improving your site or product as your team, customers, and goals change.",
  },
];

export default function WhyQuixta() {
  return (
    <section className="why-different sec" id="why-quixta">
      <div className="wrap why-different-in">
        <Reveal className="why-different-head">
          <div className="why-different-tagwrap">
            <span className="why-different-tag">THE QUIXTA APPROACH</span>
            <TagMark />
          </div>
          <div className="why-different-intro">
            <h2>Thoughtful work. A clearer process.</h2>
            <p>Good digital work comes from understanding the problem, staying close to the people solving it, and keeping the conversation open.</p>
          </div>
        </Reveal>

        <div className="why-different-list">
          {DIFFERENTIATORS.map((item, index) => (
            <Reveal as="article" className="why-different-row" key={item.title}>
              <span className="why-different-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="why-different-mark" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
