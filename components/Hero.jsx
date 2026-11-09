"use client";

import SiteNav from "./SiteNav";
import HeroScroll from "./HeroScroll";
import {
  SKY_PIECES,
  SKY_VIEWBOX,
  TET_M_W,
  TET_M_H,
  TET_M_PIECES,
  tetPoints,
} from "./tetrisPieces";

export default function Hero() {
  return (
    <header className="hx" id="top">
      <div className="hx-in">
        <div className="hx-bar">
          <SiteNav logoHref="#top" />
        </div>

        <div className="hx-stair" aria-hidden="true">
          {/* mobile: its own, narrower skyline, traced from the mobile mock */}
          <svg className="hx-tet-m" viewBox={`0 0 ${TET_M_W} ${TET_M_H}`} preserveAspectRatio="xMidYMax meet">
            {TET_M_PIECES.map((p, i) => (
              <polygon
                key={i}
                fill={p.fill}
                stroke="var(--paper)"
                strokeWidth="3"
                strokeLinejoin="miter"
                points={tetPoints(p.pts)}
              />
            ))}
          </svg>
          <div className="hx-step hx-s1 hx-y">
            <span className="hx-stat">
              <strong className="hx-num">10+ Years</strong>
              <span className="hx-cap hx-cap-d">Building digital products</span>
                {/* mobile stacks the service areas one to a line instead */}
              <span className="hx-cap hx-cap-m">
                Web.
                <br />
                Apps.
                <br />
                Search.
              </span>
            </span>
          </div>
          <div className="hx-step hx-s3 hx-y">
            <span className="hx-tag hx-tag--s3">
              <strong className="hx-num">
                27+
              </strong>
              <span className="hx-cap">
                Countries
                <br />
                Reached
              </span>
            </span>
          </div>
          <div className="hx-step hx-s2 hx-v">
            <span className="hx-tag">
              <span className="hx-cap hx-cap--bold">More than</span>
              <strong className="hx-num hx-num--s2">480+</strong>
              <span className="hx-cap">Projects</span>
            </span>
          </div>
          <div className="hx-step hx-s4 hx-v">
            <span className="hx-tag">
              <strong className="hx-num">410+</strong>
              <span className="hx-cap">
                Clients served
                <br />
                with so far
              </span>
            </span>
          </div>
        </div>

        {/* desktop: the tetris skyline, one svg per piece so the scroll curtain
            can raise each on its own delay (see HeroScroll) */}
        <div className="hx-sky" aria-hidden="true">
          {SKY_PIECES.map((p, i) => (
            <svg key={i} className="hx-piece" data-d={p.d} viewBox={SKY_VIEWBOX} preserveAspectRatio="xMidYMax slice">
              <polygon fill={p.fill} points={p.pts} />
            </svg>
          ))}
        </div>
        <HeroScroll />

        <div className="hx-copy">
          <h1 className="hx-h">
            {/* each phrase highlights in the colour of its staircase block */}
            <u className="hx-w hx-w-y">Websites</u>{" "}
            <u className="hx-w hx-w-v">& Software</u>
            {/* mobile folds the headline into the same short three-line shape */}
            <br className="hx-br-m" />{" "}
            Built
            <br className="hx-br-d" />
            {" "}For Growth
            <br className="hx-br-m" />{" "}
            <u className="hx-w hx-w-y">Business</u>{" "}
            <u className="hx-w hx-w-v">Outcomes.</u>
          </h1>
          <p className="hx-sub">
            <span className="hx-sub-d">
              Quixta designs and builds websites, web applications and search experiences for
              B2B teams in India and internationally.
            </span>
            <span className="hx-sub-m">
              Web design, custom software and search growth for B2B businesses.
            </span>
          </p>
          <a className="hx-cta" href="/contact">
            <span className="hx-cta-t">Discuss your project</span>
            <span className="hx-cta-i" aria-hidden="true">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                {/* the same solid step mark as Where You Are Now's "Read full story" */}
                <path fill="#FE712B" d="M10 10 H30 V30 H23.333 V23.333 H16.667 V16.667 H10 Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
