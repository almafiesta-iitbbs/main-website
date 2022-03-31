import React from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import AboutUs from "components/features/AlmaTwoColSingleFeatureWithStats2";
import ContactUs from "components/cards/ProfileThreeColGrid";
import FAQ from "components/faqs/SingleCol";
import Events from "components/cards/AlmaThreeColSlider";
import Footer from "components/footers/MiniCenteredFooter";

export default () => {
  // const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  // const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <AboutUs id="about" />
      <Events id="events" />
      <ContactUs id="contact" />
      <FAQ id="faqs" />
      <Footer />
    </AnimationRevealPage>
  );
};
