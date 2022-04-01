import React from "react";
import VerticalWithAlternateImageAndText from "./components/features/AlmaVerticalWithAlternateImageAndText";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";

export default function Events() {
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <VerticalWithAlternateImageAndText />
    </AnimationRevealPage>
  );
}
