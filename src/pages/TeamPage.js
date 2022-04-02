import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Footer from "components/footers/FiveColumnWithInputForm";

import TeamPage from "components/cards/AlmaContactUs";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <TeamPage />
      <Footer />
    </AnimationRevealPage>
  );
};
