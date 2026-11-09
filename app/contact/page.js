import SiteNav from "../../components/SiteNav";
import Footer from "../../components/Footer";

export const metadata = { title: "Contact Quixta | Discuss a Project" };

export default function ContactPage() {
  return <>
    <main className="contact sec">
      <header className="hx-bar hx-bar--page"><SiteNav logoHref="/" /></header>
      <div className="wrap contact-in">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-head">
              <h1 className="d1">Start a conversation</h1>
              <p className="contact-sub">Tell Quixta about your website, software or search project. The published contact process says the team responds within one business day, discusses requirements and prepares a fixed-price proposal after briefing.</p>
            </div>
            <a className="contact-link" href="https://quixta.com/contact" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-icon contact-link-icon--acid" aria-hidden="true">↗</span>
              Open Quixta’s contact page
            </a>
            <p className="contact-sub">The audit also describes a free 30-minute discovery call with founder Anand Ashok.</p>
          </div>
          <div className="contact-form contact-form--note">
            <h2>What to expect</h2>
            <p>Share your requirements, discuss scope and timelines, and receive a project proposal. Work begins after the proposal is approved.</p>
            <a className="contact-submit" href="https://quixta.com/contact" target="_blank" rel="noopener noreferrer">
              <span className="contact-submit-label">CONTACT QUIXTA</span>
              <span className="contact-submit-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer hideContactCta />
  </>;
}
