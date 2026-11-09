"use client";

import { useEffect, useRef } from "react";
import TagMark from "./TagMark";
import Reveal from "./Reveal";
import { FEATURED_WORK } from "../data/featuredWork";

function QuoteMark() {
  return <svg className="fw2-mark" viewBox="0 0 160 100" aria-hidden="true"><path fill="#000" d="M0 0h64v24H32v24h32v52H0zM96 0h64v24h-32v24h32v52H96z" /></svg>;
}

const GROUND = [[362,72,194,97],[246,131,310,38],[246,169,194,59],[440,180,54,48],[494,206,97,22],[300,228,291,27],[615,158,98,119],[300,255,413,22],[397,277,316,26],[322,303,194,96],[576,303,137,48],[576,351,98,97],[0,362,86,96],[0,458,172,62],[0,520,258,32],[852,106,588,534],[662,552,190,88]];
function Ground() {
  return <svg className="fw2-ground" viewBox="0 0 1440 640" preserveAspectRatio="none" shapeRendering="crispEdges" aria-hidden="true">{GROUND.map(([x,y,w,h],i)=><rect key={i} x={x} y={y} width={w} height={h} />)}</svg>;
}

export default function FeaturedWork() {
  const stackRef = useRef(null);
  useEffect(() => {
    const stack = stackRef.current;
    const head = stack?.parentElement.querySelector(".fw2-head");
    if (!stack || !head) return;
    const setHeight = () => stack.style.setProperty("--headH", `${head.offsetHeight}px`);
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(head);
    window.addEventListener("resize", setHeight);
    return () => { observer.disconnect(); window.removeEventListener("resize", setHeight); };
  }, []);

  return (
    <section className="fw2">
      <Reveal className="fw2-head">
        <div className="fw2-tagwrap"><span className="fw2-tag">The people behind Quixta</span><TagMark /></div>
        <h2 className="fw2-h">Meet the team building Quixta</h2>
      </Reveal>
      <div className="fw2-stack" ref={stackRef}>
        {FEATURED_WORK.map((item) => (
          <article className="fw2-card" key={item.id}>
            <div className="fw2-full"><div className="fw2-frame">
              <Ground />
              <span className="fw2-brand" aria-hidden="true" />
              <figure className="fw2-photo"><img src={item.image} alt="" loading="lazy" /></figure>
              <h3 className="fw2-headline">{item.line}</h3>
              <span className="fw2-chip"><QuoteMark /></span>
              <div className="fw2-quote">
                <div className="fw2-quoteText"><p>{item.quote}</p></div>
                <div className="fw2-by"><b>{item.name}</b><span>{item.category}</span></div>
              </div>
            </div></div>
          </article>
        ))}
      </div>
    </section>
  );
}
