"use client";

import TagMark from "./TagMark";
import Reveal from "./Reveal";
import { FEATURED_WORK } from "../data/featuredWork";

function QuoteMark() {
  return <svg className="fwm-mark" viewBox="0 0 68 42" aria-hidden="true"><path d="M0 0h26v12H0zM14 12h12v9H14zM0 21h26v21H0zM42 0h26v12H42zM56 12h12v9H56zM42 21h26v21H42z" /></svg>;
}

export default function FeaturedWorkMobile() {
  return (
    <section className="fw">
      <Reveal className="fw-head">
        <div className="fw-tagwrap"><span className="fw-tag">Portfolio highlights</span><TagMark /></div>
        <h2 className="fw-h">Selected Quixta projects</h2>
      </Reveal>
      <div className="fwm-list">
        {FEATURED_WORK.map((item) => (
          <article className="fwm-card" key={item.id}>
            <div className="fwm-panel">
              <span className="fwm-chip"><QuoteMark /></span>
              <div className="fwm-top">
                <img className="fwm-photo" src={item.image} alt="" loading="lazy" />
                <div className="fwm-by"><b>{item.name}</b><span>{item.category}</span></div>
                <h3 className="fwm-line">{item.line}</h3>
              </div>
              <div className="fwm-quote"><p>{item.mobileQuote || item.quote}</p></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
