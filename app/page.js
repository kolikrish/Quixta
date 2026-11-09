import Hero from "../components/Hero";
import HeroCurtain from "../components/HeroCurtain";
import FeaturedWork from "../components/FeaturedWork";
import FeaturedWorkMobile from "../components/FeaturedWorkMobile";
import WhereYouAreNow from "../components/WhereYouAreNow";
import Levers from "../components/Levers";
import WhyQuixta from "../components/WhyQuixta";
import SelectedWork from "../components/SelectedWork";
import CaseStudies from "../components/CaseStudies";
import Partnership from "../components/Partnership";
import News from "../components/News";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCurtain />
      {/* Desktop and mobile portfolio layouts share one section anchor. */}
      <div id="featured">
        <FeaturedWork />
        <FeaturedWorkMobile />
      </div>
      <WhereYouAreNow />
      <Levers />
      <WhyQuixta />
      <SelectedWork />
      {/* Founders section is hidden for now */}
      <Partnership />
      <CaseStudies />
      <News />
      <ContactSection />
      <Footer />
    </>
  );
}
