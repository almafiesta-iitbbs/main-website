import React from "react";
import VerticalWithAlternateImageAndText from "./components/features/AlmaVerticalWithAlternateImageAndText";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Footer from "components/footers/FiveColumnWithInputForm";

export default function Events() {
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <VerticalWithAlternateImageAndText />
      <Footer />
    </AnimationRevealPage>
  );
}
