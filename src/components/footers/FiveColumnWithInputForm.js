import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import LogoImage from "images/final/Logo4.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "images/instagram.svg";
const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-10 lg:py-12`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;
const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100  transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <ThreeColRow>
          <LogoContainer>
            <LogoImg
              src={LogoImage}
              style={{ height: "5rem", width: "6rem", paddingRight: "2%" }}
            />
            <LogoText
              style={{
                fontFamily: "AlmaFont",
                paddingLeft: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Alma Fiesta
            </LogoText>
          </LogoContainer>
          <CopywrightNotice>
            &copy; 2022 Alma Fiesta | All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/almafiesta">
              <FacebookIcon  className="IconHandler"/>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/almafiesta.iitbbs/">
              <InstagramIcon className="IconHandler"/>
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCVAHFAfxXx0ZaOyS5VczKiA">
              <YoutubeIcon className="IconHandler"/>
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
