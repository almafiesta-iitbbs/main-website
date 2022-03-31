import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import ab_logo from "../../images/final/ab_logo.png";
import Background from "../../images/final/pic08.jpg";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#about">About</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/#events">Events</NavLink>
      <NavLink href="/workshops">Wokshops @alienbrains</NavLink>
      <NavLink href="/#faqs">FAQs</NavLink>
      <NavLink href="/team-page">Our Team</NavLink>
      <NavLink href="/#contact">Contact</NavLink>
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Register
      </NavLink> */}
      <PrimaryLink css={tw`rounded-full`} href="/#">
        Register
      </PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container style={{ backgroundImage: `url(${Background})` }}>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            {/* <Notification>
              We have now launched operations in Europe.
            </Notification> */}
            <Heading>
              <img
                src={ab_logo}
                alt="logo"
                style={{
                  display: "inline-block",
                  width: "3rem",
                  height: "3rem",
                  paddingRight: "2%",
                  paddingTop: "2%",
                }}
              />
              <span style={{ fontSize: "2rem", fontFamily: "Montserrat" }}>
                Alien Brains
              </span>
              <span style={{ fontSize: "0.8rem", paddingLeft: "2%" }}>
                presents
              </span>
              <br />
              <SlantedBackground style={{ marginTop: "5%" }}>
                <span tw="text-primary-500">Alma Fiesta 2022</span>
              </SlantedBackground>
            </Heading>
            {/* <PrimaryAction>Read Customer Stories</PrimaryAction> */}
            <br />
            <br />
          </LeftColumn>

          <RightColumn>
            {/* <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            /> */}
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
