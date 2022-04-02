import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import CountUp from "react-countup";
import ResponsiveVideoEmbed from "../../helpers/AlmaResponsiveVideoEmbed.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-20`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default ({
  subheading = "About",
  heading = <span style={{ fontFamily: "AlmaFont" }}>Alma Fiesta</span>,
  description = "A perfect world is all that we dream about, isn't it? A world where endless imaginations meet the bliss of reality, one where all the vices of humanity are nothing but mere inconceivable thoughts. Embarking on a similar journey, Alma Fiesta - the annual socio-cultural fest of IIT Bhubaneswar is here with its 13th edition that would take you close to the Utopia you dream of - a land where knowledge rules the mind and growth is fueled from within! The social and cultural themes of this edition of Alma Fiesta reflect this same vision of ours that we hope to celebrate. Through the social theme - 'Divyangjan Sashaktikaran: Agyanta Hi Ek Matra Viklangta Hai' we aim to arm the physically challenged with knowledge as a tool for growth and prosperity. Whereas the cultural theme 'Utopian Rhapsody: An abyss of endless possibilities' seeks the boundaries of infinite possibilities in a perfect world that would be powered by our collective imaginations.",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/GNXWLXqqxvw",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Footfall",
      value: "20",
      unit: "k",
    },
    {
      key: "Participating Institutions",
      value: "80",
    },
    {
      key: "Events",
      value: "100",
    },
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <a id="about" />
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn  className="Main2" css={imageContainerCss}>
          <StyledResponsiveVideoEmbed
            url={watchVideoYoutubeUrl}
            tw="w-full"
            background="transparent"
          />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            {subheading && (
              <Subheading style={{ fontSize: "35px" }}>{subheading}</Subheading>
            )}
            <Heading>{heading}</Heading>
            <Description style={{ textAlign: "justify", paddingRight: "10px" }}>
              {description}
            </Description>
            <Statistics  className="Main1" style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
              {statistics.map((statistic, index) => (
                <Statistic key={index} style={{ textAlign: "center" }}>
                  <Value>
                    <CountUp end={parseInt(statistic.value)} duration={2} />
                    {statistic.unit}+
                  </Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
