import TagMark from "./TagMark";
import Reveal from "./Reveal";

export default function TeamSection() {
  return (
    <section className="team-story sec" id="team">
      <div className="wrap team-story-in">
        <Reveal className="team-story-copy">
          <div className="team-story-tagwrap">
            <span className="team-story-tag">THE BUILDERS</span>
            <TagMark />
          </div>
          <h2>Meet the people behind the work.</h2>
          <p>Thoughtful ideas need curious people, good collaboration, and a team that cares about the details. Here is a glimpse of the people and moments that make Quixta.</p>
          <span className="team-story-note"><i aria-hidden="true" /> Design, build, and grow together</span>
        </Reveal>

        <Reveal className="team-story-gallery">
          <figure className="team-story-main">
            <img src="/team/4.png" alt="Quixta team together outdoors" loading="lazy" />
            <figcaption>One team, many perspectives</figcaption>
          </figure>
          <figure className="team-story-side team-story-side--work">
            <img src="/team/2.png" alt="Quixta teammates working together around a laptop" loading="lazy" />
            <figcaption>Working through ideas</figcaption>
          </figure>
          <figure className="team-story-side team-story-side--together">
            <img src="/team/3.png" alt="Quixta team sharing ideas outside" loading="lazy" />
            <figcaption>Good work is collaborative</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
