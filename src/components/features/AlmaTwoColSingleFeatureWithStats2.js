import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import CountUp from "react-countup";
import ResponsiveVideoEmbed from "../../helpers/AlmaResponsiveVideoEmbed.js";
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-4 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
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

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

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
  heading = <>Alma Fiesta</>,
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
      key: "Clients",
      value: "2282+",
    },
    {
      key: "Projects",
      value: "3891+",
    },
    {
      key: "Awards",
      value: "1000+",
    },
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <a id="about" />
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss} style={{ top: "180px" }}>
          <StyledResponsiveVideoEmbed
            url={watchVideoYoutubeUrl}
            tw="w-full"
            background="transparent"
          />
        </ImageColumn>
        {/* <LeftColumn> */}

        {/* </LeftColumn> */}
        {/* <RightColumn> */}
        <TextColumn>
          <TextContent>
            {subheading && (
              <Subheading style={{ fontSize: "35px" }}>{subheading}</Subheading>
            )}
            <Heading>{heading}</Heading>
            <Description style={{ textAlign: "justify", paddingRight: "10px" }}>
              {description}
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>
                    <CountUp end={parseInt(statistic.value)} duration={2} />+
                  </Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
        {/* </RightColumn> */}
      </TwoColumn>
    </Container>
  );
};
