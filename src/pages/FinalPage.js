import React, { useContext } from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import AboutUs from "components/features/AlmaTwoColSingleFeatureWithStats2";
import ContactUs from "components/cards/ProfileThreeColGrid";
import FAQ from "components/faqs/SingleCol";
import Events from "components/cards/AlmaThreeColSlider";
import Footer from "components/footers/FiveColumnWithInputForm";
import { AppContextProvider } from "context/AppContext";

export default () => {
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
