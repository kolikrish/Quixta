import TagMark from "./TagMark";

function ContactIcon({ type }) {
  const paths = {
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    phone: <path d="M7 3h3l1.3 4-2 1.5a15 15 0 0 0 6.2 6.2l1.5-2 4 1.3v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 7c0-2.2.8-4 2-4Z" />,
    mail: <><rect x="3.5" y="5" width="17" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.6" cy="6.7" r=".8" fill="currentColor" stroke="none" /></>,
    linkedin: <><path d="M5 9v10M5 5v.1M9 19v-6a4 4 0 0 1 8 0v6M9 9v10" /><circle cx="5" cy="5" r="1" fill="currentColor" stroke="none" /></>,
  };

  return <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

function ArrowUpRight() {
  return <span className="contact-card-arrow" aria-hidden="true">&#8599;</span>;
}

export default function ContactSection() {
  return (
    <section className="contact sec" id="contact-section">
      <div className="wrap contact-in">
        <header className="contact-intro">
          <div className="contact-tagwrap"><span className="contact-tag">LET'S TALK</span><TagMark /></div>
          <h2 className="contact-title">Good work starts with a conversation.</h2>
          <p className="contact-intro-copy">Tell us what you are building. We would love to hear about your next website, software, or search project.</p>
        </header>

        <div className="contact-layout">
          <a className="contact-office" href="https://www.google.com/maps/search/?api=1&query=Quixta%2C%2016%2F2%2C%202nd%20Floor%2C%20Sobha%20Alexander%20Plaza%2C%20Commissariat%20Rd%2C%20Ashok%20Nagar%2C%20MG%20Road%2C%20Bengaluru%2C%20Karnataka%20560025" target="_blank" rel="noopener noreferrer">
            <div className="contact-office-top"><span className="contact-office-icon"><ContactIcon type="pin" /></span><span className="contact-office-label">COME BY</span></div>
            <div>
              <h3>Our office</h3>
              <address>Quixta, 16/2, 2nd Floor,<br />Sobha Alexander Plaza,<br />Commissariat Rd, Ashok Nagar,<br />MG Road, Bengaluru, Karnataka 560025</address>
            </div>
            <span className="contact-office-action">GET DIRECTIONS <ArrowUpRight /></span>
          </a>

          <div className="contact-channels">
            <a className="contact-channel" href="tel:+918618237189">
              <span className="contact-channel-icon"><ContactIcon type="phone" /></span>
              <span className="contact-channel-label">CALL</span>
              <strong>+91 86182 37189</strong>
              <span className="contact-channel-action">Call Quixta <ArrowUpRight /></span>
            </a>
            <a className="contact-channel" href="mailto:hello@quixta.com">
              <span className="contact-channel-icon"><ContactIcon type="mail" /></span>
              <span className="contact-channel-label">EMAIL</span>
              <strong>hello@quixta.com</strong>
              <span className="contact-channel-action">Write to us <ArrowUpRight /></span>
            </a>
            <a className="contact-channel" href="https://www.instagram.com/buildwith.quixta/" target="_blank" rel="noopener noreferrer">
              <span className="contact-channel-icon"><ContactIcon type="instagram" /></span>
              <span className="contact-channel-label">INSTAGRAM</span>
              <strong>@buildwith.quixta</strong>
              <span className="contact-channel-action">Follow along <ArrowUpRight /></span>
            </a>
            <a className="contact-channel" href="https://in.linkedin.com/company/quixta" target="_blank" rel="noopener noreferrer">
              <span className="contact-channel-icon"><ContactIcon type="linkedin" /></span>
              <span className="contact-channel-label">LINKEDIN</span>
              <strong>Quixta</strong>
              <span className="contact-channel-action">Connect with us <ArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
