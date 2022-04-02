import React from "react";
import tw from "twin.macro";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-2  lg:py-2 bg-purple-200 rounded-lg relative`;
const Subheading = tw.h6`text-primary-500 opacity-75`;

export default ({
  subheading = "In Case of any query, Contact us: Sharthak:9876543210, Sharthak:9876543210, Sharthak:9876543210;",
  pushDownFooter = true,
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-0 lg:mb-0`}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer>
          {/* <TextContainer> */}
          {subheading && (
            <Subheading style={{ fontSize: "20px", textAlign: "center" }}>
              {subheading}
            </Subheading>
          )}
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
