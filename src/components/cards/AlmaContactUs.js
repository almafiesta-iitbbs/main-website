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
import { ReactComponent as MailIcon } from "images/final-main-page/icons8-mail.svg";
import { ReactComponent as WhassIcon } from "images/final-main-page/icons8-whatsapp.svg";
import { ReactComponent as PhoneIcon } from "images/final-main-page/icons8-phone.svg";

import ujjwal from "images/final-main-page/img/ujjwal.jpg";
import avipsa from "images/final-main-page/img/avipsaf.png";
import chetan from "images/final-main-page/img/chetan.jpg";

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

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Our Team",
  subheading = "Web Development Team",
  description = "",
  teams = [
    {
      name: "Web Development Team",
      members: [
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
      ],
    },
    {
      name: "Sponsorship Team",
      members: [
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
      ],
    },
    {
      name: "Sponsorship Team",
      members: [
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
      ],
    },
    {
      name: "Sponsorship Team",
      members: [
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
      ],
    },
    {
      name: "Sponsorship Team",
      members: [
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
        { imageSrc: chetan, name: "Chetan Meena" },
      ],
    },
  ],
  cards = [
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },

    {
      imageSrc: chetan,
      position: "Coordinator",
      name: "Chetan Meena",
      links: [],
    },
    {
      imageSrc: chetan,
      position: "Coordinator",
      name: "Chetan Meena",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [],
    },
  ],
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
              {team.members.map((card, index) => (
                <Card key={index}>
                  <CardImage imageSrc={card.imageSrc} />
                  <CardContent>
                    <span className="name">{card.name}</span>
                  </CardContent>
                </Card>
              ))}
            </Cards>
          </React.Fragment>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};
