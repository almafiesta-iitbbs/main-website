import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import GoogleLogin from "react-google-login";
import { BrowserRouter, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import config from "./../../config";

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
  const history = useHistory();

  const onGoogleLoginSuccess = async (res) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        { tokenId: res.tokenId },
        {
          withCredentials: true,
        }
      );
      if (loginResponse.status === 201) {
        toast(`Welcome to Alma Fiesta`, { autoClose: 2000 });
        history.push("/additional-info");
      } else if (loginResponse.status === 200) {
        toast(`Logged in Successfully`, { autoClose: 2000 });
        history.push("/final-page");
      }
    } catch (e) {
      toast.error("There was some error! Please try again later");
    }
  };

  const onGoogleLoginFailure = async (res) => {
    toast.error("There was some error! Please try again later");
    // store returned user somehow
  };

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">About</NavLink>
      <NavLink href="/#">Contact</NavLink>
      <NavLink href="/#">Gallery</NavLink>
      <NavLink href="/#">Wokshops @alienbrains</NavLink>
      <NavLink href="/#">FAQs</NavLink>
      <GoogleLogin
        className="google-login"
        clientId={config.REACT_APP_CLIENT_ID}
        render={(renderProps) => (
          <PrimaryLink
            css={tw`rounded-full cursor-pointer`}
            onClick={renderProps.onClick}
          >
            Log in
          </PrimaryLink>
        )}
        isSignedIn={false}
        onSuccess={onGoogleLoginSuccess}
        onFailure={onGoogleLoginFailure}
        cookiePolicy={"single_host_origin"}
        icon={false}
        padding={100}
      />
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
