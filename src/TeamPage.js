import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";

import TeamPage from "components/cards/AlmaContactUs";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <TeamPage />
    </AnimationRevealPage>
  );
};
