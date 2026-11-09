import Link from "next/link";

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" fill="none" stroke="currentColor" strokeWidth="2" /></svg>;
}

export default function Footer({ hideCta = false, hideContactCta = false }) {
  const showCta = !hideCta && !hideContactCta;
  return (
    <footer className="qf" id="contact">
      <div className="qf__inner">
        {showCta && (
          <section className="qf__cta">
            <div className="qf__ctaCopy">
              <span className="qf__eyebrow"><i /> HAVE A PROJECT IN MIND?</span>
              <h2>Let&rsquo;s build your next digital move.</h2>
              <p>Websites, software and search experiences shaped around your business.</p>
            </div>
            <div className="qf__actions">
              <Link className="qf__button qf__button--primary" href="/contact">Discuss your project <Arrow /></Link>
              <Link className="qf__button qf__button--secondary" href="/#work">Explore the portfolio <Arrow /></Link>
            </div>
            <span className="qf__step" aria-hidden="true" />
          </section>
        )}

        <div className="qf__main">
          <div className="qf__brandBlock">
            <Link className="qf__logo" href="/" aria-label="Quixta home">
              <img src="/quixta-logo/Quixta-logo-1.svg" alt="Quixta" />
            </Link>
            <p>Web design, software development and search growth.</p>
          </div>
          <nav className="qf__nav" aria-label="Footer">
            <Link href="/">Home</Link>
            <Link href="/#levers">Services</Link>
            <Link href="/#work">Portfolio</Link>
            {!hideContactCta && <Link href="/contact">Contact</Link>}
          </nav>
        </div>

        <div className="qf__bottom">
          <span>© 2026 Quixta</span>
          <span>Bengaluru, India</span>
          <span>Websites · Software · Search</span>
        </div>
      </div>
    </footer>
  );
}
