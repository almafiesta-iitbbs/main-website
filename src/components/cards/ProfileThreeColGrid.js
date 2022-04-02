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
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
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
  subheading = "",
  description = "In case of any queries feel free to reach us",
  cards = [
    {
      imageSrc: ujjwal,
      position: "Coordinator",
      name: "Ujjwal Marothi",
      links: [
        {
          url: "mailto:um10@iitbbs.ac.in",
          icon: MailIcon,
        },
        {
          url: "https://api.whatsapp.com/send?phone=919863373310",
          icon: WhassIcon,
        },
        {
          url: "tel:919863373310",
          icon: PhoneIcon,
        },
      ],
    },
    {
      imageSrc: avipsa,
      position: "Cheif coordinator",
      name: "Avipsa Sahu",
      links: [
        {
          url: "mailto:coord.almafiesta@iitbbs.ac.in",
          icon: MailIcon,
        },
        {
          url: "https://api.whatsapp.com/send?phone=917008969719",
          icon: WhassIcon,
        },
        {
          url: "https://github.com",
          icon: PhoneIcon,
        },
      ],
    },
    {
      imageSrc: chetan,
      position: "Coordinator",
      name: "Chetan Meena",
      links: [
        {
          url: "mailto:cpm10@iitbbs.ac.in",
          icon: MailIcon,
        },
        {
          url: "https://api.whatsapp.com/send?phone=917023178941",
          icon: WhassIcon,
        },
        {
          url: "https://github.com",
          icon: PhoneIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container style={{ top: "-10rem" }}>
      <a id="contact" />
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {
            <Heading>
              Contact <span style={{ color: "#6415ff" }}>Us</span>{" "}
            </Heading>
          }
          {description && (
            <Description style={{ transform: "translate(0px,-20px)" }}>
              {description}
            </Description>
          )}
        </HeadingContainer>
        <Cards style={{ transform: "translate(0px,-40px)" }}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
