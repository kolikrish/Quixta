import Hero from "../components/Hero";
import HeroCurtain from "../components/HeroCurtain";
import FeaturedWorkMobile from "../components/FeaturedWorkMobile";
import WhereYouAreNow from "../components/WhereYouAreNow";
import Levers from "../components/Levers";
import WhyQuixta from "../components/WhyQuixta";
import TeamSection from "../components/TeamSection";
import SelectedWork from "../components/SelectedWork";
import CaseStudies from "../components/CaseStudies";
import Partnership from "../components/Partnership";
import News from "../components/News";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Founders from "../components/Founders";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCurtain />
      {/* Desktop and mobile portfolio layouts share one section anchor. */}
      <div id="featured">
        <Founders />
        <FeaturedWorkMobile />
      </div>
      <WhereYouAreNow />
      <Levers />
      <WhyQuixta />
      <TeamSection />
      <SelectedWork />
      <Partnership />
      <CaseStudies />
      <News />
      <ContactSection />
      <Footer />
    </>
  );
}
