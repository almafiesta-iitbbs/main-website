import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";

import TeamDetails from "../../data/teamConfig.json";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto mb-10`;
const Card = tw.div`mt-12 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() +
      splitStr[i].substring(1).toLowerCase();
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

export default ({
  heading = "Our Team",
  subheading = "Web Development Team",
  description = "",
  teams = TeamDetails,
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <br />
        <br />
        {teams.map((team, index) => (
          <React.Fragment key={index}>
            <Subheading
              style={{ fontSize: "1.2rem", textDecoration: "underline" }}
            >
              {team.name}
            </Subheading>
            <Cards>
              {team.members.map((card, index) => {
                const fname = card.split(" ")[0];
                return (
                  <Card key={index}>
                    <CardImage imageSrc={`/team/${card}.jpg`} />
                    <CardContent>
                      <span className="name">{titleCase(card)}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </Cards>
          </React.Fragment>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};
